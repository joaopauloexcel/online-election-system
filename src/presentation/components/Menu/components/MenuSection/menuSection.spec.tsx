import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { menuItems } from '@/presentation/components/Menu/menu.definitions'
import MenuSection from './MenuSection'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({ pathname: '/dashboard' }),
    useNavigate: () => vi.fn()
  }
})

vi.mock('@/presentation/hooks/useExpandedMenu', () => ({
  useExpandedMenu: () => ({
    open: {},
    toggleMenu: vi.fn()
  })
}))

const makeSut = (customMenu = menuItems) => {
  return render(
    <MemoryRouter>
      <MenuSection menu={customMenu} />
    </MemoryRouter>
  )
}

describe('MenuSection', () => {
  it('renders all visible sections and items', () => {
    makeSut()

    menuItems.forEach((section) => {
      section.items
        .filter((item) => !item.hidden)
        .forEach((item) => {
          expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
  })

  it('does not render hidden items', () => {
    const menuWithHidden = [
      {
        items: [
          { title: 'Visible', router: '/visible' },
          { title: 'Hidden', router: '/hidden', hidden: true }
        ]
      }
    ]

    makeSut(menuWithHidden)

    expect(screen.getByText('Visible')).toBeInTheDocument()
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument()
  })
})
