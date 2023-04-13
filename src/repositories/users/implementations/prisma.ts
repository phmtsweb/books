import { prisma } from '@/lib/prisma'
import { ICreateUserDTO, IUsersRepository, UserDTO } from '..'
import * as z from 'zod'

export class UserRepositoryByPrisma implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<UserDTO> {
    const userSchema = z.object({
      name: z.string(),
      email: z.string(),
      avatar_url: z.string().optional(),
    })

    const user = userSchema.safeParse(data)

    if (!user.success) {
      throw new Error('Invalid user data')
    }

    const prismaUser = await prisma.user.create({
      data,
    })

    return {
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      avatar_url: prismaUser.avatar_url!,
    }
  }

  async getUserById(id: string): Promise<UserDTO | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) return null

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url!,
    }
  }

  async getUserByEmail(email: string): Promise<UserDTO | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) return null

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url!,
    }
  }
}
