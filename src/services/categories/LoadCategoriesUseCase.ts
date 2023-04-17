import { TYPES } from '@/container/TYPES'
import { Category, ICategoryRepository } from '@/repositories/categories'

export class LoadCategoriesUseCase {
  static containerKey = TYPES.CategoryRepository
  constructor(private categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.findAll()

    return categories
  }
}
