import { NavLink } from 'react-router-dom';

import { cn } from '~/lib/utils';

import { Bell, Compass, Mail, Settings, Users } from 'lucide-react';

const Navigation = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      {NavItems.map((item) => (
        <NavLink
          key={item.title}
          to={item.href}
          className={({ isActive, isPending }) =>
            cn(
              'flex w-full max-w-xs flex-row items-center gap-2 rounded-2xl px-4 py-3 font-medium transition-all duration-300 ease-in-out hover:bg-neutral-200/40 dark:hover:bg-neutral-700/20',
              isPending
                ? 'pending'
                : isActive
                  ? 'bg-black text-white hover:bg-black/90 dark:bg-slate-50 dark:text-black hover:dark:bg-slate-200'
                  : ''
            )
          }
        >
          <item.Icon size={22} />
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

const NavItems = [
  {
    title: 'Home',
    Icon: Compass,
    href: '/',
  },
  {
    title: 'Notifications',
    Icon: Bell,
    href: '/notifications',
  },
  {
    title: 'Messages',
    Icon: Mail,
    href: '/messages',
  },
  {
    title: 'Discover',
    Icon: Users,
    href: '/discover',
  },
  {
    title: 'Settings',
    Icon: Settings,
    href: '/settings',
  },
];

export default Navigation;
