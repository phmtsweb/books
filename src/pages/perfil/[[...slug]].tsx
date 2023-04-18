import { Sidebar } from '@/components/Sidebar'
import {
  MainContainer,
  Container,
  MainContent,
  TitleContainer,
  SearchInput,
  CardContainer,
  BackContainer,
} from './styles'
import { ArrowLeft, MagnifyingGlass, User } from '@phosphor-icons/react'
import React, { useState, startTransition, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { LoadByUserIdUseCase } from '@/services/ratings/LoadByUserIdUseCase'
import { Container as ContainerDI } from '@/container'
import useSWR, { SWRConfig } from 'swr'
import { CardProfileBook } from '@/components/CardProfileBook'
import { Rating } from '@/repositories/ratings'
import { Session } from 'next-auth'
import { GetUserByIdUseCase } from '@/services/users/GetUserByIdUseCase'
import { User as UserType } from '@/repositories/users'
import { ProfileInfo } from '@/components/ProfileInfo'
import { useRouter } from 'next/router'

type ProfileProps = {
  user: UserType
  fallback: {
    [key: string]: Rating[]
  }
  isOwnProfile: boolean
}

export default function Perfil({ user, fallback, isOwnProfile }: ProfileProps) {
  const [search, setSearch] = useState('')
  const [showData, setShowData] = useState(true)
  const router = useRouter()

  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  const url =
    `/api/ratings/loadbyuserid/${user.id}` +
    (search.trim() !== '' ? `?search=${search}` : '')

  const { data } = useSWR<Rating[]>(url, fetcher)

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleBack() {
    router.back()
  }

  useEffect(() => {
    if (search) {
      startTransition(() => {
        setShowData(false)
      })
      const timeoutId = setTimeout(() => {
        setShowData(true)
      }, 500)
      return () => {
        if (!search) clearTimeout(timeoutId)
      }
    }
  }, [search])

  // console.log('user ratings', data)

  return (
    <SWRConfig value={{ fallback }}>
      <Container>
        <Sidebar />
        <MainContainer>
          <MainContent>
            {isOwnProfile ? (
              <TitleContainer>
                <User size={32} />
                <h1>Perfil</h1>
              </TitleContainer>
            ) : (
              <BackContainer onClick={handleBack}>
                <ArrowLeft size={20} />
                <strong>Voltar</strong>
              </BackContainer>
            )}
            <SearchInput>
              <input
                type="text"
                placeholder="Busque por livro avaliado pelo nome ou autor"
                value={search}
                onChange={handleSearch}
              />
              <MagnifyingGlass size={24} />
            </SearchInput>
            <CardContainer>
              {showData &&
                data?.map((rating) => (
                  <CardProfileBook
                    key={rating.id}
                    title={rating.book?.title || ''}
                    author={rating.book?.author || ''}
                    image_url={rating.book?.image_url || ''}
                    rating={rating.rating}
                    description={rating.comment || ''}
                    createdAt={rating.created_at}
                  />
                ))}
            </CardContainer>
          </MainContent>
        </MainContainer>
        <ProfileInfo
          name={user.name}
          created_at={user.created_at}
          avatar_url={user.avatar_url}
          amountPagesRead={user.amountPagesRead}
          amountBooksRead={user.amountBooksRead}
          amountAuthorsRead={user.amountAuthorsRead}
          categoryMostRead={user.mostReadCategory!}
        />
      </Container>
    </SWRConfig>
  )
}

type SessionProps = {
  session: Session
  user: {
    id: string
  }
}

type ParamsProps = {
  slug: string[] | undefined
}

export async function getServerSideProps({
  req,
  params,
}: GetServerSidePropsContext) {
  const session = (await getSession({
    req,
  })) as unknown as SessionProps
  if (!session && !params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const pathParams = params as ParamsProps
  let userId = ''
  if (!Object.hasOwn(pathParams, 'slug')) {
    userId = session?.user.id as string
  } else {
    userId = pathParams.slug![0]
  }

  const loadByUserIdUseCase = ContainerDI.resolve<LoadByUserIdUseCase>(
    LoadByUserIdUseCase.containerKey,
  )
  const getUserByIdUseCase = ContainerDI.resolve<GetUserByIdUseCase>(
    GetUserByIdUseCase.containerKey,
  )

  const ratings = await loadByUserIdUseCase.execute(userId)
  const user = await getUserByIdUseCase.execute(userId)

  return {
    props: {
      fallback: {
        [`/api/ratings/loadbyuserid/${userId}`]: ratings,
      },
      user,
      isOwnProfile: userId === session?.user.id,
    },
  }
}
