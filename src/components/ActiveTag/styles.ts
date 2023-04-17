import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  cursor: 'pointer',
  padding: '$1 $4',
  variants: {
    active: {
      true: {
        backgroundColor: '$purple200',
        color: '$gray100',
        border: 'solid 1px $purple200',
      },
      false: {
        backgroundColor: 'transparent',
        color: '$purple100',
        border: 'solid 1px $purple100',
      },
    },
  },
})
