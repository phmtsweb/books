import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 564,
  height: 414,
  backgroundColor: '$gray700',
  padding: '$6 $8 $4',
  borderRadius: '$md',
  gap: '$10',
  fontFamily: 'Nunito, sans-serif',
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  gap: '$8',
  width: '100%',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookInfoHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  strong: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '$lg',
    lineHeight: '140%',
  },
  span: {
    color: '$gray300',
    fontWeight: '400',
    fontSize: '$md',
    lineHeight: '160%',
  },
})

export const BookInfoFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  width: '100%',
  span: {
    color: '$gray400',
    fontWeight: '400',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})

export const BookContainerFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  padding: '$6 0',
  gap: 56,
  borderTop: 'solid 1px $gray600',
})

export const BookContainerFooterItem = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      color: '$gray300',
      fontWeight: '400',
      fontSize: '$sm',
      lineHeight: '160%',
    },

    strong: {
      color: '$gray100',
      fontWeight: '700',
      fontSize: '$md',
      lineHeight: '140%',
    },
  },
})
