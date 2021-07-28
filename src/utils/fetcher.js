export const fetcher = async (url) => {
  const response = await fetch(url);

  //ステータスコードが404のとき、response.okはfalseになる
  if (!response.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗しました。');
  }

  const json = await response.json();
  return json;
};