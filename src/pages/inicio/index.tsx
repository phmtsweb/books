import { Sidebar } from '@/components/Sidebar'
import {
  CardsContainer,
  Container,
  MainContainer,
  MainContent,
  Subtitle,
  TitleContainer,
} from './styles'
import { ChartLineUp } from '@phosphor-icons/react'
import { Card } from '@/components/Card'
import { MiniCardSidebar } from '@/components/MiniCardSidebar'
import { Container as ContainerDI } from '@/container'
import { LoadReviewsUseCase } from '@/services/reviews/LoadReviewsUseCase'

type Rating = {
  id: string
  rating: number
  created_at: string
  book?: {
    title: string
    author: string
    description: string
    image_url: string
  }
  user?: {
    id: string
    name: string
    avatar_url: string
  }
}

type InicioProps = {
  ratings: Rating[]
}

export default function Inicio({ ratings }: InicioProps) {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <MainContent>
          <TitleContainer>
            <ChartLineUp size={32} />
            <h1>Início</h1>
          </TitleContainer>
          <Subtitle>Avaliações mais recentes</Subtitle>
          <CardsContainer>
            {ratings.map((rating) => (
              <Card
                key={rating.id}
                user={{
                  id: rating.user?.id || '',
                  name: rating.user?.name || '',
                  avatar_url: rating.user?.avatar_url || '',
                }}
                book={{
                  title: rating.book?.title || '',
                  author: rating.book?.author || '',
                  description: rating.book?.description || '',
                  image_url: rating.book?.image_url || '',
                }}
                rating={rating.rating}
                createdAt={rating.created_at}
              />
            ))}
          </CardsContainer>
        </MainContent>
        <MiniCardSidebar />
      </MainContainer>
    </Container>
  )
}

export async function getStaticProps() {
  const loadReviewsUseCase = ContainerDI.resolve<LoadReviewsUseCase>(
    LoadReviewsUseCase.containerKey,
  )
  const ratings = await loadReviewsUseCase.execute()
  return {
    props: {
      ratings,
    },

    revalidate: 1, // 1 minute
  }
}
