import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { RatingStarsContainer } from './styles'

type RatingStarEditableProps = {
  size?: number
  rating: number
  handleRating: (rating: number) => void
}

export function RatingStarsEditable({
  size = 5,
  rating,
  handleRating,
}: RatingStarEditableProps) {
  const [hover, setHover] = useState(0)

  const stars = Array.from({ length: size }, (_, index) => {
    const starValue = index + 1
    return (
      <Star
        key={starValue}
        size={28}
        onClick={() => handleRating(starValue)}
        onMouseLeave={() => setHover(0)}
        onMouseEnter={() => setHover(starValue)}
        weight={starValue <= (hover || rating) ? 'fill' : undefined}
      />
    )
  })

  return (
    <RatingStarsContainer>{stars.map((star) => star)}</RatingStarsContainer>
  )
}
