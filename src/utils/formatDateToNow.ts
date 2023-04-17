import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDateToNow(date: string): string {
  const dateInDate = new Date(date)
  return formatDistanceToNow(dateInDate, { addSuffix: true, locale: ptBR })
}
