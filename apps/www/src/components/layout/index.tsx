import React from 'react';

import { Header, Navbar, Sidebar } from '~/components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='font-regular flex w-full flex-col'>
      <Navbar />
      <Header />
      <div className='flex w-full flex-row gap-2'>
        <div className='basis-2/3'>{children}</div>
        <div className='basis-1/3'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;

export const withLayout = (Component: React.ReactNode): React.ReactNode => {
  return <Layout>{Component}</Layout>;
};
