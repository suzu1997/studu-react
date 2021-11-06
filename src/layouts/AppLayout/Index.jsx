import { Header } from 'src/layouts/AppLayout/Header';

export const AppLayout = (props) => {
  return (
    <div className='flex flex-col items-center min-h-screen mx-auto px-2 max-w-2xl'>
      <Header />
      {props.children}
    </div>
  );
};
