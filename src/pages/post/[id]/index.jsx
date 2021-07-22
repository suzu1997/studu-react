import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from 'src/components/Header';
import styles from 'src/styles/Home.module.css';

const PostId = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostId;
