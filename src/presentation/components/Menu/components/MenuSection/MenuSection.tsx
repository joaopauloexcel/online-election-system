import React from 'react'
import { Collapse, Divider, List } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { PropsMenu } from '@/presentation/components/Menu/menu.types'
import { menuItems } from '@/presentation/components/Menu/menu.definitions'
import { useExpandedMenu } from '@/presentation/hooks/core/useExpandedMenu'
import { CustomListMenu } from '@/presentation/components/Menu/menu.styles'
import { MenuItem } from '../MenuItem'

const MenuSection: React.FC<PropsMenu> = ({ menu }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [hover, setHover] = React.useState(false)

  const { open, toggleMenu } = useExpandedMenu(menu)

  const isItemClicked = (router?: string) => !!router && location.pathname.includes(router)

  return (
    <>
      {menu.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <CustomListMenu>
            {section.items
              .filter((item) => !item.hidden)
              .map((item) => {
                const isActive = isItemClicked(item.router)

                return (
                  <React.Fragment key={item.title}>
                    <MenuItem
                      item={item}
                      isActive={isActive}
                      hover={hover}
                      setHover={setHover}
                      onClick={() => {
                        if (item.children) toggleMenu(item.title)
                        else if (item.router) {
                          setHover(true)
                          navigate(item.router)
                        }
                      }}
                      isOpen={open[item.title]}
                    />

                    {item.children && (
                      <Collapse in={open[item.title]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.children.map((child) => {
                            const isChildActive = isItemClicked(child.router)
                            return (
                              <MenuItem
                                key={child.title}
                                item={child}
                                isActive={isChildActive}
                                hover={hover}
                                setHover={setHover}
                                onClick={() => {
                                  if (child.router) {
                                    setHover(true)
                                    navigate(child.router)
                                  }
                                }}
                                nested
                              />
                            )
                          })}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                )
              })}
          </CustomListMenu>
          {menuItems.length > sectionIndex + 1 && <Divider />}
        </div>
      ))}
    </>
  )
}

export default MenuSection
