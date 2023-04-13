import { CreateUserUseCase } from '@/services/users/CreateUserUseCase'
import { Container } from './definitions'
import { UserRepositoryByPrisma } from '@/repositories/users/implementations/prisma'

Container.registerSingleton(
  CreateUserUseCase.containerKey,
  new CreateUserUseCase(new UserRepositoryByPrisma()),
)

export { Container }
