import { AppBar, Box, styled } from '@mui/material'

import { neutral, primary } from '@/presentation/theme/color'

export const CustomAppBar = styled(AppBar)`
  height: 56px;
  background-color: ${primary[500]};
  border: 2px solid;
  z-index: 1;
  top: 0;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to right, #94e027, #e6ffbb);
  border-left: 0;
  border-right: 0;
  border-top: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3.375rem 0 3rem;
  position: relative;
`

export const FeatureTitle = styled('h4')`
  font-weight: 650;
  font-size: 1rem;
  color: ${neutral[500]};
  line-height: 1.3rem;
`

export const UserName = styled('p')`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${neutral.white};
`

export const BoxImageTextHeader = styled(Box)`
  display: flex;
  align-items: center;
  img {
    margin-right: 48px;
    width: 96px;
    height: 32px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
`
