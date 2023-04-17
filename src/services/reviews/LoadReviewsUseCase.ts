import { TYPES } from '@/container/TYPES'
import { IRatingRepository } from '@/repositories/ratings'

export class LoadReviewsUseCase {
  static containerKey = TYPES.RatingRepository

  constructor(private ratingRepository: IRatingRepository) {
    this.ratingRepository = ratingRepository
  }

  async execute() {
    const ratings = await this.ratingRepository.getAllRatings()

    return ratings
  }
}
