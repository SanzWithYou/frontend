import type React from 'react'

import { AuthorizationProvider } from './authorization.provider'
import { ThemeProvider } from './theme.provider'

interface AppProvider {
  children: React.ReactNode
}

export function Provider({ children }: AppProvider) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthorizationProvider>{children}</AuthorizationProvider>
    </ThemeProvider>
  )
}
