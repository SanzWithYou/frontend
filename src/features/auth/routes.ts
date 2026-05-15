import type { RouteObject } from 'react-router'

import { LoginPage } from './views/login.view'
import RegisterPage from './views/register.view'

export const AuthRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
    ],
  },
]
