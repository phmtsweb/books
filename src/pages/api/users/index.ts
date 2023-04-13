import { Container } from '@/container'
import { CreateUserUseCase } from '@/services/users/CreateUserUseCase'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import cte from '../../../constants'
import * as z from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const reqBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    avatar_url: z.string().optional(),
  })
  const reqBody = reqBodySchema.safeParse(req.body)

  if (!reqBody.success) {
    return res.status(400).json({ message: 'Invalid request body' })
  }

  const { name, email, avatar_url } = reqBody.data

  const createUserUseCase = Container.resolve<CreateUserUseCase>(
    CreateUserUseCase.containerKey,
  )

  const user = await createUserUseCase.execute({ name, email, avatar_url })

  setCookie({ res }, cte.COOKIE_KEY_USER_ID, user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  res.status(201).json({ user })
}
