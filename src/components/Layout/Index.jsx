export const Layout = (props) => {
  return (
    <div className='flex flex-col items-center min-h-screen mx-auto px-2 max-w-2xl'>{props.children}</div>
  );
};