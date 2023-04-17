import { AvatarContainer, AvatarImage } from './styles'

type AvatarProps = {
  size?: 'small' | 'medium' | 'large'
  url: string
}

export function Avatar({ size = 'medium', url }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage
        src={url}
        alt="avatar do usuário"
        size={size}
        width={56}
        height={56}
      />
    </AvatarContainer>
  )
}
