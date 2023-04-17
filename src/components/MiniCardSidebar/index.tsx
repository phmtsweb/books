import { MiniCard } from '../MiniCard'
import { Container, Header } from './styles'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react'
import useSWR from 'swr'
import { useCallback } from 'react'
import { Rating } from '@/repositories/ratings'

export function MiniCardSidebar() {
  const fetcher = useCallback(
    (url: string) => fetch(url).then((res) => res.json()),
    [],
  )
  const { data } = useSWR<Rating[]>('/api/ratings/load4last', fetcher)

  if (!data) return null

  return (
    <Container>
      <Header>
        <strong>Livros populares</strong>
        <Link href="/explorar">
          Ver mais <CaretRight size={16} />
        </Link>
      </Header>
      {data.map((rating) => (
        <MiniCard
          key={rating.id}
          book={{
            title: rating.book?.title!,
            author: rating.book?.author!,
            image_url: rating.book?.image_url!,
          }}
          rating={rating.rating}
        />
      ))}
    </Container>
  )
}
