import { TYPES } from '@/container/TYPES'
import { IUsersRepository, User } from '@/repositories/users'

export class GetUserByIdUseCase {
  static containerKey = TYPES.GetUserByIdUseCase
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(id: string): Promise<User | null> {
    const user = await this.usersRepository.getUserById(id)
    const mostReadCategory =
      await this.usersRepository.categoryMostReadByUserId(id)

    if (!user) return null

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
      created_at: user.created_at,
      amountPagesRead: user.amountPagesRead,
      amountBooksRead: user.amountBooksRead,
      amountAuthorsRead: user.amountAuthorsRead,
      mostReadCategory: mostReadCategory!,
    }
  }
}
