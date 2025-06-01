import React from 'react'
import { Controller } from 'react-hook-form'
import { InputLabelProps } from '@mui/material'

import { MaskedTextFieldProps, Standalone } from './maskedTextField.types'
import { formatValueInput, inputProps, maskMap, renderTextField } from './maskedTextField.definitions'

const MaskedTextField: React.FC<MaskedTextFieldProps> = (props) => {
  const { maskType = 'none', fullWidth = true, label, sx, slotProps, ...rest } = props
  const isCustomFormat = ['moeda', 'porcentagem'].includes(maskType)
  const mask = maskMap[maskType]

  const inputLabelProps = (): Partial<InputLabelProps> | undefined => {
    return {
      shrink: true,
      ...(rest.InputLabelProps || {})
    }
  }

  // 🟣 react-hook-form mode
  if ('control' in props && props.name) {
    return (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value, ref, ...fieldRest } }) => {
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (isCustomFormat) {
              onChange(formatValueInput(maskType, e.target.value))
            } else {
              onChange(e)
            }
          }
          return renderTextField(fullWidth, label, sx, {
            ...rest,
            ...fieldRest,
            inputRef: ref,
            value: value ?? '',
            onChange: handleChange,
            InputProps: inputProps(maskType, isCustomFormat, mask, rest.onClickSend),
            InputLabelProps: inputLabelProps()
          })
        }}
      />
    )
  }

  // 🟢 Standalone mode
  const { value, onChange } = props as Standalone

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCustomFormat) {
      const formatted = formatValueInput(maskType, e.target.value)
      onChange({
        ...e,
        target: { ...e.target, value: formatted }
      })
    } else {
      onChange(e)
    }
  }

  return renderTextField(fullWidth, label, sx, {
    ...rest,
    value,
    onChange: handleChange,
    InputProps: inputProps(maskType, isCustomFormat, mask, rest.onClickSend),
    InputLabelProps: inputLabelProps()
  })
}

export default MaskedTextField
