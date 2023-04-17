import Image from 'next/image'
import { styled } from '../../../stitches.config'

export const AvatarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: '$gradient-vertical',
  borderRadius: '$full',
  variants: {
    size: {
      small: {
        width: 34,
        height: 34,
      },
      medium: {
        width: 42,
        height: 42,
      },
      large: {
        width: 58,
        height: 58,
      },
    },
  },
})

export const AvatarImage = styled(Image, {
  borderRadius: '$full',
  variants: {
    size: {
      small: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 40,
        height: 40,
      },
      large: {
        width: 56,
        height: 56,
      },
    },
  },
})
