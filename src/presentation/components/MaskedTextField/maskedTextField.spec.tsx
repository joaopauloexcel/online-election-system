import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

import MaskedTextField from './MaskedTextField'

describe('MaskedTextField', () => {
  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it('Should format Telefone correctly', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="Telefone" maskType="telefone" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('Telefone') as HTMLInputElement
    await userEvent.type(input, '11987654321')

    expect(input.value).toBe('(11) 98765-4321')
  })

  it('Should format CNPJ correctly', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="CNPJ" maskType="cnpj" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('CNPJ') as HTMLInputElement
    await userEvent.type(input, '12345678000199')

    expect(input.value).toBe('12.345.678/0001-99')
  })

  it('Should format CPF correctly', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="CPF" maskType="cpf" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('CPF') as HTMLInputElement
    await userEvent.type(input, '12345678901')

    expect(input.value).toBe('123.456.789-01')
  })

  it('Should allow Number input', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="Number" maskType="number" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('Number') as HTMLInputElement
    await userEvent.type(input, '123456')

    expect(input.value).toBe('123456')
  })

  it('Should format Porcentagem correctly', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="Porcentagem" maskType="porcentagem" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('Porcentagem') as HTMLInputElement
    await userEvent.type(input, '1000')

    expect(input.value).toBe('')
  })

  it('Should behave as Password input', () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="Password" type="password" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('Password') as HTMLInputElement

    expect(input.type).toBe('password')
  })

  it('Should format Moeda correctly', async () => {
    const TestComponent = () => {
      const [value, setValue] = useState('')
      return <MaskedTextField label="Moeda" maskType="moeda" value={value} onChange={(e) => setValue(e.target.value)} />
    }

    render(<TestComponent />)

    const input = screen.getByLabelText('Moeda') as HTMLInputElement
    await userEvent.type(input, '123456')

    await waitFor(() => {
      expect(input.value).toBe('R$ 1.234,56')
    })
  })

  it('Should behave as Normal input', () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="Normal" onChange={handleChange} />)

    const input: HTMLInputElement = screen.getByLabelText('Normal')
    fireEvent.change(input, { target: { value: 'asdasd' } })

    expect(input.value).toBe('asdasd')
  })

  it('Should behave as Time input', async () => {
    const handleChange = vi.fn()
    render(<MaskedTextField label="De" type="time" value="" onChange={handleChange} />)

    const input = screen.getByLabelText('De') as HTMLInputElement

    expect(input.type).toBe('time')
  })

  it('Should call icon click handler on Send mask', async () => {
    const handleChange = vi.fn()
    const handleIconClick = vi.fn()

    render(<MaskedTextField label="Send" maskType="send" value="" onChange={handleChange} onClickSend={handleIconClick} />)

    const input = screen.getByLabelText('Send') as HTMLInputElement
    expect(input).toBeInTheDocument()
  })
})
