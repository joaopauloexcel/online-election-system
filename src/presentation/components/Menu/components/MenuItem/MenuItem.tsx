import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { primary, neutral, tertiarya } from '@/presentation/theme'
import { MenuItemProps } from './menuItem.type'

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive, hover, setHover, onClick, nested = false, isOpen }) => (
  <ListItem
    disablePadding
    onMouseEnter={() => isActive && setHover(true)}
    onMouseLeave={() => isActive && setHover(false)}
    onClick={onClick}
    sx={{
      background: isActive ? primary[600] : neutral.white,
      color: isActive ? neutral.white : undefined,
      borderBottom: '1px solid'
    }}
  >
    <ListItemButton
      sx={{
        pl: nested ? 4 : 2,
        '&:hover .MuiTypography-root': { color: primary[500] }
      }}
    >
      {item.icon && (
        <ListItemIcon
          sx={{
            minWidth: '2rem',
            color: isActive ? (nested ? tertiarya[500] : neutral.white) : primary[500]
          }}
        >
          {item.icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography
            variant="body2"
            sx={{
              color: isActive ? (hover ? primary[500] : neutral.white) : undefined,
              fontWeight: nested && isActive ? 700 : undefined
            }}
          >
            {item.title}
          </Typography>
        }
        primaryTypographyProps={{ fontSize: '14px' }}
      />
      {item.children && !nested && (isOpen ? <ArrowDropUp /> : <ArrowDropDown />)}
    </ListItemButton>
  </ListItem>
)

export default MenuItem
