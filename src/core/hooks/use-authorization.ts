import * as React from 'react'

import { AuthorizationContext } from '../context/authorization.context'

// Authentication hook
export function useAuth() {
  const context = React.useContext(AuthorizationContext)

  // Prevent hook usage outside provider
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
