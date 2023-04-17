import { prisma } from '@/lib/prisma'
import { Book, IBookRepository } from '..'

export class BookPrismaRepository implements IBookRepository {
  async findBookById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
      include: {
        ratings: true,
      },
    })

    if (!book) {
      return null
    }

    return {
      id: book.id,
      title: book.name,
      author: book.author,
      description: book.summary,
      image_url: book.cover_url,
      rating:
        book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
        book.ratings.length,
    }
  }

  async getAllBooks(categoryId?: string, searchTerm?: string): Promise<Book[]> {
    const books = await prisma.book.findMany({
      where: {
        ...(categoryId
          ? { categories: { some: { categoryId: { equals: categoryId } } } }
          : {}),
        ...(searchTerm
          ? {
              OR: [
                {
                  name: {
                    contains: searchTerm,
                    mode: 'insensitive',
                  },
                },
                {
                  author: {
                    contains: searchTerm,
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : {}),
      },

      include: {
        ratings: true,
      },
    })

    if (!books) {
      return []
    }

    return books.map((book) => {
      return {
        id: book.id,
        title: book.name,
        author: book.author,
        description: book.summary,
        image_url: book.cover_url,
        rating:
          book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
          book.ratings.length,
      }
    })
  }
}
