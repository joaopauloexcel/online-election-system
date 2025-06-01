import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import Template from './Template'

// Mocks dos componentes usados
vi.mock('@/presentation/components', async () => ({
  Header: () => <div data-testid="Header" />,
  Menu: () => <div data-testid="Menu" />,
}))

// Mock do Outlet
vi.mock('react-router-dom', async (mod) => ({
  ...(await mod),
  Outlet: () => <div data-testid="Outlet" />
}))

const makeSut = () => {
  return render(<Template />)
}

describe('<Template />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('deve renderizar o Header', () => {
    makeSut()
    expect(screen.getByTestId('Header')).toBeInTheDocument()
  })

  it('deve renderizar o Menu', () => {
    makeSut()
    expect(screen.getByTestId('Menu')).toBeInTheDocument()
  })

  it('deve renderizar o Outlet dentro do SnackbarProvider', () => {
    makeSut()
    expect(screen.getByTestId('Outlet')).toBeInTheDocument()
  })
})
