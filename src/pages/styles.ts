import { styled } from '../../stitches.config'
import Image from 'next/image'

export const Container = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'calc(100vh - 40px)',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  maxWidth: 598,
  width: '100%',
  borderRadius: '$md',
  overflow: 'hidden',
})

export const BackgroundImage = styled(Image, {
  position: 'absolute',
  width: '100%',
  zIndex: -1,
  height: '100%',
})

export const LogoImage = styled(Image, {
  width: 232,
})

export const LoginContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 0 372px',
  height: '100%',
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
  maxWidth: 372,
})

export const LoginInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    fontWeight: '700',
    lineHeight: '140%',
    color: '$gray100',
  },
  p: {
    fontSize: '$md',
    fontWeight: '400',
    lineHeight: '160%',
    color: '$gray200',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  height: 72,
  backgroundColor: '#252D4A',
  gap: '$5',
  img: {
    width: 32,
    height: 32,
  },
  span: {
    fontSize: '$lg',
    fontWeight: '700',
    lineHeight: '160%',
    color: '$gray200',
  },
})
