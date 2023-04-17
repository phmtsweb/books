import React, { useCallback, useEffect, useRef, useState } from 'react'
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

type ExplorarProps = {
  tags: Category[]
  books: Book[]
  activeTagId: string
}

type ActiveTagProps = {
  id: string
  name: string | undefined
}

export default function Explorar({ tags, books, activeTagId }: ExplorarProps) {
  const [activeTag, setActiveTag] = useState<ActiveTagProps>({
    id: activeTagId,
    name: undefined,
  })
  const [search, setSearch] = useState('')

  const [booksPage, setBooksPage] = useState<Book[]>(() => books)

  const [bookDetailId, setBookDetailId] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const firstRender = useRef(true)

  const handleActiveTag = useCallback((tag: ActiveTagProps) => {
    setActiveTag(tag)
  }, [])

  const handleBookDetail = (bookId: string) => {
    setBookDetailId(bookId)
    setModalIsOpen(true)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    ;(async () => {
      let url = '/api/books/load'
      if (activeTag.id !== 'Tudo') {
        url += `?tag=${activeTag.id}`
      }
      if (search) {
        url +=
          activeTag.id !== 'Tudo' ? `&search=${search}` : `?search=${search}`
      }
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setBooksPage(data)
    })()
  }, [activeTag, search])
  return (
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
            {booksPage.map((book) => (
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
      tags,
      books,
      activeTagId,
    },
    revalidate: 60, // 1 minute
  }
}
