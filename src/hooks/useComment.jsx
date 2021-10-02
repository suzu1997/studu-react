import { useRouter } from 'next/router';
import { API_URL } from 'src/utils/const';
import useSWR from 'swr';

export const useComment = () => {
  const router = useRouter();
  
  const { data: comment, error: commentError } = useSWR(
    router.query.id
      ? `${API_URL}/comments/${router.query.id}`
      : null
  );

  return {
    comment,
    error: commentError,
    isLoading: !comment && !commentError
  };
};
