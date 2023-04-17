import { Container } from './styles'

type ActiveTagProps = {
  tag: string
  active?: boolean
  onClick?: () => void
}

export function ActiveTag({ tag, active, onClick }: ActiveTagProps) {
  return (
    <Container active={active} onClick={onClick}>
      {tag}
    </Container>
  )
}
