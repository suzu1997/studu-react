import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostListByUserId } from 'src/components/Post/PostListByUserId';
import { useFetch } from 'src/hooks/useFetch';
import { API_URL } from 'src/utils/const';

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1 className='font-bold text-3xl'>{data.name}</h1>
      <ul className='list-inside list-disc mt-6 text-xl'>
        <li>username: {data.username}</li>
        <li>email: {data.email}</li>
        <li>address: {data.address.city}</li>
        <li>phone number: {data.phone}</li>
        <li>website: {data.website}</li>
        <li>company: {data.company.name}</li>
      </ul>
      <h2 className='text-xl font-bold mt-6'>Posts list</h2>
      <div className='mt-4'>
        <PostListByUserId id={data.id} />
      </div>
    </div>
  );
};
