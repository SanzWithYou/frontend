import type { RouteObject } from 'react-router'

import RegisterPage from './views/register.view'

export const AuthRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: 'register',
        Component: RegisterPage,
      },
    ],
  },
]
