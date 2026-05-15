import type { AxiosResponse } from 'axios'

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

export interface RegisterResponse extends AxiosResponse {
  success: boolean
  message: string
}

export interface ApiErrorItem {
  field: keyof RegisterPayload
  message: string
}

export interface RegisterErrorResponse {
  status: 'error'
  message: string
  errors: ApiErrorItem[]
}
