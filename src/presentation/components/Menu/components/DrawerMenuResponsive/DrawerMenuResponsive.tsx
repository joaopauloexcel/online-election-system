import React, { RefObject, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Divider } from '@mui/material'

import { CustomListMenuResponsive } from '@/presentation/components/Menu/menu.styles'
import { PropsMenu } from '@/presentation/components/Menu/menu.types'
import { useClickOutSide } from '@/presentation/hooks/core/useClickOutSide'

import { ResponsiveMenuItem } from '../ResponsiveMenuItem'
import { ResponsiveSubmenu } from '../ResponsiveSubmenu'

const DrawerMenuResponsive: React.FC<PropsMenu> = ({ menu }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const [hover, setHover] = useState(false)

  const submenuRef = useClickOutSide(() => setExpandedMenu(null))

  const isItemClicked = (router?: string) => !!router && location.pathname.includes(router)

  const handleNavigate = (router?: string) => {
    if (router) navigate(router)
  }

  const handleExpandMenu = (title: string) => {
    setExpandedMenu((prev) => (prev === title ? null : title))
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {menu.map((element, index) => (
        <div key={index}>
          <CustomListMenuResponsive>
            {element.items
              .filter((item) => !item.hidden)
              .map((item, indexY) => {
                const isActive = isItemClicked(item.router)
                const isExpanded = expandedMenu === item.title

                return (
                  <Box key={indexY} sx={{ position: 'relative' }}>
                    <ResponsiveMenuItem
                      item={item}
                      isActive={isActive}
                      hover={hover}
                      onClick={() => (item.children ? handleExpandMenu(item.title) : handleNavigate(item.router))}
                      onHoverChange={setHover}
                      isExpanded={isExpanded}
                    />

                    {isExpanded && item.children && (
                      <ResponsiveSubmenu
                        items={item.children}
                        activePath={location.pathname}
                        hover={hover}
                        onHoverChange={setHover}
                        onClose={() => setExpandedMenu(null)}
                        onNavigate={handleNavigate}
                        indexY={indexY}
                        submenuRef={submenuRef as RefObject<HTMLElement>}
                      />
                    )}
                  </Box>
                )
              })}
          </CustomListMenuResponsive>
          {menu.length > index + 1 && <Divider />}
        </div>
      ))}
    </Box>
  )
}

export default DrawerMenuResponsive
