import { AppProps } from 'next/app';

import { globalStyles } from '../styles/globalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
