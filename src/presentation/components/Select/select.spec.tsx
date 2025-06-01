import { render, screen, fireEvent, cleanup } from '@testing-library/react'

import Select from './Select'

const items = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' }
]

describe('Select Component', () => {
  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it('deve renderizar todas as opções do select', () => {
    render(<Select label="Tipo" items={items} />)

    fireEvent.mouseDown(screen.getByLabelText('Tipo'))

    expect(screen.getByText('Opção 1')).toBeInTheDocument()
    expect(screen.getByText('Opção 2')).toBeInTheDocument()
  })

  it('deve chamar onChange ao selecionar uma opção', () => {
    const handleChange = vi.fn()

    render(<Select label="Tipo" items={items} onChange={handleChange} />)

    fireEvent.mouseDown(screen.getByLabelText('Tipo'))

    const opcao1 = screen.getByText('Opção 1')
    fireEvent.click(opcao1)

    expect(handleChange).toHaveBeenCalled()
    expect(handleChange.mock.calls[0][0].target.value).toBe('1')
  })
})
