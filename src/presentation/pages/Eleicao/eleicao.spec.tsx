import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Eleicao'
import { primary } from '@/presentation/theme'

describe('Home Component', () => {
  it('deve renderizar a mensagem de boas-vindas', () => {
    render(<Home />, { wrapper: BrowserRouter })

    const message = screen.getByText('Minha Eleição')
    expect(message).toBeInTheDocument()
    expect(message).toHaveStyle(`color: ${primary[500]}`)
  })
})
