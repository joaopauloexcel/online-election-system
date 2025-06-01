import { SxProps, Theme } from '@mui/material'

export interface HeaderProps {
  sx?: SxProps<Theme> | undefined
  onClick?: () => void
}
