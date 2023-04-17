export interface Category {
  id: string
  name: string
}

export interface ICategoryRepository {
  findAll(): Promise<Category[]>
}
