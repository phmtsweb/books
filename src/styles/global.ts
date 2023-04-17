import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: '$gray800',
    color: '$gray200',

    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: '$gray800',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$gray600',
      borderRadius: '$full',
      border: 'none',
    },
  },
  'input, select, textarea': {
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
  button: {
    cursor: 'pointer',
    border: 'none',

    '&:hover': {
      filter: 'brightness(0.9)',
      transition: 'filter 0.2s',
    },
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
