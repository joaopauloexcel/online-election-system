import { TextFieldProps } from '@mui/material'

export type SelectLocalProps = {
  label: string
  items: {
    label: string
    value: string
  }[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  value?: string
}

export type SelectTextFieldProps = TextFieldProps & SelectLocalProps
