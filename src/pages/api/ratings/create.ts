import { Container } from '@/container'
import { CreateRatingUseCase } from '@/services/ratings/CreateRatingUseCase'
import { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'

const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  book_id: z.string(),
  user_id: z.string(),
  comment: z.string().min(10).max(450),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { rating, book_id, user_id, comment } = req.body

  const isValid = ratingSchema.safeParse({ rating, book_id, user_id, comment })

  if (!isValid.success) {
    return res.status(400).json({
      error: isValid.error,
    })
  }

  const createRatingUseCase = Container.resolve<CreateRatingUseCase>(
    CreateRatingUseCase.containerKey,
  )
  const newRating = await createRatingUseCase.execute({
    rating,
    bookId: book_id,
    userId: user_id,
    comment,
  })

  return res.status(201).json(newRating)
}
