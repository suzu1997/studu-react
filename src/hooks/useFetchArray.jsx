import useSWRImutable from 'swr/immutable';

export const useFetchArray = (url) => {
  const { data, error } = useSWRImutable(url);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
