import { Container } from '@/container'
import { LoadBooksUseCase } from '@/services/books/LoadBooksUseCase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
  let {
    query: { tag, search },
  } = req

  const loadBooksUseCase = Container.resolve<LoadBooksUseCase>(
    LoadBooksUseCase.containerKey,
  )

  if (Array.isArray(tag)) {
    tag = tag[0]
  }

  if (Array.isArray(search)) {
    search = search[0]
  }

  const books = await loadBooksUseCase.execute(tag, search)

  res.status(200).json(books)
}
