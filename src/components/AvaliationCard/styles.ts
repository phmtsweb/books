import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  padding: '$6',
  backgroundColor: '$gray700',
  borderRadius: 8,
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  'div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    div: {
      display: 'flex',
      flexDirection: 'column',

      strong: {
        color: '$gray100',
        fontWeight: '700',
        fontSize: '$md',
        lineHeight: '140%',
      },
      span: {
        color: '$gray400',
        fontWeight: '400',
        fontSize: '$sm',
        lineHeight: '160%',
      },
    },
  },
})

export const Content = styled('p', {
  color: '$gray300',
  fontWeight: '400',
  fontSize: '$sm',
  lineHeight: '160%',
})
