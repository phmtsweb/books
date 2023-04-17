import { styled } from '../../../stitches.config'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  maxWidth: 324,
  width: '100%',
  height: 130,
  backgroundColor: '$gray700',
  padding: '$4 $5',
  borderRadius: '$md',
  gap: '$5',
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
      },
      false: {
        curson: 'default',
      },
    },
  },
})

export const StyledImage = styled(Image, {
  borderRadius: '$sm',
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookInfoHeader = styled('div', {
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
})
