import useSWRImmutable from 'swr';

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
