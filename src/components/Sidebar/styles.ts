import { styled } from '../../../stitches.config'
import Image from 'next/image'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$gray700',
  height: '100%',
  width: 232,
  borderRadius: 12,
  padding: '$8 $10',
})

export const LogoImage = styled(Image, {
  width: 128,
  height: 'auto',
})

export const UserLoginInfo = styled('div', {
  marginTop: 'auto',
})

export const MenuList = styled('ul', {
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  listStyle: 'none',
})

export const MenuItem = styled('li', {})
