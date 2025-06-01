import { PropsItemsMenu as MenuItemType } from '@/presentation/components/Menu/menu.types'

export interface MenuItemProps {
  item: MenuItemType
  isActive: boolean
  hover: boolean
  setHover: (hover: boolean) => void
  onClick: () => void
  nested?: boolean
  isOpen?: boolean
}
