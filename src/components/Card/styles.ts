import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 608,
  height: 280,
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray700',
  gap: '$8',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const UserInfoContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  cursor: 'pointer',
  div: {
    display: 'flex',
    flexDirection: 'column',
    'span:first-child': {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: '400',
      lineHeight: '160%',
    },
    'span:last-child': {
      color: '$gray400',
      fontSize: '$sm',
      fontWeight: '400',
      lineHeight: '160%',
    },
  },
})

export const Body = styled('div', {
  display: 'flex',
  width: '100%',
  height: 152,
  gap: '$5',
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  flex: 1,
})

export const BookHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    fontWeight: '700',
    lineHeight: '140%',
    fontSize: '$md',
  },
  span: {
    color: '$gray400',
    fontWeight: '400',
    lineHeight: '160%',
    fontSize: '$sm',
  },
})

export const BookDescription = styled('p', {
  color: '$gray300',
  fontWeight: '400',
  lineHeight: '160%',
  fontSize: '$sm',
})
