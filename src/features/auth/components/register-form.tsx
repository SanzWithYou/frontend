import { isAxiosError } from 'axios'
import { EyeClosedIcon, EyeIcon, LockIcon, MailIcon, UserIcon } from 'lucide-react'
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
import type { RegisterErrorResponse, RegisterPayload } from '../types/auth.type'
import { toast } from 'sonner'

export function RegisterForm() {
  const [isPassword, setIsPassword] = useState<boolean | false>(false)

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterPayload>({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const togglePassword = () => {
    setIsPassword((prev) => !prev)
  }

  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    // Reset all UI states before request
    clearErrors()

    try {
      // Send register request to API
      const res = await apiAuth.register({
        username: data.username,
        email: data.email,
        password: data.password,
      })

      // Set success message from API response
      toast(res.message)

      // Reset form after successful register
      reset({
        username: '',
        email: '',
        password: '',
      })
    } catch (error) {
      // Clear success state when error occurs

      // Handle Axios error only
      if (isAxiosError<RegisterErrorResponse>(error)) {
        // Handle network error (no response from server)
        if (!error.response) {
          toast('Network error: Server tidak menjangkau atau masalah koneksi.')
          return
        }

        // Extract API response data
        const responseData = error.response.data

        // Set global error message from server
        toast(responseData.message || 'Terjadi kesalahan pada server.')

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

        {/* Form input fields */}
        <FieldGroup>
          {/* Username input */}
          <Field data-error={!!errors.username}>
            <FieldLabel htmlFor="username">Username</FieldLabel>

            <FieldDescription>Choose a unique username for your account.</FieldDescription>

            <Controller
              name="username"
              control={control}
              rules={{
                required: 'Username is required',
              }}
              render={({ field }) => (
                <InputGroup>
                  <InputGroupInput
                    aria-invalid={!!errors.username}
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    {...field}
                  />
                  <InputGroupAddon>
                    <UserIcon />
                  </InputGroupAddon>
                </InputGroup>
              )}
            />

            {errors.username && <FieldError>{errors.username.message}</FieldError>}
          </Field>

          {/* Email input */}
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <FieldDescription>
              Use an active email address for verification and login.
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
                    aria-invalid={!!errors.email}
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                  <InputGroupAddon>
                    <MailIcon />
                  </InputGroupAddon>
                </InputGroup>
              )}
            />

            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          {/* Password input */}
          <Field data-errot={!!errors.password}>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <FieldDescription>Create a secure password to protect your account.</FieldDescription>

            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
              }}
              render={({ field }) => (
                <InputGroup>
                  <InputGroupInput
                    aria-invalid={!!errors.password}
                    id="password"
                    type={isPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    {...field}
                  />
                  <InputGroupAddon>
                    <LockIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end" className="mr-10">
                    <InputGroupButton onClick={togglePassword} size="icon-xs" className="m-0 p-0">
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
              {isSubmitting ? <Spinner /> : 'Register'}
            </Button>
          </Field>
          <Field
            orientation="horizontal"
            className="text-muted-foreground flex justify-center text-sm"
          >
            Already have an account?
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Login
            </Link>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
