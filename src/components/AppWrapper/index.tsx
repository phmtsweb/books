import React from 'react'
import { styled } from '../../../stitches.config'

type AppWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
}

const StyledAppWrapper = styled('main', {
  width: '100%',
  height: '100vh',
  maxWidth: 1440,
  margin: '0 auto',
  padding: '$4',
})

export function AppWrapper({ children }: AppWrapperProps) {
  return <StyledAppWrapper>{children}</StyledAppWrapper>
}
