import type React from 'react'

import { AuthorizationProvider } from './authorization.provider'
import { ThemeProvider } from './theme.provider'
import { HelmetProvider } from 'react-helmet-async'

interface AppProvider {
  children: React.ReactNode
}

export function Provider({ children }: AppProvider) {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AuthorizationProvider>{children}</AuthorizationProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
