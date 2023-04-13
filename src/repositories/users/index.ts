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

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<UserDTO>
  getUserById(id: string): Promise<UserDTO | null>
  getUserByEmail(email: string): Promise<UserDTO | null>
}
