import { TYPES } from '@/container/TYPES'
import { IBookRepository } from '@/repositories/books'
import { IRatingRepository, Rating, RatingDTO } from '@/repositories/ratings'
import { IUsersRepository } from '@/repositories/users'

export class CreateRatingUseCase {
  static containerKey = TYPES.CreateRatingUseCase
  constructor(
    private ratingRepository: IRatingRepository,
    private bookRepository: IBookRepository,
    private userRepository: IUsersRepository,
  ) {
    this.bookRepository = bookRepository
    this.userRepository = userRepository
    this.ratingRepository = ratingRepository
  }

  async execute(data: RatingDTO): Promise<Rating> {
    const { bookId, userId, rating, comment } = data

    const bookExists = await this.bookRepository.findBookById(bookId)

    if (!bookExists) {
      throw new Error('Book not found')
    }

    const userExists = await this.userRepository.getUserById(userId)

    if (!userExists) {
      throw new Error('User not found')
    }

    const newRating = await this.ratingRepository.createRating({
      bookId,
      userId,
      rating,
      comment,
    })

    return newRating
  }
}
