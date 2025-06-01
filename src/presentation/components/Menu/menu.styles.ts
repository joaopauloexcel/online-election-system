import { List, listItemClasses, styled } from '@mui/material'
import { neutral, primary } from '@/presentation/theme'
import { backGroudColor } from '@/app.definitions'

export const baseDrawerSx = {
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    position: 'relative',
    borderRight: 'none',
    background: backGroudColor
  }
}

export const CustomListMenu = styled(List)`
  padding-bottom: 0px;
  padding-top: 0px;
  height: calc(100vh - 90px);
  color: ${neutral[600]};
  &.active,
  & ${'.' + listItemClasses.root}:hover {
    background: ${neutral[200]};
    & svg {
      fill: ${primary[500]};
    }
  }
  background-color: ${backGroudColor};
`

export const CustomListMenuResponsive = styled(List)`
  padding-bottom: 0px;
  padding-top: 0px;
  height: calc(100vh - 90px);
  color: ${neutral[600]};
  &.active,
  & ${'.' + listItemClasses.root}:hover {
    background: ${neutral['white']};
    & svg {
      fill: ${primary[500]};
      background: ${neutral[200]};
    }
  }
  background-color: ${backGroudColor};
`
