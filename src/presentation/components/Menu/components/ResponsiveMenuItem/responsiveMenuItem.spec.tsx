import { screen, fireEvent } from '@testing-library/react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { Home } from '@mui/icons-material'
import { ResponsiveMenuItemProps } from './responsiveMenuItem.types'
import ResponsiveMenuItem from './ResponsiveMenuItem'

export const makeSut = (overrideProps: Partial<ResponsiveMenuItemProps> = {}) => {
  const defaultProps: ResponsiveMenuItemProps = {
    item: {
      title: 'Início',
      icon: <Home />
    },
    isActive: false,
    hover: false,
    isExpanded: false,
    onClick: vi.fn(),
    onHoverChange: vi.fn()
  }

  const props = { ...defaultProps, ...overrideProps }

  const utils = render(<ResponsiveMenuItem {...props} />)

  return {
    ...utils,
    props
  }
}

describe('<ResponsiveMenuItem />', () => {
  it('deve renderizar o título no tooltip', async () => {
    makeSut()
    expect(screen.getByLabelText('Início')).toBeInTheDocument()
  })

  it('deve chamar onClick ao clicar', () => {
    const { props } = makeSut()
    fireEvent.click(screen.getByRole('button'))
    expect(props.onClick).toHaveBeenCalled()
  })
})
