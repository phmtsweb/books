import React, { useCallback, useState, useEffect, startTransition } from 'react'
import { Sidebar } from '@/components/Sidebar'
import {
  CardGridContainer,
  Container,
  HeaderContainer,
  MainContainer,
  MainContent,
  SearchInput,
  TitleContainer,
} from './styles'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { LoadCategoriesUseCase } from '@/services/categories/LoadCategoriesUseCase'
import { Container as ContainerDI } from '@/container'
import { LoadBooksUseCase } from '@/services/books/LoadBooksUseCase'
import { Category } from '@/repositories/categories'
import { Book } from '@/repositories/books'
import { ActiveTagList } from '@/components/ActiveTagList'
import { MiniCard } from '@/components/MiniCard'
import { ModalBookDetail } from '@/components/ModalBookDetail'
import useSWR, { SWRConfig } from 'swr'

type ExplorarProps = {
  tags: Category[]
  activeTagId: string
  fallback: {
    [key: string]: Book[]
  }
}

type ActiveTagProps = {
  id: string
  name: string | undefined
}

export default function Explorar({
  tags,
  activeTagId,
  fallback,
}: ExplorarProps) {
  const [activeTag, setActiveTag] = useState<ActiveTagProps>({
    id: activeTagId,
    name: undefined,
  })
  const [showData, setShowData] = useState(true)
  const [search, setSearch] = useState('')

  const [bookDetailId, setBookDetailId] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleActiveTag = useCallback((tag: ActiveTagProps) => {
    setActiveTag(tag)
  }, [])

  const handleBookDetail = (bookId: string) => {
    setBookDetailId(bookId)
    setModalIsOpen(true)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
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

  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  let url = '/api/books/load'

  if (activeTag.id !== 'Tudo') {
    url += `?tag=${activeTag.id}`
  }
  if (search) {
    url += activeTag.id !== 'Tudo' ? `&search=${search}` : `?search=${search}`
  }

  const { data: booksPage } = useSWR<Book[]>(url, fetcher)

  return (
    <SWRConfig value={{ fallback }}>
      <Container>
        <Sidebar />
        <MainContainer>
          <MainContent>
            <HeaderContainer>
              <TitleContainer>
                <Binoculars size={32} />
                <h1>Explorar</h1>
              </TitleContainer>
              <SearchInput>
                <input
                  type="text"
                  placeholder="Busque por livro ou autor"
                  value={search}
                  onChange={handleSearch}
                />
                <MagnifyingGlass size={24} />
              </SearchInput>
            </HeaderContainer>
            <ActiveTagList
              tags={tags}
              activeTagId={activeTag.id}
              handleActiveTag={handleActiveTag}
            />
            <CardGridContainer>
              {showData &&
                booksPage?.map((book) => (
                  <MiniCard
                    key={book.id}
                    handleClick={() => handleBookDetail(book.id)}
                    book={{
                      title: book.title,
                      author: book.author,
                      image_url: book.image_url,
                    }}
                    rating={book.rating}
                  />
                ))}
            </CardGridContainer>
          </MainContent>
        </MainContainer>
        <ModalBookDetail
          bookId={bookDetailId}
          isOpen={modalIsOpen}
          handleClose={() => setModalIsOpen(false)}
        />
      </Container>
    </SWRConfig>
  )
}

export async function getStaticProps() {
  const categories = await ContainerDI.resolve<LoadCategoriesUseCase>(
    LoadCategoriesUseCase.containerKey,
  ).execute()

  const books = await ContainerDI.resolve<LoadBooksUseCase>(
    LoadBooksUseCase.containerKey,
  ).execute()

  const activeTagId = 'Tudo'
  const tags = [{ id: 'Tudo', name: 'Tudo' }, ...categories]
  return {
    props: {
      fallback: {
        '/api/books/load': books,
      },
      tags,
      activeTagId,
    },
    revalidate: 60, // 1 minute
  }
}
