import React from 'react';
import type { AppProps } from 'next/app';

import 'styles/reset.css';
import 'styles/common.css';
import 'styles/login.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
