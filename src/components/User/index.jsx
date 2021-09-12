import Head from 'next/head';
import { PostsByUserId } from 'src/components/Posts/PostsByUserId';
import { useUser } from 'src/hooks/useUser';

export const User = () => {
  const { error, user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h1 className='font-bold text-3xl'>{user.name}</h1>
      <ul className='list-inside list-disc mt-6 text-xl'>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
        <li>address: {user.address.city}</li>
        <li>phone number: {user.phone}</li>
        <li>website: {user.website}</li>
        <li>company: {user.company.name}</li>
      </ul>
      <h2 className='text-xl font-bold mt-6'>Posts list</h2>
      <div className='mt-4'>
        <PostsByUserId id={user.id} />
      </div>
    </div>
  );
};
