import { styled } from '../../../stitches.config'

export const Time = styled('span', {
  display: 'block',
  color: '$gray300',
  fontWeight: '400',
  fontSize: '$sm',
  lineHeight: '160%',
  marginBottom: '$2',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
  backgroundColor: '$gray700',
  width: '100%',
  maxWidth: 624,
  borderRadius: 8,
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  gap: '$6',
  width: '100%',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '$lg',
    lineHeight: '140%',
  },
  span: {
    color: '$gray400',
    fontWeight: '400',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})

export const Description = styled('p', {
  color: '$gray300',
  fontWeight: '400',
  fontSize: '$sm',
  lineHeight: '160%',
})
