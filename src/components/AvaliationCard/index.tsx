import { formatDateToNow } from '@/utils/formatDateToNow'
import { Avatar } from '../Avatar'
import { Container, Content, Header } from './styles'
import { RatingStars } from '../RatingStars'

type AvaliationCardProps = {
  user: {
    name: string
    avatar_url: string
  }
  rating: number
  comment: string
  created_at: string
}

export function AvaliationCard({
  user,
  rating,
  comment,
  created_at,
}: AvaliationCardProps) {
  return (
    <Container>
      <Header>
        <div>
          <Avatar url={user.avatar_url} />
          <div>
            <strong>{user.name}</strong>
            <span>{formatDateToNow(created_at)}</span>
          </div>
        </div>
        <RatingStars rating={rating} />
      </Header>
      <Content>{comment}</Content>
    </Container>
  )
}
