import Head from 'next/head';
import { PostByCommentId } from 'src/components/Post/PostByCommentId';
import { useComment } from 'src/hooks/useComment';

export const Comment = () => {
  const { error, comment, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <h1>{comment?.name}</h1>
      <p>{comment?.body}</p>
      <p>{`by ${comment?.email}`}</p>
      <h2>Post</h2>
      <PostByCommentId id={comment?.postId}/>
    </div>
  );
};
