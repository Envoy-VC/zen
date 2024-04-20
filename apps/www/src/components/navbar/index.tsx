import { Link, useLocation } from 'react-router-dom';

import { Search } from 'lucide-react';

import { Input } from '~/components/ui/input';

import { Logo } from '../icons';
import { Button } from '../ui/button';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className='fixed left-0 top-0 z-[2] hidden w-full border-b-2 bg-white dark:bg-black sm:flex'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between gap-2 px-8 py-3'>
        <div className='flex flex-row items-center gap-4'>
          <Logo size={38} />

          <div className='flex flex-row items-center gap-1 rounded-xl border px-3 py-2'>
            <Search size={20} className='text-neutral-500' />
            <Input
              placeholder='Search...'
              className='h-5 w-full max-w-[8rem] border-none ring-0'
            />
          </div>
          {NavItems.map((item) => (
            <Button
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className='h-9 !text-sm font-medium'
              key={item.title}
              asChild
            >
              <Link to={item.href}>{item.title}</Link>
            </Button>
          ))}
        </div>
        <div className='flex flex-row items-center gap-3'>
          <Button
            variant='ghost'
            className='h-9 rounded-full border border-black text-base font-bold dark:border-white'
          >
            Signup
          </Button>
          <Button className='flex h-9 items-center gap-2 rounded-full text-base'>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

const NavItems = [
  {
    title: 'Home',
    href: '/',
  },

  {
    title: 'Discover',
    href: '/discover',
  },
];

export default Navbar;
