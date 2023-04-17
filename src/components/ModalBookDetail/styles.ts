import { styled } from '../../../stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
  backdropFilter: 'blur(0.5rem)',
  display: 'flex',
  justifyContent: 'flex-end',
  fontFamily: 'Nunito, sans-serif',
})

export const Container = styled('div', {
  height: '100%',
  width: '100%',
  maxWidth: 660,
  backgroundColor: '$gray800',
  position: 'relative',
  padding: '64px 48px 48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: 24,
  right: 48,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray200',
})

export const AvalWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  flex: 1,
  overflow: 'hidden',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    span: {
      color: '$gray200',
      fontWeight: '400',
      fontSize: '$sm',
      lineHeight: '160%',
    },
    a: {
      color: '$purple100',
      fontWeight: '700',
      fontSize: '$md',
      lineHeight: '160%',
      cursor: 'pointer',

      '&:hover': {
        color: '$purple200',
        transition: 'color 0.2s',
      },
    },
  },
})

export const AvalContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: 8,
  },
})
