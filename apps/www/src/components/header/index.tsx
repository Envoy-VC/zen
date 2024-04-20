import { useLocation } from 'react-router-dom';

import { Logo } from '../icons';

const Header = () => {
  const { pathname } = useLocation();
  if (pathname === '/')
    return (
      <div className='border-b-2 hidden sm:flex'>
        <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-36 pb-24'>
          <div className='flex flex-row items-center gap-5'>
            <Logo size={160} />
            <div className='flex flex-col justify-start text-[2.75rem] font-bold leading-[1.05]'>
              <h1>Welcome to zen,</h1>
              <h1 className='text-[#71717A] dark:text-white'>
                a social network built <br />
                on AO Computer
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
