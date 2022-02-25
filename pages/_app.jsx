import Head from 'next/head';

import { AppProvider } from '../context/App';
import { AuthProvider } from '../context/AuthContext';

import GlobalStyle from '../styles/globals';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AuthProvider>
      <AppProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
