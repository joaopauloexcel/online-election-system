import { PropsItemsMenu as MenuItemType } from '@/presentation/components/Menu/menu.types'

export interface ResponsiveMenuItemProps {
  item: MenuItemType
  isActive: boolean
  hover: boolean
  onClick: () => void
  onHoverChange: (hover: boolean) => void
  isExpanded: boolean
}
