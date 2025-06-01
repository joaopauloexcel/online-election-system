import { render, screen, fireEvent } from '@testing-library/react'
import { PropsItemsMenu as MenuItemType } from '@/presentation/components/Menu/menu.types'
import { vi } from 'vitest'
import { Home as HomeIcon } from '@mui/icons-material'
import ResponsiveSubmenu from './ResponsiveSubmenu'
import { RefObject } from 'react'

const makeItem = (title: string, router: string | undefined = undefined): MenuItemType => ({
  title,
  router,
  icon: <HomeIcon fontSize="small" />
})

const items: MenuItemType[] = [makeItem('Dashboard', '/dashboard'), makeItem('Configurações', '/settings'), makeItem('Ajuda')]

const makeSut = (activePath: string = '/settings', hover = false) => {
  const onHoverChange = vi.fn()
  const onClose = vi.fn()
  const onNavigate = vi.fn()
  const submenuRef = { current: null }

  render(
    <ResponsiveSubmenu
      items={items}
      activePath={activePath}
      hover={hover}
      onHoverChange={onHoverChange}
      onClose={onClose}
      onNavigate={onNavigate}
      indexY={1}
      submenuRef={submenuRef as unknown as RefObject<HTMLElement>}
    />
  )

  return { onHoverChange, onClose, onNavigate }
}

describe('<ResponsiveSubmenu />', () => {
  it('deve renderizar todos os itens do menu', () => {
    makeSut()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Configurações')).toBeInTheDocument()
    expect(screen.getByText('Ajuda')).toBeInTheDocument()
  })

  it('deve aplicar estilo de item ativo baseado na rota', () => {
    makeSut('/settings')
    const activeItem = screen.getByText('Configurações').closest('li')
    expect(activeItem).toHaveStyle('background: rgb(4, 56, 98)') // primary[600]
  })

  it('deve chamar onHoverChange ao passar o mouse em item ativo', () => {
    const { onHoverChange } = makeSut('/settings')
    const activeItem = screen.getByText('Configurações').closest('li')!
    fireEvent.mouseEnter(activeItem)
    fireEvent.mouseLeave(activeItem)
    expect(onHoverChange).toHaveBeenCalledTimes(2)
    expect(onHoverChange).toHaveBeenCalledWith(true)
    expect(onHoverChange).toHaveBeenCalledWith(false)
  })

  it('não deve chamar onHoverChange ao passar o mouse em item inativo', () => {
    const { onHoverChange } = makeSut('/settings')
    const inactiveItem = screen.getByText('Dashboard').closest('li')!
    fireEvent.mouseEnter(inactiveItem)
    fireEvent.mouseLeave(inactiveItem)
    expect(onHoverChange).not.toHaveBeenCalled()
  })

  it('deve chamar onClose e onNavigate ao clicar em item com rota', () => {
    const { onClose, onNavigate } = makeSut()
    const clickableItem = screen.getByText('Dashboard').closest('li')!
    fireEvent.click(clickableItem)
    expect(onClose).toHaveBeenCalled()
    expect(onNavigate).toHaveBeenCalledWith('/dashboard')
  })

  it('não deve chamar onClose nem onNavigate ao clicar em item sem rota', () => {
    const { onClose, onNavigate } = makeSut()
    const nonClickableItem = screen.getByText('Ajuda').closest('li')!
    fireEvent.click(nonClickableItem)
    expect(onClose).not.toHaveBeenCalled()
    expect(onNavigate).not.toHaveBeenCalled()
  })
})
