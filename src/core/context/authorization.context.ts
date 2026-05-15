import * as React from 'react'

export interface AuthorizationContextType {
  // Authentication state
  authenticated: boolean

  // Global authorization loading state
  loading: boolean

  // Update authentication state
  setAuthenticated: (value: boolean) => void
}

export const AuthorizationContext = React.createContext<AuthorizationContextType | undefined>(
  undefined
)
