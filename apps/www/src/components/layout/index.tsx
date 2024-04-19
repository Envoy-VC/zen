import React from 'react';

import { Sidebar } from '~/components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex h-[400dvh] flex-row font-sans'>
      <div className='w-full basis-1/4'>
        <Sidebar />
      </div>
      <div className='w-full basis-1/2'>{children}</div>
      <div className='w-full basis-1/4 border-l'></div>
    </div>
  );
};

export default Layout;

export const withLayout = (Component: React.ReactNode): React.ReactNode => {
  return <Layout>{Component}</Layout>;
};
