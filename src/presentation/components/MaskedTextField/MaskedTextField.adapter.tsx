import React from 'react'
import { IMaskInput } from 'react-imask'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IMaskMuiAdapter = React.forwardRef<HTMLInputElement, any>(function IMaskMuiAdapter(props, ref) { // IMaksInput é multi tipado, sendo necessário manter o any
  const { onAccept, ...other } = props
  return <IMaskInput {...other} inputRef={ref} onAccept={onAccept} overwrite />
})

export default IMaskMuiAdapter
