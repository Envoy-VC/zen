import { Link, useLocation } from 'react-router-dom';

import { cn } from '~/lib/utils';

import {
  Compass,
  Home,
  LucideIcon,
  MessageCircle,
  Plus,
  User,
} from 'lucide-react';

interface NavItemProps {
  Icon: LucideIcon;
  label: string;
  href: string;
}

const NavItem = ({ Icon, label, href }: NavItemProps) => {
  const location = useLocation();

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <Link
        to={href}
        className='flex h-full w-full flex-col items-center justify-center'
      >
        <Icon
          size={24}
          className={cn(
            location.pathname === href ? 'text-pink-500' : 'text-black'
          )}
        />
      </Link>
      <div
        className={cn(
          'h-1 w-[40%] rounded-t-xl',
          location.pathname === href ? 'bg-pink-500' : 'bg-transparent'
        )}
      ></div>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className='fixed bottom-0 flex h-[10dvh] w-full bg-white sm:hidden'>
      <div className='flex h-full w-full flex-row items-center justify-around'>
        <NavItem Icon={Home} label='Home' href='/' />
        <NavItem Icon={Compass} label='Explore' href='/explore' />
        <div className='mx-4 flex h-full max-h-10 w-full max-w-10 flex-col items-center justify-center rounded-full bg-pink-500'>
          <Plus size={24} className='text-white' />
        </div>
        <NavItem Icon={MessageCircle} label='Messages' href='/messages' />
        <NavItem Icon={User} label='Profile' href='/profile' />
      </div>
    </div>
  );
};

export default MobileNavbar;
