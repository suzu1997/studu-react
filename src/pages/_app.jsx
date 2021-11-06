import Head from 'next/head';
import { AppLayout } from 'src/layouts/AppLayout/Index';
import { fetcher } from 'src/utils/fetcher';
import { SWRConfig } from 'swr';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
