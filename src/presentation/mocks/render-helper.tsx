import React from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type Params = {
  Page: React.FC
  history: MemoryRouterProps
}

export const renderWithHistory = ({ Page, history }: Params) => {
  render(
    <MemoryRouter {...history}>
      <Page />
    </MemoryRouter>
  )
}

export const renderWithQuery = ({ Page, history }: Params) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0
      }
    }
  })

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter {...history}>
        <Page />
      </MemoryRouter>
    </QueryClientProvider>
  )
}
