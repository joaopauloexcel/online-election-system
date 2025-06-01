import { TextFieldProps } from '@mui/material'
import { Control } from 'react-hook-form'

export type MaskType = 'cnpj' | 'cpf' | 'telefone' | 'ie' | 'moeda' | 'porcentagem' | 'number' | 'send' | 'none'

interface BaseProps extends Omit<TextFieldProps, 'name'> {
  label: string
  maskType?: MaskType
  fullWidth?: boolean
  slotProps?: TextFieldProps['slotProps']
  onClickSend?: () => void
}

type WithHookForm = BaseProps & {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  value?: never
  onChange?: never
}

export type Standalone = BaseProps & {
  name?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  control?: never
}

export type MaskedTextFieldProps = WithHookForm | Standalone
