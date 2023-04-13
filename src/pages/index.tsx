import {
  BackgroundImage,
  Button,
  ButtonContainer,
  Container,
  ImageContainer,
  LoginContainer,
  LoginContent,
  LoginInfo,
  LogoImage,
} from './styles'
import bgImage from '../../public/assets/images/homebg.png'
import logoImage from '../../public/assets/images/logo.png'
import googleIcon from '../../public/assets/images/google-icon.png'
import githubIcon from '../../public/assets/images/github-icon.png'
import rocketIcon from '../../public/assets/images/rocket-icon.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  function handleInicio() {
    router.push('/inicio')
  }
  return (
    <Container>
      <ImageContainer>
        <BackgroundImage
          src={bgImage}
          alt="Pessoa estudando como imagem de fundo"
        />
        <LogoImage src={logoImage} alt="Logo do site" />
      </ImageContainer>
      <LoginContainer>
        <LoginContent>
          <LoginInfo>
            <h1>Boas-vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>
          </LoginInfo>
          <ButtonContainer>
            <Button type="button">
              <Image src={googleIcon} alt="Ícone do google" />
              <span>Entrar com o Google</span>
            </Button>
            <Button type="button">
              <Image src={githubIcon} alt="Ícone do github" />
              <span>Entrar com o GitHub</span>
            </Button>
            <Button type="button" onClick={handleInicio}>
              <Image src={rocketIcon} alt="Ícone de um foguete" />
              <span>Entrar como visitante</span>
            </Button>
          </ButtonContainer>
        </LoginContent>
      </LoginContainer>
    </Container>
  )
}
