import { styled } from '../../../stitches.config'

export const Container = styled('aside', {
  display: 'flex',
  position: 'sticky',
  width: '100%',
  maxWidth: 308,
  top: '1.25rem',
  height: 'fit-content',
  marginTop: 146,
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: 'solid 1px $gray700',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'center',
})

export const UserInfoFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  strong: {
    color: '$gray100',
    fontWeight: '700',
    fontSize: '$xl',
    lineHeight: '140%',
  },
  span: {
    color: '$gray400',
    fontWeight: '400',
    fontSize: '$sm',
    lineHeight: '160%',
  },
})

export const Separator = styled('div', {
  width: 32,
  height: 4,
  backgroundImage: '$gradient-horizontal',
  borderRadius: '$full',
  margin: '$8 0',
})

export const UserEstatistics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5',
})

export const UserEstatisticsItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

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
      color: '$gray300',
      fontWeight: '400',
      fontSize: '$sm',
      lineHeight: '160%',
    },
  },
})
