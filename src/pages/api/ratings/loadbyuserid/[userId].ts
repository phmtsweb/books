import { Container } from '@/container'
import { LoadByUserIdUseCase } from '@/services/ratings/LoadByUserIdUseCase'
import { NextApiRequest, NextApiResponse } from 'next'

type QueryProps = {
  userId: string
  search?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('query', req.query)
  const { userId, search } = req.query as QueryProps

  const loadByUserIdUseCase = Container.resolve<LoadByUserIdUseCase>(
    LoadByUserIdUseCase.containerKey,
  )

  const ratings = await loadByUserIdUseCase.execute(userId, search)
  res.status(200).json(ratings)
}
