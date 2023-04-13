import { TYPES } from '@/container/TYPES'
import { IUsersRepository, UserDTO } from '@/repositories/users'

type IRequest = {
  name: string
  email: string
  avatar_url?: string
}

export class CreateUserUseCase {
  static containerKey = TYPES.UserRepository
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, avatar_url }: IRequest): Promise<UserDTO> {
    const userAlreadyExists = await this.usersRepository.getUserByEmail(email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = await this.usersRepository.create({
      name,
      email,
      avatar_url: avatar_url || '',
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    }
  }
}
