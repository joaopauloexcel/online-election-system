import * as React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header, Menu } from '@/presentation/components'
import { LayoutContainer, ContentContainer, BodyContainer } from './template.styles'

const Template: React.FC = (): React.JSX.Element => {
  return (
    <LayoutContainer>
      <Header />
      <BodyContainer>
        <Menu />
        <ContentContainer>
          <Box display="block" boxSizing="border-box" width="100%" paddingX="24px">
            <Outlet />
          </Box>
        </ContentContainer>
      </BodyContainer>
    </LayoutContainer>
  )
}

export default Template
