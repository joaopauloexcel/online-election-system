import { PropsItemsMenu as MenuItemType } from '@/presentation/components/Menu/menu.types'

export interface ResponsiveSubmenuProps {
  items: MenuItemType[]
  activePath: string
  hover: boolean
  onHoverChange: (hover: boolean) => void
  onClose: () => void
  onNavigate: (path: string) => void
  indexY: number
  submenuRef: React.RefObject<HTMLElement>
}
