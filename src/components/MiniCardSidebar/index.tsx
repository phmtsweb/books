import { MiniCard } from '../MiniCard'
import { Container, Header } from './styles'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react'
import useSWR from 'swr'
import { useCallback, useState } from 'react'
import { Rating } from '@/repositories/ratings'
import { ModalBookDetail } from '../ModalBookDetail'

export function MiniCardSidebar() {
  const fetcher = useCallback(
    (url: string) => fetch(url).then((res) => res.json()),
    [],
  )

  const [isOpen, setIsOpen] = useState(false)
  const [bookId, setBookId] = useState('')
  const { data } = useSWR<Rating[]>('/api/ratings/load4last', fetcher)

  const handleOpenModal = useCallback((bookId: string) => {
    setBookId(bookId)
    setIsOpen(true)
  }, [])

  if (!data) return null

  return (
    <>
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
            handleClick={() => handleOpenModal(rating.book?.id!)}
          />
        ))}
      </Container>
      <ModalBookDetail
        bookId={bookId}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  )
}
