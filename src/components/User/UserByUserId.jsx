import { API_URL } from 'src/utils/const';
import useSWR from 'swr';

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className='text-lg'>Created By {data?.name}</div>;
};
