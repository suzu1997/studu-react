import { UserDetail } from 'src/components/User/UserDetail';
import { API_URL } from 'src/utils/const';
import { SWRConfig } from 'swr';

//getServerSidePropsを使うと、ブラウザ側ではなくサーバー側で動く
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  // ユーザー情報の取得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  // ユーザーの投稿の取得
  const POSTS_API_URL = `${API_URL}/users/${id}/posts`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        // APIを叩くときの初期値をuserDataにする
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId = (props) => {
  // propsにfallbackが渡ってくる
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <UserDetail />
    </SWRConfig>
  );
};

export default UsersId;
