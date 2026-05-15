import client from '@/core/api/client'

import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '../types/auth.type'

const register = async (data: RegisterPayload): Promise<RegisterResponse> => {
  const response = await client.post('/api/auth/register', data)

  return response.data
}

const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await client.post('/api/auth/login', data)

  return response.data
}

const apiAuth = {
  register,
  login,
}

export default apiAuth
