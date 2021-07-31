import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Posts } from 'src/components/Posts';
import styles from 'src/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
