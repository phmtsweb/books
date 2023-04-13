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
