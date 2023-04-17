import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  height: '100%',
  width: '100%',
})

export const MainContainer = styled('main', {
  flex: '1 0 auto',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: 608,
  width: '100%',
})

export const TitleContainer = styled('div', {
  margin: '$11 0 $10',
  display: 'flex',
  gap: '$3',
  svg: {
    color: '$green100',
  },

  h1: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '$2xl',
    lineHeight: '140%',
  },
})

export const Subtitle = styled('p', {
  color: '$gray100',
  fontWeight: '400',
  fontSize: '$sm',
  lineHeight: '160%',
  marginBottom: '$4',
})

export const CardsContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
