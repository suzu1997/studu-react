import Head from 'next/head';
import { PostByCommentId } from 'src/components/Post/PostByCommentId';
import { useComment } from 'src/hooks/useComment';

export const Comment = () => {
  const { error, comment, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <div className='text-lg'>{comment?.name} ({comment?.email})</div>
      <h1 className='text-3xl font-bold'>{comment?.body}</h1>
      <h2 className='text-xl font-bold mt-10'>Post</h2>
      <div className='mt-2'>
        <PostByCommentId id={comment?.postId}/>
      </div>
    </div>
  );
};
