import { isAxiosError } from 'axios'
import { EyeClosedIcon, EyeIcon, LockIcon } from 'lucide-react'
import { useState } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { Button } from '@/core/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/core/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/core/components/ui/input-group'
import { Spinner } from '@/core/components/ui/spinner'

import apiAuth from '../api/api.auth'
import type { LoginErrorResponse, LoginPayload } from '../types/auth.type'

export function LoginForm() {
  // Global error state (server/network/general errors)
  const [globalError, setGlobalError] = useState<string | null>(null)

  const [isPassword, setIsPassword] = useState<boolean | false>(false)

  // Success message state from server response
  const [serverSuccessMessage, setServerSuccessMessage] = useState<string | null>(null)

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginPayload>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const togglePassword = () => {
    setIsPassword((prev) => !prev)
  }

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    // Reset all UI states before request
    setGlobalError(null)
    setServerSuccessMessage(null)
    clearErrors()

    try {
      // Send login request to API
      const res = await apiAuth.login({
        email: data.email,
        password: data.password,
      })

      // Set success message from API response
      setServerSuccessMessage(res.message)

      // Reset form after successful login
      if (res.status === 'success') {
        reset({
          email: '',
          password: '',
        })
      }
    } catch (error) {
      // Clear success state when error occurs
      setServerSuccessMessage(null)

      // Handle Axios error only
      if (isAxiosError<LoginErrorResponse>(error)) {
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
          {/* Email input */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <FieldDescription>
              Enter the email address associated with your account.
            </FieldDescription>

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
              }}
              render={({ field }) => (
                <InputGroup>
                  <InputGroupInput
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </InputGroup>
              )}
            />

            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          {/* Password input */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <FieldDescription>Enter your password to access your account.</FieldDescription>

            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
              }}
              render={({ field }) => (
                <InputGroup>
                  <InputGroupInput
                    id="password"
                    type={isPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    {...field}
                  />
                  <InputGroupAddon>
                    <LockIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton type="button" onClick={togglePassword}>
                      {isPassword ? <EyeIcon /> : <EyeClosedIcon />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              )}
            />

            {errors.password && <FieldError>{errors.password.message}</FieldError>}
          </Field>
        </FieldGroup>

        {/* Submit button section */}
        <FieldGroup>
          <Field>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? <Spinner /> : 'Login'}
            </Button>
          </Field>
          <Field
            orientation="horizontal"
            className="text-muted-foreground flex justify-center text-sm"
          >
            Don&apos;t have an account yet?
            <Link
              to="/auth/register"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              register
            </Link>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
