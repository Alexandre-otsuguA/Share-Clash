import { createStitches } from '@stitches/react';

export const { getCssText, globalCss, styled, css, config } = createStitches({
  theme: {
    colors: {
      text: '#F0F6FC',
      clashroyale: '#448aff',
      bg: '#161B22'
    },
    fonts: {
      main: `'Poppins', sans-serif`
    }
  }
});
