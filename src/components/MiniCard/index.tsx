import { RatingStars } from '../RatingStars'
import {
  BookInfoContainer,
  BookInfoHeader,
  Container,
  StyledImage,
} from './styles'

type MiniCardProps = {
  book: {
    title: string
    author: string
    image_url: string
  }
  rating: number
}

export function MiniCard({ book, rating }: MiniCardProps) {
  return (
    <Container>
      <StyledImage
        src={book.image_url.replace('public', '').replace('jpg', 'png')}
        alt={book.title}
        width={64}
        height={94}
      />
      <BookInfoContainer>
        <BookInfoHeader>
          <strong>{book.title}</strong>
          <span>{book.author}</span>
        </BookInfoHeader>
        <RatingStars rating={rating} />
      </BookInfoContainer>
    </Container>
  )
}
