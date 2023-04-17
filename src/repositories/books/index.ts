import { UserDTO } from '../users'

export interface Book {
  id: string
  title: string
  author: string
  description: string
  image_url: string
  rating: number
}

export interface Review {
  book: Book
  created_at: string
  rating: number
  user: UserDTO
}
export interface IBookRepository {
  findBookById(id: string): Promise<Book | null>
  getAllBooks(categoryId?: string, searchTerm?: string): Promise<Book[]>
}
