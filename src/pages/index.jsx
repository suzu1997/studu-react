import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import styles from 'src/styles/Home.module.css';

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = 'lightblue';
    console.log('マウント時');
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
      console.log('アンマウント時');
    };
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>ボタン</a>
      <Main page='index' />
      <Footer />
    </div>
  );
}
