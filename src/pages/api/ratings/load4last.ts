import { Container } from '@/container'
import { LoadLast4BetterReviewsUseCase } from '@/services/reviews/Load4LastBetterReviwesUseCase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const load4LastBetterReviwesUseCase =
    Container.resolve<LoadLast4BetterReviewsUseCase>(
      LoadLast4BetterReviewsUseCase.containerKey,
    )

  const last4ratings = await load4LastBetterReviwesUseCase.execute()

  return res.status(200).json(last4ratings)
}
