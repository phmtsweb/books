import { styled } from '../../../stitches.config'
import Image from 'next/image'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  height: 'calc(100vh - 40px)',
  width: 232,
  borderRadius: 12,
  padding: '$8 $10',
  position: 'sticky',
  top: 20,
})

export const LogoImage = styled(Image, {
  width: 128,
  height: 'auto',
  alignSelf: 'center',
})

export const UserLoginInfo = styled('div', {
  marginTop: 'auto',
  color: '$gray100',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '700',
  lineHeight: '160%',
  fontSize: '$md',
  gap: '$3',
  alignSelf: 'center',

  a: {
    marginTop: 'auto',
    color: '$gray100',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '700',
    lineHeight: '160%',
    fontSize: '$md',
    gap: '$3',
    alignSelf: 'center',
  },
})

export const MenuList = styled('ul', {
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  listStyle: 'none',
})

export const MenuItem = styled('li', {})
