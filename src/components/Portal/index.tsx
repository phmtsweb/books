import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FontsWrapper } from '../FontsWrapper'
import { Nunito } from 'next/font/google'

type PortalProps = {
  children: ReactNode | ReactNode[]
  portalId?: string
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function Portal({ children, portalId = 'react-portal' }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const container = document.createElement('div')
    container.setAttribute('id', portalId)
    document.body.appendChild(container)
    return () => {
      setMounted(false)
      document.body.removeChild(container)
    }
  }, [portalId])

  if (!mounted) {
    return null
  }

  return (
    <FontsWrapper font={nunito}>
      {createPortal(children, document.getElementById(portalId)!)}
    </FontsWrapper>
  )
}
