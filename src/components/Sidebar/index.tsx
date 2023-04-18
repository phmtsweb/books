import {
  Container,
  LogoImage,
  MenuItem,
  MenuList,
  UserLoginInfo,
} from './styles'
import logoImage from '../../../public/assets/images/logo.png'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'
import signInIcon from '../../../public/assets/icons/SignIn.svg'
import Image from 'next/image'
import { Avatar } from '../Avatar'
import Link from 'next/link'
import { ChartLineUp, Binoculars, SignOut, User } from '@phosphor-icons/react'

type UserProps = {
  name: string
  avatar_url: string
}

export function Sidebar() {
  const session = useSession()
  const { data: sessionData } = session
  console.log(sessionData)
  const user = sessionData?.user as UserProps
  const [name] = user?.name?.split(' ') || ['']
  const avatarUrl = user?.avatar_url || ''
  const router = useRouter()

  const currentRelativePath = router.asPath

  return (
    <Container>
      <LogoImage src={logoImage} alt="Logo do site" />
      <MenuList>
        <MenuItem>
          <ActiveLink
            href="/inicio"
            isActive={currentRelativePath === '/inicio'}
          >
            <ChartLineUp size={24} />
            Início
          </ActiveLink>
        </MenuItem>
        <MenuItem>
          <ActiveLink
            href="/explorar"
            isActive={currentRelativePath === '/explorar'}
          >
            <Binoculars size={24} />
            Explorar
          </ActiveLink>
        </MenuItem>
        <MenuItem>
          <ActiveLink
            href="/perfil"
            isActive={currentRelativePath === '/perfil'}
          >
            <User size={24} />
            Perfil
          </ActiveLink>
        </MenuItem>
      </MenuList>
      <UserLoginInfo>
        {user ? (
          <>
            <Avatar url={avatarUrl} size="small" />
            {name}
            <SignOut
              size={24}
              color="#F75A68"
              onClick={() => signOut({ callbackUrl: '/' })}
              style={{ cursor: 'pointer' }}
            />
          </>
        ) : (
          <Link href="/">
            Fazer login
            <Image
              src={signInIcon}
              alt="Ícone de login"
              width={24}
              height={24}
            />
          </Link>
        )}
      </UserLoginInfo>
    </Container>
  )
}
