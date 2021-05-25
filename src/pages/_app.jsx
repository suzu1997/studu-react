import Head from 'next/head';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import 'src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const counter= useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}

export default MyApp;
