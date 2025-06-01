import { styled } from '@mui/system'
import { TextField } from '@mui/material'

import { neutral, theme } from '@/presentation/theme'
import { ArrowCircleUp } from '@mui/icons-material'

export const PercentCustom = styled('b')`
  color: ${neutral[900]};
  opacity: 0.6;
  font-weight: 400;
  font-size: ${theme.spacing(2)};
  padding-right: ${theme.spacing(0.5)};
`

export const TextFieldCustom = styled(TextField)`
  input[type='time']::-webkit-inner-spin-button,
  input[type='time']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type='time'] {
    appearance: none;
    -moz-appearance: textfield;
  }
`

export const ArrowCircleUpCustom = styled(ArrowCircleUp)`
  cursor: pointer;
`
