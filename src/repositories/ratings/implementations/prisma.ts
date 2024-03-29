import { prisma } from '@/lib/prisma'
import { IRatingRepository, Rating, RatingDTO } from '..'

export class RatingPrismaRepository implements IRatingRepository {
  async getAllRatingsByUserId(
    userId: string,
    search?: string,
  ): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      where: {
        user_id: userId,
        book: search
          ? {
              OR: [
                {
                  name: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  author: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : undefined,
      },
      include: {
        book: true,
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    if (ratings.length === 0) return []

    return ratings.map((rating) => ({
      id: rating.id,
      rating: rating.rate,
      created_at: rating.created_at.toISOString(),
      comment: rating.description,
      book: {
        id: rating.book?.id,
        title: rating.book?.name,
        author: rating.book?.author,
        description: rating.book?.summary,
        image_url: rating.book?.cover_url,
      },
    }))
  }

  async createRating(rating: RatingDTO): Promise<Rating> {
    const newRating = await prisma.rating.create({
      data: {
        rate: rating.rating,
        description: rating.comment,
        book: {
          connect: { id: rating.bookId },
        },
        user: {
          connect: { id: rating.userId },
        },
      },
      include: {
        book: true,
        user: true,
      },
    })

    return {
      id: newRating.id,
      rating: newRating.rate,
      created_at: newRating.created_at.toISOString(),
      book: {
        id: newRating.book?.id,
        title: newRating.book?.name,
        author: newRating.book?.author,
        description: newRating.book?.summary,
        image_url: newRating.book?.cover_url,
      },
      user: {
        id: newRating.user?.id,
        name: newRating.user?.name,
        avatar_url: newRating.user?.avatar_url!,
      },
    }
  }

  async findRatingById(id: string): Promise<Rating | null> {
    const rating = await prisma.rating.findUnique({
      where: {
        id,
      },
      include: {
        book: true,
        user: true,
      },
    })

    if (!rating) return null

    return {
      id: rating.id,
      rating: rating.rate,
      created_at: rating.created_at.toISOString(),
      book: {
        id: rating.book?.id,
        title: rating.book?.name,
        author: rating.book?.author,
        description: rating.book?.summary,
        image_url: rating.book?.cover_url,
      },
      user: {
        id: rating.user?.id,
        name: rating.user?.name,
        avatar_url: rating.user?.avatar_url!,
      },
    }
  }

  async getAllRatings(): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      include: {
        book: true,
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    if (ratings.length === 0) return []

    return ratings.map((rating) => ({
      id: rating.id,
      rating: rating.rate,
      created_at: rating.created_at.toISOString(),
      book: {
        id: rating.book?.id,
        title: rating.book?.name,
        author: rating.book?.author,
        description: rating.book?.summary,
        image_url: rating.book?.cover_url,
      },
      user: {
        id: rating.user?.id,
        name: rating.user?.name,
        avatar_url: rating.user?.avatar_url!,
      },
    }))
  }

  async getLastBetterRatings(last = 4): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      orderBy: {
        rate: 'desc',
      },
      take: last,
      include: {
        book: true,
        user: true,
      },
    })

    if (ratings.length === 0) return []

    return ratings.map((rating) => ({
      id: rating.id,
      rating: rating.rate,
      created_at: rating.created_at.toISOString(),
      book: {
        id: rating.book?.id,
        title: rating.book?.name,
        author: rating.book?.author,
        description: rating.book?.summary,
        image_url: rating.book?.cover_url,
      },
      user: {
        id: rating.user?.id,
        name: rating.user?.name,
        avatar_url: rating.user?.avatar_url!,
      },
    }))
  }
}
