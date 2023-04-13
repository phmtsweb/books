import {
  Container,
  LogoImage,
  MenuItem,
  MenuList,
  UserLoginInfo,
} from './styles'
import logoImage from '../../../public/assets/images/logo.png'

export function Sidebar() {
  return (
    <Container>
      <LogoImage src={logoImage} alt="Logo do site" />
      <MenuList>
        <MenuItem>Início</MenuItem>
        <MenuItem>Explorar</MenuItem>
      </MenuList>
      <UserLoginInfo>Fazer login</UserLoginInfo>
    </Container>
  )
}
