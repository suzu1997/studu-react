import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? 'lightblue' : 'beige';
  }, [router.pathname]);

  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = bgColor;
    // アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);
};
