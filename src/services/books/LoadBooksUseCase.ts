import { TYPES } from '@/container/TYPES'
import { Book, IBookRepository } from '@/repositories/books'

export class LoadBooksUseCase {
  static containerKey = TYPES.BookRepository

  constructor(private booksRepository: IBookRepository) {
    this.booksRepository = booksRepository
  }

  async execute(tag?: string, searchTerm?: string): Promise<Book[]> {
    const books = await this.booksRepository.getAllBooks(tag, searchTerm)

    return books
  }
}
