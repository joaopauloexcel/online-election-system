import React from 'react'

import { PropsMenu } from '@/presentation/components/Menu/menu.types'
import { MenuSection } from '../MenuSection'

const DrawerMenu: React.FC<PropsMenu> = ({ menu }) => {
  return <MenuSection menu={menu} />
}

export default DrawerMenu
