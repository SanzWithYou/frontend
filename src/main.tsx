import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { Provider } from './core/provider'
import { AppRouter } from './routes'

import './core/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <AppRouter />
        <SpeedInsights />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
