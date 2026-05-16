import type { RouteObject } from 'react-router'

import { MainLayout } from '@/core/layouts/main.layouts'

import { HomeView } from './views/home.view'

export const MainRoutes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomeView,
      },
    ],
  },
]
