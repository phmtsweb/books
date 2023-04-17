import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
  maxWidth: 324,
  position: 'sticky',
  top: '1.25rem',
  height: 'fit-content',
  maxHeight: 'calc(100vh - 40px)',
  marginLeft: '4rem',
  marginTop: '7.875rem',
  overflowY: 'auto',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray800',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$full',
    border: 'none',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$1',
  strong: {
    color: '$gray100',
    fontWeight: '400',
    fontSize: '$sm',
    lineHeight: '160%',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    color: '$purple100',
    fontWeight: '700',
    lineHeight: '160%',
    fontSize: '$sm',

    '&:hover': {
      color: '$purple200',
      transition: 'color 0.2s',
    },
  },
})
