import { Check, X } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import { RatingStarsEditable } from '../RatingStarsEditable'
import {
  Comment,
  CommentContainer,
  Container,
  Counter,
  Footer,
  Header,
} from './styles'
import { useSession } from 'next-auth/react'

type EvalBlockProps = {
  isOpen: boolean
  handleClose: () => void
  rating: number
  handleRating: (rating: number) => void
  comment: string
  handleComment: (comment: string) => void
  handleSubmit: () => void
}

export function EvalBlock({
  isOpen,
  handleClose,
  rating,
  handleRating,
  comment,
  handleComment,
  handleSubmit,
}: EvalBlockProps) {
  const session = useSession() as any
  const MAX_COMMENT_SIZE = 450

  if (!isOpen) return null
  return (
    <Container>
      <Header>
        <div>
          <Avatar url={session.data?.user?.avatar_url || ''} />
          <strong>{session.data?.user?.name}</strong>
        </div>
        <RatingStarsEditable
          rating={rating}
          handleRating={handleRating}
          size={5}
        />
      </Header>
      <CommentContainer>
        <Comment
          placeholder="Escreva uma avaliação"
          value={comment}
          onChange={(e) => handleComment(e.target.value)}
          maxLength={MAX_COMMENT_SIZE}
        />
        <Counter>
          {comment.length}/{MAX_COMMENT_SIZE}
        </Counter>
      </CommentContainer>
      <Footer>
        <button type="button" onClick={handleClose}>
          <X size={24} />
        </button>
        <button type="button" onClick={handleSubmit}>
          <Check size={24} />
        </button>
      </Footer>
    </Container>
  )
}
