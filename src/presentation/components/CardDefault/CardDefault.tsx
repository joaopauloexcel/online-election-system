import { Paper } from '@mui/material'

import { DefaultContainerProps } from './cardDefault.types'

const CardDefault: React.FC<DefaultContainerProps> = ({ children, elevation, customSX }) => {
  return (
    <Paper
      data-testid="cardDefault"
      elevation={elevation ?? 2}
      sx={{ display: 'flex', flexDirection: 'column', p: '16px', gap: '10px', ...customSX }}
    >
      {children}
    </Paper>
  )
}

export default CardDefault
