import { useRoutes } from 'react-router'

import { AuthRoutes } from './features/auth/routes'
import { MainRoutes } from './features/main/routes'

const appRoutes = [...AuthRoutes, ...MainRoutes]

export const AppRouter = () => {
  const element = useRoutes(appRoutes)
  return element
}
