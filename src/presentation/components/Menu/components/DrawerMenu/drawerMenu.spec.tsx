import { screen } from '@testing-library/react'

import { render, RenderResult } from '@testing-library/react'

import { PropsMenu } from '@/presentation/components/Menu/menu.types'
import DrawerMenu from './DrawerMenu'

vi.mock('../MenuSection', () => ({
  MenuSection: vi.fn(() => <div data-testid="menu-section-mock" />)
}))

type SutProps = {
  menu?: PropsMenu['menu']
}

type SutReturn = {
  sut: RenderResult
}

const defaultMenu: PropsMenu['menu'] = [
  {
    items: [
      {
        title: 'Dashboard',
        icon: <svg data-testid="mock-icon" />,
        router: '/dashboard'
      }
    ]
  }
]

export const makeSut = ({ menu = defaultMenu }: SutProps = {}): SutReturn => {
  const sut = render(<DrawerMenu menu={menu} />)

  return {
    sut
  }
}

describe('<DrawerMenu />', () => {
  it('deve renderizar o MenuSection com as props corretas', () => {
    const menuMock = [
      {
        items: [
          {
            title: 'Principal',
            icon: <svg data-testid="mock-icon" />,
            router: '/eleicao'
          }
        ]
      }
    ]

    makeSut({ menu: menuMock })

    expect(screen.getByTestId('menu-section-mock')).toBeInTheDocument()
  })
})
