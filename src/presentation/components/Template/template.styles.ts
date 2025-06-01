import { backGroudColor } from '@/app.definitions'
import { Box, styled } from '@mui/material'

export const LayoutContainer = styled('section')`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 0px;
  background-color: ${backGroudColor};
`

export const BodyContainer = styled('section')`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`

export const ContentContainer = styled('main')`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: start;
  width: 100%;
  overflow-y: hidden;
`

export const BoxContentPage = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
