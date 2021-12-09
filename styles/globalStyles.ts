import { globalCss } from '.';

export const globalStyles = globalCss({
  ':root': {
    colorScheme: 'dark',
    fontSize: '62.5%',
    fontFamily: '$main',
    color: '$text',
    background: '$bg'
  },

  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
    WebkitTapHighlightColor: 'transparent'
  }
});
