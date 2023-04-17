import { Container } from '@/container'
import { LoadBookByIdUseCase } from '@/services/books/LoadBookByIdUseCase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { bookId },
  } = req

  const loadBookByIdUseCase = Container.resolve<LoadBookByIdUseCase>(
    LoadBookByIdUseCase.containerKey,
  )
  try {
    const book = await loadBookByIdUseCase.execute(bookId as string)
    res.status(200).json(book)
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' })
  }
}
