import { Sidebar } from '@/components/Sidebar'
import { useSession } from 'next-auth/react'

export default function Inicio() {
  const session = useSession()
  console.log(session)
  return <Sidebar />
}
