import { CreateUserUseCase } from '@/services/users/CreateUserUseCase'
import { Container } from './definitions'
import { UserRepositoryByPrisma } from '@/repositories/users/implementations/prisma'
import { LoadReviewsUseCase } from '@/services/reviews/LoadReviewsUseCase'
import { RatingPrismaRepository } from '@/repositories/ratings/implementations/prisma'
import { LoadLast4BetterReviewsUseCase } from '@/services/reviews/Load4LastBetterReviwesUseCase'
import { LoadCategoriesUseCase } from '@/services/categories/LoadCategoriesUseCase'
import { CategoryPrismRepository } from '@/repositories/categories/implementations/prisma'
import { LoadBooksUseCase } from '@/services/books/LoadBooksUseCase'
import { BookPrismaRepository } from '@/repositories/books/implementations/prisma'
import { LoadBookByIdUseCase } from '@/services/books/LoadBookByIdUseCase'
import { CreateRatingUseCase } from '@/services/ratings/CreateRatingUseCase'

const userRepositoryByPrisma = new UserRepositoryByPrisma()
const ratingRepositoryByPrisma = new RatingPrismaRepository()
const categoryRepositoryByPrisma = new CategoryPrismRepository()
const bookRepositoryByPrisma = new BookPrismaRepository()

Container.registerSingleton(
  CreateUserUseCase.containerKey,
  new CreateUserUseCase(userRepositoryByPrisma),
)

Container.registerSingleton(
  LoadReviewsUseCase.containerKey,
  new LoadReviewsUseCase(ratingRepositoryByPrisma),
)

Container.registerSingleton(
  LoadLast4BetterReviewsUseCase.containerKey,
  new LoadLast4BetterReviewsUseCase(ratingRepositoryByPrisma),
)

Container.registerSingleton(
  LoadCategoriesUseCase.containerKey,
  new LoadCategoriesUseCase(categoryRepositoryByPrisma),
)

Container.registerSingleton(
  LoadBooksUseCase.containerKey,
  new LoadBooksUseCase(bookRepositoryByPrisma),
)

Container.registerSingleton(
  LoadBookByIdUseCase.containerKey,
  new LoadBookByIdUseCase(bookRepositoryByPrisma),
)

Container.registerSingleton(
  CreateRatingUseCase.containerKey,
  new CreateRatingUseCase(
    ratingRepositoryByPrisma,
    bookRepositoryByPrisma,
    userRepositoryByPrisma,
  ),
)
export { Container }
