import { LoginBackground } from '~/assets';

const AuthPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='relative h-full w-full basis-1/2'>
        <img
          src={LoginBackground}
          alt='Background Image'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative flex h-full w-full basis-1/2 flex-col'>ada</div>
    </div>
  );
};

export default AuthPage;
