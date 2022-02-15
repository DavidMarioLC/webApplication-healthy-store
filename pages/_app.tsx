import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StoreProvider } from '../context/storeContext';
import { AppProvider } from '../context/appContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </StoreProvider>
  );
}

export default MyApp;
