import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import { RatingStars } from '../RatingStars'
import {
  BookContainerFooter,
  BookContainerFooterItem,
  BookInfo,
  BookInfoContainer,
  BookInfoFooter,
  BookInfoHeader,
  Container,
} from './styles'
import Image from 'next/image'

type BookDetailCardProps = {
  title: string
  author: string
  image_url: string
  rating: number
  categories: string[]
  pages: number
  avaliations: number
}

export function BookDetailCard({
  title,
  author,
  image_url,
  rating,
  categories,
  pages,
  avaliations,
}: BookDetailCardProps) {
  return (
    <Container>
      <BookInfoContainer>
        <Image
          src={image_url.replace('public', '').replace('jpg', 'png')}
          alt={title}
          width={172}
          height={242}
        />
        <BookInfo>
          <BookInfoHeader>
            <strong>{title}</strong>
            <span>{author}</span>
          </BookInfoHeader>
          <BookInfoFooter>
            <RatingStars rating={rating} />
            <span>
              {avaliations === 1
                ? `${avaliations} avaliação`
                : `${avaliations} avaliações`}
            </span>
          </BookInfoFooter>
        </BookInfo>
      </BookInfoContainer>
      <BookContainerFooter>
        <BookContainerFooterItem>
          <BookmarkSimple size={24} />
          <div>
            <span>Categorias</span>
            <strong>{categories.join(', ')}</strong>
          </div>
        </BookContainerFooterItem>
        <BookContainerFooterItem>
          <BookOpen size={24} />
          <div>
            <span>Páginas</span>
            <strong>
              {pages === 1 ? `${pages} página` : `${pages} páginas`}
            </strong>
          </div>
        </BookContainerFooterItem>
      </BookContainerFooter>
    </Container>
  )
}
