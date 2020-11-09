import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/core';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider resetCSS portalConfig={{ zIndex: 40 }}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
