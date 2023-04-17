import { formatDateToNow } from '@/utils/formatDateToNow'
import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'
import {
  Body,
  BookDescription,
  BookHeader,
  BookInfoContainer,
  Container,
  Header,
  UserInfoContainer,
} from './styles'
import Image from 'next/image'

type CardProps = {
  user: {
    name: string
    avatar_url: string
  }
  book: {
    title: string
    author: string
    description: string
    image_url: string
  }
  rating: number
  createdAt: string
}

export function Card({ user, book, rating, createdAt }: CardProps) {
  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <Avatar url={user.avatar_url} size="medium" />
          <div>
            <span>{user.name}</span>
            <span>{formatDateToNow(createdAt)}</span>
          </div>
        </UserInfoContainer>
        <RatingStars rating={rating} />
      </Header>
      <Body>
        <Image
          src={book.image_url.replace('public', '').replace('jpg', 'png')}
          alt={book.title}
          height={152}
          width={108}
        />
        <BookInfoContainer>
          <BookHeader>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </BookHeader>
          <BookDescription>{book.description}</BookDescription>
        </BookInfoContainer>
      </Body>
    </Container>
  )
}
