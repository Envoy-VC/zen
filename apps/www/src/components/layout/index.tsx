import React from 'react';

import { Sidebar } from '~/components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex h-[400dvh] flex-row font-sans'>
      <div className='w-full basis-1/4'>
        <Sidebar />
      </div>
      <div className='w-full basis-1/2'>{children}</div>
      <div className='w-full basis-1/4'></div>
    </div>
  );
};

export default Layout;
