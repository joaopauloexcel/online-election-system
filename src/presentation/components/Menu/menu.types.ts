import { JSX } from 'react'

export type PropsItemsMenu = {
  title: string
  router?: string
  icon?: JSX.Element
  children?: PropsItemsMenu[]
  hidden?: boolean
}

export type PropsListMenu = {
  items: PropsItemsMenu[]
}

export type PropsMenu = {
  menu: PropsListMenu[]
}
