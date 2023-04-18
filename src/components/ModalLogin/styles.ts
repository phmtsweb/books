import { styled } from '../../../stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 105,
  backdropFilter: 'blur(0.5rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Container = styled('div', {
  backgroundColor: '$gray700',
  width: '100%',
  maxWidth: 516,
  padding: '56px 72px',
  height: 337,
  position: 'relative',
  borderRadius: 12,
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray400',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  h3: {
    textAlign: 'center',
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '700',
    lineHeight: '140%',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  height: 72,
  backgroundColor: '#252D4A',
  gap: '$5',
  img: {
    width: 32,
    height: 32,
  },
  span: {
    fontSize: '$lg',
    fontWeight: '700',
    lineHeight: '160%',
    color: '$gray200',
  },
})
