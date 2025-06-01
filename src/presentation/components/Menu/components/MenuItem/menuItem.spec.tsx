import { Home } from '@mui/icons-material'
import { screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { render } from '@testing-library/react'

import MenuItem from './MenuItem'
import { MenuItemProps } from './menuItem.type'

type MakeSutParams = Partial<MenuItemProps>

const makeSut = (overrideProps: MakeSutParams = {}) => {
  const defaultProps: MenuItemProps = {
    item: {
      title: 'Dashboard',
      icon: <Home />,
      router: '/dashboard',
      children: undefined
    },
    isActive: false,
    hover: false,
    setHover: vi.fn(),
    onClick: vi.fn(),
    nested: false,
    isOpen: false
  }

  const props = { ...defaultProps, ...overrideProps }

  const utils = render(<MenuItem {...props} />)

  return {
    ...utils,
    props
  }
}

describe('MenuItem', () => {
  it('renders the menu item with title and icon', () => {
    makeSut()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByTestId('home')).toBeInTheDocument()
  })

  it('applies active styles when isActive is true', () => {
    makeSut({ isActive: true })
    const listItem = screen.getByRole('button', { name: /dashboard/i }).closest('li')
    expect(listItem).toHaveStyle(`background: rgb(4, 56, 98)`)
  })

  it('calls setHover on mouse enter and leave when active', () => {
    const setHoverMock = vi.fn()
    makeSut({ isActive: true, setHover: setHoverMock })
    const listItem = screen.getByRole('button', { name: /dashboard/i }).closest('li')!
    fireEvent.mouseEnter(listItem)
    expect(setHoverMock).toHaveBeenCalledWith(true)
    fireEvent.mouseLeave(listItem)
    expect(setHoverMock).toHaveBeenCalledWith(false)
  })

  it('renders nested style when nested is true and isActive', () => {
    makeSut({ nested: true, isActive: true })
    const typography = screen.getByText('Dashboard')
    expect(typography).toHaveStyle('font-weight: 700')
  })

  it('shows expand icon when item has children', () => {
    const children = [{ title: 'Child', router: '/child' }]
    makeSut({ item: { title: 'Dashboard', icon: <Home />, router: '/dashboard', children }, isOpen: false })
    expect(screen.getByTestId('arrowDropDown')).toBeInTheDocument()

    makeSut({ item: { title: 'Dashboard', icon: <Home />, router: '/dashboard', children }, isOpen: true })
    expect(screen.getByTestId('arrowDropUp')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClickMock = vi.fn()
    makeSut({ onClick: onClickMock })
    const listItem = screen.getByRole('button', { name: /dashboard/i }).closest('li')!
    fireEvent.click(listItem)
    expect(onClickMock).toHaveBeenCalled()
  })
})
