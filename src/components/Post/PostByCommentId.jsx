import Link from 'next/link';

import { usePost } from 'src/hooks/usePost';

export const PostByCommentId = (props) => {
  const { data, error } = usePost(props.id);

  if (!data && !error) {
    return <div>ローディング中...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Link href={`/posts/${data.id}`}>
        <a>{data.title}</a>
      </Link>
    </div>
  );
};
