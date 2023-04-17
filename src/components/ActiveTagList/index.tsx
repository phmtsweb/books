import { ActiveTag } from '../ActiveTag'
import { Container } from './styles'

type ActiveTagListProps = {
  tags: {
    name: string
    id: string
  }[]
  activeTagId: string
  handleActiveTag: (tag: { id: string; name: string | undefined }) => void
}

export function ActiveTagList({
  tags,
  activeTagId,
  handleActiveTag,
}: ActiveTagListProps) {
  return (
    <Container>
      {tags.map((tag) => (
        <ActiveTag
          key={tag.id}
          tag={tag.name}
          active={activeTagId === tag.id}
          onClick={() => handleActiveTag(tag)}
        />
      ))}
    </Container>
  )
}
