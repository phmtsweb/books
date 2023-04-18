import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import {
  Container,
  Separator,
  UserEstatistics,
  UserEstatisticsItem,
  UserInfo,
  UserInfoFooter,
} from './styles'
import { getYear } from 'date-fns'

type ProfileInfoProps = {
  name: string
  created_at: string
  avatar_url: string
  amountPagesRead: number
  amountBooksRead: number
  amountAuthorsRead: number
  categoryMostRead: string
}

export function ProfileInfo({
  name,
  created_at,
  avatar_url,
  amountPagesRead,
  amountBooksRead,
  amountAuthorsRead,
  categoryMostRead,
}: ProfileInfoProps) {
  return (
    <Container>
      <UserInfo>
        <Avatar url={avatar_url} size="xlarge" />
        <UserInfoFooter>
          <strong>{name}</strong>
          <span>membro desde {getYear(new Date(created_at))}</span>
        </UserInfoFooter>
      </UserInfo>
      <Separator />
      <UserEstatistics>
        <UserEstatisticsItem>
          <BookOpen size={32} />
          <div>
            <strong>{amountPagesRead}</strong>
            <span>Páginas lidas</span>
          </div>
        </UserEstatisticsItem>
        <UserEstatisticsItem>
          <Books size={32} />
          <div>
            <strong>{amountBooksRead}</strong>
            <span>Livros avaliados</span>
          </div>
        </UserEstatisticsItem>
        <UserEstatisticsItem>
          <UserList size={32} />
          <div>
            <strong>{amountAuthorsRead}</strong>
            <span>Autores lidos</span>
          </div>
        </UserEstatisticsItem>
        <UserEstatisticsItem>
          <BookmarkSimple size={32} />
          <div>
            <strong>{categoryMostRead}</strong>
            <span>Categoria mais lida</span>
          </div>
        </UserEstatisticsItem>
      </UserEstatistics>
    </Container>
  )
}
