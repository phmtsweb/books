import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: 8,
  backgroundColor: '$gray700',
  width: '100%',
  maxWidth: 564,
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '$6',

  'div:first-child': {
    display: 'flex',
    gap: '$4',
    alignItems: 'center',

    strong: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: '700',
      lineHeight: '140%',
    },
  },
})
export const CommentContainer = styled('div', {
  position: 'relative',
  marginBottom: '$4',
})

export const Comment = styled('textarea', {
  width: '100%',
  height: 164,
  padding: '14px 20px',
  backgroundColor: '$gray800',
  color: '$gray200',
  border: 'solid 1px $gray500',
  borderRadius: 4,
  resize: 'none',

  '&::placeholder': {
    color: '$gray500',
  },
})

export const Counter = styled('span', {
  color: '$gray400',
  fontSize: '$xs',
  fontWeight: '400',
  lineHeight: '160%',
  position: 'absolute',
  bottom: 4,
  right: 8,
})

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',

  button: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '$gray600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      filter: 'brightness(0.9)',
    },

    '&:first-child': {
      color: '$purple100',
    },

    '&:last-child': {
      color: '$green100',
    },
  },
})
