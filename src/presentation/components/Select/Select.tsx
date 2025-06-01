import { MenuItem } from '@mui/material'

import { MaskedTextField } from '@/presentation/components/MaskedTextField'
import { SelectTextFieldProps } from './select.types'
import { omit } from '@/presentation/utils'

const Select: React.FC<SelectTextFieldProps> = (props) => {
  const { label, items, onChange, required, value } = props
  const cleanedProps = omit(props, ['label', 'items'])
  const normalizedValue = value ?? ''
  const hasValidOption = items.some((item) => item.value === normalizedValue)

  const finalValue = hasValidOption ? normalizedValue : ''

  return (
    <MaskedTextField {...cleanedProps} value={finalValue} label={label} select onChange={(e) => onChange?.(e)} required={required}>
      <MenuItem value="">
        <em>Selecione</em>
      </MenuItem>

      {items.map((option) => (
        <MenuItem key={option.value} value={option.value ?? ''}>
          {option.label}
        </MenuItem>
      ))}
    </MaskedTextField>
  )
}

export default Select
