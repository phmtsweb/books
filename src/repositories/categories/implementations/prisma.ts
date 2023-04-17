import { prisma } from '@/lib/prisma'
import { Category, ICategoryRepository } from '..'

export class CategoryPrismRepository implements ICategoryRepository {
  async findAll(): Promise<Category[]> {
    const categories = await prisma.category.findMany()

    return categories
  }
}
