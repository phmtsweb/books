import { TYPES } from '@/container/TYPES'
import { IRatingRepository, Rating } from '@/repositories/ratings'

export class LoadByUserIdUseCase {
  static containerKey = TYPES.LoadByUserIdUseCase
  constructor(private ratingsRepository: IRatingRepository) {
    this.ratingsRepository = ratingsRepository
  }

  async execute(userId: string, search?: string): Promise<Rating[]> {
    const ratings = await this.ratingsRepository.getAllRatingsByUserId(
      userId,
      search,
    )
    return ratings
  }
}
