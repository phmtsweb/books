import { Star, StarHalf } from '@phosphor-icons/react'
import { RatingStarsContainer } from './styles'
import cte from '../../constants'

type RaitingStarsProps = {
  size?: number
  rating: number
}

export function RatingStars({
  size = cte.RATING_SIZE,
  rating,
}: RaitingStarsProps) {
  const stars = Array.from({ length: size }, (_, index) => {
    const starIndex = index + 0.55
    return (
      <span key={index}>
        {rating >= starIndex ? (
          <Star size={16} weight="fill" />
        ) : rating > index ? (
          <StarHalf size={16} weight="fill" />
        ) : (
          <Star size={16} />
        )}
      </span>
    )
  })
  return (
    <RatingStarsContainer title={rating.toFixed(2)}>
      {stars.map((star) => star)}
    </RatingStarsContainer>
  )
}
