import { formatDateToNow } from '@/utils/formatDateToNow'
import { RatingStars } from '../RatingStars'
import {
  BookInfoContainer,
  Container,
  Description,
  HeaderContainer,
  Time,
} from './styles'
import Image from 'next/image'

type CardProfileBookProps = {
  title: string
  author: string
  image_url: string
  rating: number
  description: string
  createdAt: string
}

export function CardProfileBook({
  title,
  author,
  image_url,
  rating,
  description,
  createdAt,
}: CardProfileBookProps) {
  return (
    <div>
      <Time>{formatDateToNow(createdAt)}</Time>
      <Container>
        <HeaderContainer>
          <Image
            src={image_url.replace('public', '').replace('jpg', 'png')}
            alt={title}
            width={98}
            height={134}
          />
          <div>
            <BookInfoContainer>
              <strong>{title}</strong>
              <span>{author}</span>
            </BookInfoContainer>
            <RatingStars rating={rating} />
          </div>
        </HeaderContainer>
        <Description>{description}</Description>
      </Container>
    </div>
  )
}
