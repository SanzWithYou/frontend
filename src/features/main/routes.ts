import type { RouteObject } from 'react-router'

import { MainLayout } from '@/core/layouts/main.layouts'

import { HomePage } from './views/home.view'

export const MainRoutes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]
