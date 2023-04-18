import { prisma } from '@/lib/prisma'
import { ICreateUserDTO, IUsersRepository, User, UserDTO } from '..'
import * as z from 'zod'

export class UserRepositoryByPrisma implements IUsersRepository {
  async categoryMostReadByUserId(id: string): Promise<string | null> {
    const categories = await prisma.categoriesOnBooks.findMany({
      where: {
        book: {
          ratings: {
            some: {
              user_id: id,
            },
          },
        },
      },
      include: {
        category: true,
      },
    })

    const categoriesCount = categories.reduce((acc, category) => {
      if (acc[category.category.name]) {
        acc[category.category.name]++
      } else {
        acc[category.category.name] = 1
      }
      return acc
    }, {} as { [key: string]: number })

    const { name: mostReadCategory } = Object.keys(categoriesCount).reduce(
      (acc, key) => {
        if (categoriesCount[key] > acc.count) {
          acc.name = key
        }
        return acc
      },
      { count: 0, name: '' },
    )

    return mostReadCategory
  }

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

  async getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        ratings: {
          include: {
            book: true,
          },
        },
      },
    })

    if (!user) return null

    const authors = user.ratings.reduce((acc, rating) => {
      if (acc[rating.book?.author]) {
        acc[rating.book?.author]++
      } else {
        acc[rating.book?.author] = 1
      }
      return acc
    }, {} as { [key: string]: number })

    const amountAuthorsRead = Object.keys(authors).reduce((acc, author) => {
      if (authors[author] > acc) {
        acc = authors[author]
      }
      return acc
    }, 0)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at.toISOString(),
      avatar_url: user.avatar_url!,
      amountPagesRead: user.ratings.reduce((acc, rating) => {
        return acc + rating.book?.total_pages
      }, 0),
      amountBooksRead: user.ratings.length,
      amountAuthorsRead,
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
