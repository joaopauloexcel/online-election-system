import { BoxImageTextHeader, CustomAppBar } from './header.styles'
import { HeaderProps } from './header.types'

const Header: React.FC = (props: HeaderProps) => {

  return (
    <CustomAppBar sx={props.sx}>
      <BoxImageTextHeader>
        <p>Sistema de Eleição - Online</p>
      </BoxImageTextHeader>
    </CustomAppBar>
  )
}

export default Header
