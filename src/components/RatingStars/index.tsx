import React from 'react'
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
      <React.Fragment key={index}>
        {rating >= starIndex ? (
          <Star key={index} size={16} weight="fill" />
        ) : rating > index ? (
          <StarHalf key={index} size={16} weight="fill" />
        ) : (
          <Star key={index} size={16} />
        )}
      </React.Fragment>
    )
  })
  return (
    <RatingStarsContainer title={rating.toFixed(2)}>
      {stars.map((star) => star)}
    </RatingStarsContainer>
  )
}
