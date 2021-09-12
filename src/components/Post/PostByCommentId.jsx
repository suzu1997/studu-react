import Link from 'next/link';

import { usePost } from 'src/hooks/usePost';

export const PostByCommentId = (props) => {
  const { data, error } = usePost(props.id);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Link href={`/posts/${data.id}`}>
        <a className='text-lg hover:text-blue-500'>{data.title}</a>
      </Link>
    </div>
  );
};
