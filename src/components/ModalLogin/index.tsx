import { Portal } from '../Portal'
import { Container, Content, Overlay, Button, CloseButton } from './styles'
import Image from 'next/image'
import googleIcon from '../../../public/assets/images/google-icon.png'
import githubIcon from '../../../public/assets/images/github-icon.png'
import { signIn } from 'next-auth/react'
import { X } from '@phosphor-icons/react'
import { MouseEvent } from 'react'

type ModalLoginProps = {
  isOpen: boolean
  handleClose: () => void
}

export function ModalLogin({ isOpen, handleClose }: ModalLoginProps) {
  if (!isOpen) return null
  async function handleSignIn(provider: string) {
    return signIn(provider, { callbackUrl: '/explorar' })
  }

  function handleCloseOutside(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  return (
    <Portal portalId="modal-login">
      <Overlay onClick={handleCloseOutside}>
        <Container>
          <CloseButton type="button" onClick={handleClose}>
            <X size={24} />
          </CloseButton>
          <Content>
            <h3>Faça login para deixar sua avaliação</h3>
            <div>
              <Button type="button" onClick={() => handleSignIn('google')}>
                <Image src={googleIcon} alt="Ícone do google" />
                <span>Entrar com o Google</span>
              </Button>
              <Button type="button" onClick={() => handleSignIn('github')}>
                <Image src={githubIcon} alt="Ícone do github" />
                <span>Entrar com o GitHub</span>
              </Button>
            </div>
          </Content>
        </Container>
      </Overlay>
    </Portal>
  )
}
