import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  height: '100%',
  width: '100%',
})

export const MainContainer = styled('main', {
  flex: 1,
  height: '100%',
  display: 'flex',
  marginLeft: 96,
  marginRight: 96,
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
})

export const HeaderContainer = styled('header', {
  margin: '$11 0 $10',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const TitleContainer = styled('div', {
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

export const CardGridContainer = styled('div', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '$5',
})

export const SearchInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray500',
  borderRadius: '$sm',
  width: 433,
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
