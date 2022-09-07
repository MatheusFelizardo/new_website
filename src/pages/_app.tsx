import {AppProps} from 'next/app';
import React from 'react';
import '../styles/global.scss';
import '../styles/nprogress.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
