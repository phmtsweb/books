import React from 'react'
import { StyledActiveLink } from './styles'

type ActiveLinkProps = {
  children: React.ReactNode
  href: string
  isActive?: boolean
  Icon?: React.FC
}

export function ActiveLink({
  children,
  href,
  isActive = false,
  Icon,
}: ActiveLinkProps) {
  return (
    <StyledActiveLink href={href} active={isActive}>
      {Icon && <Icon />}
      {children}
    </StyledActiveLink>
  )
}
