import { describe, it, expect } from 'vitest'
import HomeIcon from '@mui/icons-material/Home'
import { screen, fireEvent } from '@testing-library/react'
import { MemoryRouterProps } from 'react-router-dom'

import { PropsMenu } from '@/presentation/components/Menu/menu.types'
import DrawerMenuResponsive from './DrawerMenuResponsive'
import { urlRouters } from '@/presentation/router/router.definitions'
import { mockedUseNavigate, renderWithHistory } from '@/presentation/mocks'

const history = {
  initialEntries: [urlRouters.eleicao]
} satisfies MemoryRouterProps

const makeSut = () => {
  const defaultProps: PropsMenu = {
    menu: [
      {
        items: [
          {
            title: 'Eleicao',
            router: urlRouters.eleicao,
            icon: <HomeIcon role="img" />
          }
        ]
      }
    ]
  }

  renderWithHistory({
    history,
    Page: () => <DrawerMenuResponsive {...defaultProps} />
  })
}

describe('DrawerMenuResponsive component', () => {
  it('should render DrawerMenuResponsive', () => {
    makeSut()
    const buttons = screen.getAllByRole('button')

    // Verifica se o DrawerMenuResponsive foi renderizado
    expect(buttons[0]).toBeInTheDocument()
  })

  it('should render DrawerMenuResponsive title', () => {
    makeSut()

    // Verifica se consta area-label 'Eleicao' no menu
    expect(screen.getByLabelText(/Eleicao/i)).toBeInTheDocument()
  })

  it('should render DrawerMenuResponsive icon', () => {
    makeSut()

    const svg = screen.getByRole('img', { hidden: true })
    // Verifica o svg icon foi renderizado
    expect(svg).toBeVisible()
  })

  it('should call redirect pathname update', () => {
    makeSut()
    const buttonList = screen.getByLabelText(/eleicao/i)
    fireEvent.click(buttonList)
    expect(mockedUseNavigate).toHaveBeenCalledWith(urlRouters.eleicao)
  })
})
