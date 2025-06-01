import * as React from 'react'
import { Box, Drawer, useTheme, useMediaQuery } from '@mui/material'

import { neutral } from '@/presentation/theme'
import { DrawerMenuResponsive, DrawerMenu } from './components'
import { menuItems, drawerWidth, drawerWidthResponsive } from './menu.definitions'
import { baseDrawerSx } from './menu.styles'
import { useLocation } from 'react-router-dom'

export const Menu: React.FC<{
  window?: () => Window
}> = ({ window }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const location = useLocation();

  const isTelaApuracao = (): boolean => {
    return ['/apuracao'].includes(location.pathname)
  }
  const container = React.useMemo(() => (window !== undefined ? () => window().document.body : undefined), [window])

  return (
    <Box component="nav" sx={{ width: { lg: isTelaApuracao() ? drawerWidthResponsive : drawerWidth }, flexShrink: { sm: 0 } }} aria-label="menu de navegação">
      {(!isDesktop || isTelaApuracao()) && (
        <Drawer
          container={container}
          variant="permanent"
          anchor="left"
          sx={{
            display: 'inline',
            ...baseDrawerSx,
            '& .MuiDrawer-paper': {
              ...baseDrawerSx['& .MuiDrawer-paper'],
              width: drawerWidthResponsive,
              overflowX: 'hidden'
            },
            '&.Mui-selected': { color: neutral.white }
          }}
        >
          <DrawerMenuResponsive menu={menuItems} />
        </Drawer>
      )}
      {(isDesktop && !isTelaApuracao()) && (
        <Drawer
          variant="permanent"
          sx={{
            display: 'inline',
            ...baseDrawerSx,
            '& .MuiDrawer-paper': {
              ...baseDrawerSx['& .MuiDrawer-paper'],
              width: drawerWidth
            }
          }}
          open
        >
          <DrawerMenu menu={menuItems} />
        </Drawer>
      )}
    </Box>
  )
}

export default Menu
