import { TYPES } from '@/container/TYPES'
import { Book, IBookRepository } from '@/repositories/books'

export class LoadBookByIdUseCase {
  static containerKey = TYPES.BookRepository2
  constructor(private bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(id: string): Promise<Book> {
    const book = await this.bookRepository.findBookById(id)

    if (!book) {
      throw new Error('Book not found')
    }

    return book
  }
}
