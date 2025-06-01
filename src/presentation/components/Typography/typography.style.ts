import { styled, Typography } from '@mui/material'

import color from '@/presentation/theme/color'
import { theme } from '@/presentation/theme'

export const TypographyCardTitle = styled(Typography)(({ typeColor }: { typeColor?: string }) => ({
  color: typeColor === 'primary' ? color.primary[500] : color.neutral[900],
  fontWeight: 700,
  fontSize: '20px',
  opacity: typeColor === 'primary' ? 1 : 0.9
}))

export const TypographyCardSubTitle = styled(Typography)`
  color: ${color.neutral[900]};
  font-weight: 700;
  font-size: 16px;
  opacity: 0.9;
`

export const TypographyTitleDisabled = styled(Typography)`
  color: ${color.neutral['black']};
  font-weight: 400;
  font-size: ${theme.spacing(2)};
  opacity: 0.6;
`
