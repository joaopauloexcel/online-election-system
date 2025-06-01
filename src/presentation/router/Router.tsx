import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { ProxyRoute } from './proxies'
import { theme } from '@/presentation/theme'

const Router: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <ProxyRoute />
        </QueryParamProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
