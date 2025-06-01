import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, Tooltip } from '@mui/material'
import { primary, neutral } from '@/presentation/theme'
import { ResponsiveMenuItemProps } from './responsiveMenuItem.types'

const ResponsiveMenuItem: React.FC<ResponsiveMenuItemProps> = ({ item, isActive, onClick, onHoverChange, isExpanded }) => {
  return (
    <ListItem
      onMouseEnter={() => isActive && onHoverChange(true)}
      onMouseLeave={() => isActive && onHoverChange(false)}
      disablePadding
      onClick={onClick}
      sx={{
        display: 'block',
        ['& svg']: isExpanded ? { fill: primary[500], background: neutral[200] } : {},
        background: isActive ? primary[600] : 'transparent',
        color: isActive ? neutral.white : neutral[600],
        boxShadow: `0px 1px ${neutral[200]}`
      }}
    >
      <ListItemButton
        sx={{
          '&:hover': { backgroundColor: 'transparent' },
          minHeight: 48,
          px: 2.5,
          justifyContent: 'center'
        }}
      >
        {item.icon && (
          <Tooltip title={item.title} placement="left">
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: isActive ? neutral.white : primary[500],
                mr: 'auto'
              }}
            >
              {item.icon}
            </ListItemIcon>
          </Tooltip>
        )}
      </ListItemButton>
    </ListItem>
  )
}

export default ResponsiveMenuItem
