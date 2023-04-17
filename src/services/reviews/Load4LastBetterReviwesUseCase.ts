import { TYPES } from '@/container/TYPES'
import { IRatingRepository, Rating } from '@/repositories/ratings'

export class LoadLast4BetterReviewsUseCase {
  static containerKey = TYPES.RatingRepository2

  constructor(private ratingRepository: IRatingRepository) {
    this.ratingRepository = ratingRepository
  }

  async execute(last = 4): Promise<Rating[]> {
    const ratings = await this.ratingRepository.getLastBetterRatings(last)
    return ratings
  }
}
