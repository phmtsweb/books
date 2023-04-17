import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const StyledActiveLink = styled(Link, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '700',
  lineHeight: '160%',
  fontSize: '$md',
  gap: '$3',
  height: 42,
  variants: {
    active: {
      true: {
        color: '$gray100',
        '&::before': {
          content: '""',
          position: 'absolute',
          height: 24,
          width: 4,
          backgroundImage: '$gradient-vertical',
          borderRadius: '$full',
          zIndex: 1,
          left: -16,
        },
        svg: {
          color: '$gray100',
        },
      },
      false: {
        color: '$gray400',

        '&:hover': {
          color: '$gray100',
        },
      },
    },
  },
})
