export interface UserDTO {
  id: string
  name: string
  email: string
  avatar_url: string
}

export interface ICreateUserDTO {
  name: string
  email: string
  avatar_url: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar_url: string
  created_at: string
  amountPagesRead: number
  amountBooksRead: number
  amountAuthorsRead: number
  mostReadCategory?: string
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<UserDTO>
  getUserById(id: string): Promise<User | null>
  getUserByEmail(email: string): Promise<UserDTO | null>
  categoryMostReadByUserId(id: string): Promise<string | null>
}
