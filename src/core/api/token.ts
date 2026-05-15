// LocalStorage key for token type
const tokenType: string = 'type'

// LocalStorage key for access token
const accessToken: string = 'access_token'

// LocalStorage key for refresh token
const refreshToken: string = 'refresh_token'

// Save token type to localStorage
export const setType = async (type: string): Promise<void> => {
  localStorage.setItem(tokenType, type)
}

// Save access token to localStorage
export const setAccessToken = async (token: string): Promise<void> => {
  localStorage.setItem(accessToken, token)
}

// Save refresh token to localStorage
export const setRefreshToken = async (token: string): Promise<void> => {
  localStorage.setItem(refreshToken, token)
}

// Get token type from localStorage
export const getTokenType = async (): Promise<string | null> => {
  return localStorage.getItem(tokenType)
}

// Get access token from localStorage
export const getAccessToken = async (): Promise<string | null> => {
  return localStorage.getItem(accessToken)
}

// Get refresh token from localStorage
export const getRefreshToken = async (): Promise<string | null> => {
  return localStorage.getItem(refreshToken)
}
