import { SxProps, TextField, Theme, FilledInputProps, InputProps, OutlinedInputProps } from '@mui/material'

import { ArrowCircleUpCustom, PercentCustom, TextFieldCustom } from './maskedTextField.styles'
import { MaskType } from './maskedTextField.types'
import IMaskMuiAdapter from './MaskedTextField.adapter'

export const maskMap: Record<MaskType, string | null> = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  telefone: '(00) 00000-0000',
  ie: '000.000.000.000',
  number: '0000000000',
  moeda: '', // tratado separado
  porcentagem: '', // tratado separado
  send: '', // tratado separado
  none: null
}

export const startIcon = (maskType: MaskType) => {
  switch (maskType) {
    case 'porcentagem':
      return <PercentCustom>%</PercentCustom>
    default:
      return undefined
  }
}

export const endIcon = (maskType: MaskType, onClick?: () => void) => {
  switch (maskType) {
    case 'send':
      return (
        <ArrowCircleUpCustom
          onClick={(e) => {
            e.stopPropagation()
            if (onClick) onClick()
          }}
        />
      )
    default:
      return undefined
  }
}

export const formatValueInput = (maskType: MaskType, val: string) => {
  const onlyNums = val.replace(/\D/g, '')
  if (!onlyNums) {
    return maskType === 'moeda' ? 'R$ 0,00' : '0,00'
  }
  const numeric = Number(onlyNums) / 100
  if (maskType === 'moeda') {
    return numeric.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  return numeric.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export const getInputProps = (isCustomFormat: boolean, mask: string | null) => {
  if (isCustomFormat) {
    return {
      inputProps: {
        inputMode: 'numeric' as const
      }
    }
  }
  if (mask) {
    return {
      inputComponent: IMaskMuiAdapter,
      inputProps: { mask, overwrite: true }
    }
  }
  return undefined
}

export const renderTextField = (
  fullWidth: boolean,
  label: string,
  sx: SxProps<Theme> | undefined,
  textFieldProps: Omit<React.ComponentProps<typeof TextField>, 'variant'>
) => (
  <TextFieldCustom
    variant="outlined"
    size="small"
    fullWidth={fullWidth}
    label={label}
    sx={sx}
    value={textFieldProps.value ?? ''}
    {...textFieldProps}
  />
)

export const inputProps = (
  maskType: MaskType,
  isCustomFormat: boolean,
  mask: string | null,
  onClick?: () => void
): Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps> | undefined => {
  return {
    startAdornment: startIcon(maskType),
    endAdornment: endIcon(maskType, onClick),
    ...(getInputProps(isCustomFormat, mask) || {})
  }
}
