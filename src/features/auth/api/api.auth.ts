import client from '@/core/api/client'

import type { RegisterPayload, RegisterResponse } from '../types/register.type'

const register = async (data: RegisterPayload): Promise<RegisterResponse> => {
  const response = await client.post('/api/auth/register', data)

  return response.data
}

const apiAuth = {
  register,
}

export default apiAuth
