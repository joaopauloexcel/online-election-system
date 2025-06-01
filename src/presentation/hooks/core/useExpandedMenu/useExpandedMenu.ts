import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { PropsListMenu } from '@/presentation/components/Menu/menu.types'

const useExpandedMenu = (menuItems: PropsListMenu[]) => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const initialState = useMemo(() => {
    const expanded: Record<string, boolean> = {}

    for (const section of menuItems) {
      for (const item of section.items) {
        if (item.children) {
          expanded[item.title] = item.children.some((child) => pathname.includes(child.router ?? ''))
        }
      }
    }

    return expanded
  }, [menuItems, pathname])

  useEffect(() => {
    setOpen(initialState)
  }, [initialState])

  const toggleMenu = (title: string) => {
    setOpen((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return { open, toggleMenu }
}

export default useExpandedMenu
