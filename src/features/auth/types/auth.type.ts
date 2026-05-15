export interface RegisterPayload {
  username: string
  email: string
  password: string
}

export interface RegisterResponse {
  status: string
  message: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface DataToken {
  type: string
  access_token: string
  refresh_token: string
}

export interface LoginResponse {
  status: string
  message: string
  data?: DataToken
}

export interface ApiErrorItem<T> {
  field: keyof T
  message: string
}

export interface ApiErrorResponse<T> {
  status: 'error'
  message: string
  errors: ApiErrorItem<T>[]
}

export type RegisterErrorResponse = ApiErrorResponse<RegisterPayload>

export type LoginErrorResponse = ApiErrorResponse<LoginPayload>
