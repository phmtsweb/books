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
  maxWidth: 624,
  width: '100%',
})

export const BackContainer = styled('div', {
  margin: '$11 0 $10',
  display: 'flex',
  gap: '$3',
  cursor: 'pointer',
  alignItems: 'center',
  svg: {
    color: '$gray200',
  },

  strong: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '$md',
    lineHeight: '160%',
  },
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

export const SearchInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray500',
  borderRadius: '$sm',
  width: '100%',
  height: 48,
  padding: '0 14px',
  '&:focus-within': {
    border: 'solid 1px $gray300',

    svg: {
      color: '$gray300',
    },
  },

  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: '$gray100',
    flex: 1,
    alignSelf: 'stretch',
    fontSize: '$sm',
    lineHeight: '140%',
    '&::placeholder': {
      color: '$gray400',
    },
  },

  svg: {
    color: '$gray500',
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  marginTop: '$8',
})
