import React from 'react'
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { neutral, primary, tertiarya } from '@/presentation/theme'
import { ResponsiveSubmenuProps } from './responsiveSubmenu.types'

const ResponsiveSubmenu: React.FC<ResponsiveSubmenuProps> = ({
  items,
  activePath,
  hover,
  onHoverChange,
  onClose,
  onNavigate,
  indexY,
  submenuRef
}) => (
  <Box
    ref={submenuRef}
    sx={{
      position: 'fixed',
      top: `calc(90px + (${indexY} * 96px))`,
      left: '42px',
      width: 250,
      background: neutral.white,
      boxShadow: `0px 0px 10px ${neutral[200]}`,
      zIndex: 999,
      border: `1px solid ${neutral[200]}`,
      borderRadius: '4px'
    }}
  >
    {items.map((child, idx) => {
      const isActive = !!child.router && activePath.includes(child.router)

      return (
        <ListItem
          key={idx}
          disablePadding
          onMouseEnter={() => isActive && onHoverChange(true)}
          onMouseLeave={() => isActive && onHoverChange(false)}
          onClick={() => {
            if (child.router) {
              onHoverChange(false)
              onClose()
              onNavigate(child.router)
            }
          }}
          sx={
            isActive
              ? {
                  background: primary[600],
                  color: neutral.white,
                  borderLeft: hover ? 'none' : `4px solid ${tertiarya[400]}`
                }
              : {}
          }
        >
          <ListItemButton
            sx={{
              '&:hover .MuiTypography-root': {
                fontWeight: 'bold',
                color: primary[500]
              }
            }}
          >
            {child.icon && <ListItemIcon>{child.icon}</ListItemIcon>}
            <ListItemText primary={child.title} />
          </ListItemButton>
        </ListItem>
      )
    })}
  </Box>
)

export default ResponsiveSubmenu
