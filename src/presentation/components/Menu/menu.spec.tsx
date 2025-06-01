import { screen, cleanup, render } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ThemeProvider, createTheme } from '@mui/material'

import Menu from './Menu'
import * as DrawerMenuModule from './components/DrawerMenu'
import * as DrawerMenuResponsiveModule from './components/DrawerMenuResponsive'

vi.mock('./components/DrawerMenu', () => ({
  DrawerMenu: vi.fn(() => <div data-testid="drawer-menu" />)
}))

vi.mock('./components/DrawerMenuResponsive', () => ({
  DrawerMenuResponsive: vi.fn(() => <div data-testid="drawer-menu-responsive" />)
}))

let isDesktopMock = true

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material')
  return {
    ...actual,
    useMediaQuery: () => isDesktopMock
  }
})

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({ pathname: '/dashboard' }),
    useNavigate: () => vi.fn()
  }
})

const makeSut = () => {
  const theme = createTheme()

  return render(
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  )
}

describe('Menu Component', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('deve renderizar o DrawerMenu no desktop', () => {
    isDesktopMock = true

    makeSut()

    expect(screen.getByTestId('drawer-menu')).toBeInTheDocument()
    expect(DrawerMenuModule.DrawerMenu).toHaveBeenCalled()
  })

  it('deve renderizar o DrawerMenuResponsive no mobile', () => {
    isDesktopMock = false

    makeSut()

    expect(screen.getByTestId('drawer-menu-responsive')).toBeInTheDocument()
    expect(DrawerMenuResponsiveModule.DrawerMenuResponsive).toHaveBeenCalled()
  })
})
