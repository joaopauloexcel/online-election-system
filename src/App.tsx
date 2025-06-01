import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@mui/material/styles'
import { Toaster } from 'react-hot-toast';

import { Router } from '@/presentation/router'
import { theme, GlobalStyles } from '@/presentation/theme'
import { makeQueryClient } from './app.definitions'
import './presentation/assets/styles/reset.css'
import { useEleicaoSync } from './presentation/hooks';
import { AppStyles } from './app.styles';

const App = () => {
  const queryClient = makeQueryClient()
  useEleicaoSync();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppStyles>
          <Router />
          <Toaster position="top-right" reverseOrder={false} />
        </AppStyles>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
