export interface Rating {
  id: string
  rating: number
  created_at: string
  comment?: string
  book?: {
    id: string
    title: string
    author: string
    description: string
    image_url: string
  }
  user?: {
    id: string
    name: string
    avatar_url: string
  }
}

export interface RatingDTO {
  rating: number
  bookId: string
  userId: string
  comment: string
}

export interface IRatingRepository {
  findRatingById(id: string): Promise<Rating | null>
  getAllRatings(): Promise<Rating[]>
  getLastBetterRatings(last?: number): Promise<Rating[]>
  createRating(rating: RatingDTO): Promise<Rating>
  getAllRatingsByUserId(userId: string, search?: string): Promise<Rating[]>
}
