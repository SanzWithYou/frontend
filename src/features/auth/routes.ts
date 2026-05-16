import type { RouteObject } from 'react-router'

import { AuthLayout } from '@/core/layouts/auth.layouts'
import { LoginView } from './views/login.view'
import RegisterView from './views/register.view'

export const AuthRoutes: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      {
        path: '/register',
        Component: RegisterView,
      },
      {
        path: '/login',
        Component: LoginView,
      },
    ],
  },
]
