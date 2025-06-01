import { screen } from '@testing-library/react'
import { MemoryRouterProps } from 'react-router-dom'

import { renderWithHistory } from '@/presentation/mocks'
import { urlRouters } from '@/presentation/router/router.definitions'
import Header from './Header'

const onLogoutMock = vi.fn()

vi.mock('@/presentation/hooks/core/useAuthenticate', () => ({
  useAuthenticate: () => ({
    onLogout: onLogoutMock
  })
}))

const history = {
  initialEntries: [urlRouters.root]
} satisfies MemoryRouterProps

const makeSut = () => {
  return renderWithHistory({
    history,
    Page: () => <Header />
  })
}

describe('<Header />', () => {
  it('deve renderizar o logo e o título "Sistema de Eleição - Online"', () => {
    makeSut()
    expect(screen.getByText(/Sistema de Eleição - Online/i)).toBeInTheDocument()
  })

})
