import * as React from 'react'

import { AuthorizationContext } from '../context/authorization.context'

interface AuthorizationProviderProps {
  children: React.ReactNode
}

export function AuthorizationProvider({ children }: AuthorizationProviderProps) {
  // Authentication state
  const [authenticated, setAuthenticated] = React.useState<boolean>(false)

  // Global authorization loading state
  const [loading, setLoading] = React.useState<boolean>(true)

  // Initialize authorization state
  React.useEffect(() => {
    const initializeAuthorization = async (): Promise<void> => {
      try {
        // validate token
        // fetch current user
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    void initializeAuthorization()
  }, [])

  return (
    <AuthorizationContext.Provider
      value={{
        authenticated,
        loading,
        setAuthenticated,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}
