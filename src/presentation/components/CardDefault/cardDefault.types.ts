import { PaperProps } from '@mui/material'
import { ReactNode } from 'react'

export interface DefaultContainerProps {
  children: ReactNode
  elevation?: number
  customSX?: Record<string, unknown> & PaperProps['sx']
}
