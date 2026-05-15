import { isAxiosError } from 'axios'
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/core/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/core/components/ui/field'
import { InputGroup, InputGroupInput } from '@/core/components/ui/input-group'
import { Spinner } from '@/core/components/ui/spinner'

import apiAuth from '../api/api.auth'
import type { RegisterErrorResponse, RegisterPayload } from '../types/register.type'

export function RegisterForm() {
  // Global error state (server/network/general errors)
  const [globalError, setGlobalError] = useState<string | null>(null)

  // Success message state from server response
  const [serverSuccessMessage, setServerSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<RegisterPayload>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    // Reset all UI states before request
    setGlobalError(null)
    setServerSuccessMessage(null)
    clearErrors()

    try {
      // Send register request to API
      const res = await apiAuth.register(data)

      // Set success message from API response
      setServerSuccessMessage(res.message)
    } catch (error) {
      // Clear success state when error occurs
      setServerSuccessMessage(null)

      // Handle Axios error only
      if (isAxiosError<RegisterErrorResponse>(error)) {
        // Handle network error (no response from server)
        if (!error.response) {
          setGlobalError('Network error: Server tidak menjangkau atau masalah koneksi.')
          return
        }

        // Extract API response data
        const responseData = error.response.data

        // Set global error message from server
        setGlobalError(responseData.message || 'Terjadi kesalahan pada server.')

        // Handle field validation errors from server
        if (responseData?.errors?.length) {
          responseData.errors.forEach((err) => {
            setError(err.field, {
              type: 'server',
              message: err.message,
            })
          })
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        {/* Global feedback message (error or success) */}
        <Field>
          {!serverSuccessMessage && globalError && <FieldError>{globalError}</FieldError>}

          {!globalError && serverSuccessMessage && (
            <div className="text-green-600">{serverSuccessMessage}</div>
          )}
        </Field>

        {/* Form input fields */}
        <FieldGroup>
          {/* Username input */}
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="username"
                type="text"
                placeholder="username"
                {...register('username', { required: 'username required' })}
              />
            </InputGroup>
            {errors.username && <FieldError>{errors.username.message}</FieldError>}
          </Field>

          {/* Email input */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="email"
                {...register('email', { required: 'email required' })}
              />
            </InputGroup>
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          {/* Password input */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="password"
                type="password"
                placeholder="password"
                {...register('password', { required: 'password required' })}
              />
            </InputGroup>
            {errors.password && <FieldError>{errors.password.message}</FieldError>}
          </Field>
        </FieldGroup>

        {/* Submit button section */}
        <FieldGroup>
          <Field>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? <Spinner /> : 'Register'}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
