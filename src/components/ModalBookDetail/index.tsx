import { Portal } from '../Portal'
import {
  Overlay,
  Container,
  CloseButton,
  AvalWrapper,
  AvalContainer,
} from './styles'
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { Book } from '@/repositories/books'
import { BookDetailCard } from '../BookDetailCard'
import { AvaliationCard } from '../AvaliationCard'
import { EvalBlock } from '../EvalBlock'
import { useSession } from 'next-auth/react'

type ModalBookDetailProps = {
  bookId: string
  isOpen: boolean
  handleClose: () => void
}

export function ModalBookDetail({
  bookId,
  isOpen,
  handleClose,
}: ModalBookDetailProps) {
  function handleCloseOutside(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) handleClose()
  }

  const [book, setBook] = useState<Book | null>(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isOpenEvalBlock, setIsOpenEvalBlock] = useState(false)

  const session = useSession()
  const user = session.data?.user as {
    id: string
    name: string
    avatar_url: string
  }

  const handleCloseEvalBlock = useCallback(() => {
    setIsOpenEvalBlock(false)
  }, [])

  const handleRating = useCallback((rating: number) => {
    setRating(rating)
  }, [])

  const handleComment = useCallback((comment: string) => {
    setComment(comment)
  }, [])

  const handleSubmit = useCallback(async () => {
    const data = {
      rating,
      comment,
      user_id: user.id,
      book_id: bookId,
    }

    try {
      const response = await fetch('/api/ratings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const rating = await response.json()
      setBook((prev) => {
        if (!prev) return null
        return {
          ...prev,
          avaliations: [rating, ...prev.avaliations!],
        } as Book
      })
      setIsOpenEvalBlock(false)
    } catch (error) {
      console.log(error)
    }
  }, [rating, comment, user, bookId])

  useEffect(() => {
    if (!isOpen) return
    ;(async () => {
      const response = await fetch(`/api/books/${bookId}`)
      const data = await response.json()
      setBook(data)
    })()
  }, [bookId, isOpen])
  if (!isOpen) return null
  return (
    <Portal portalId="modal-book-detail">
      <Overlay onClick={handleCloseOutside}>
        <Container>
          <CloseButton onClick={handleClose}>
            <X size={24} />
          </CloseButton>
          <BookDetailCard
            title={book?.title || ''}
            author={book?.author || ''}
            image_url={book?.image_url || ''}
            rating={book?.rating || 0}
            categories={book?.categories || []}
            pages={book?.pages || 0}
            avaliations={book?.avaliations?.length || 0}
          />
          <AvalWrapper>
            <header>
              <span>Avaliações</span>
              <a onClick={() => setIsOpenEvalBlock(true)}>Avaliar</a>
            </header>
            <EvalBlock
              isOpen={isOpenEvalBlock}
              handleClose={handleCloseEvalBlock}
              rating={rating}
              handleRating={handleRating}
              comment={comment}
              handleComment={handleComment}
              handleSubmit={handleSubmit}
            />
            <AvalContainer>
              {book?.avaliations?.map((avaliation) => (
                <AvaliationCard
                  key={avaliation.id}
                  user={{
                    name: avaliation.user.name,
                    avatar_url: avaliation.user.avatar_url,
                  }}
                  rating={avaliation.rating}
                  comment={avaliation.comment}
                  created_at={avaliation.created_at}
                />
              ))}
            </AvalContainer>
          </AvalWrapper>
        </Container>
      </Overlay>
    </Portal>
  )
}
