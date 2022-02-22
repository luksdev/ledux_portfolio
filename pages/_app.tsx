import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
