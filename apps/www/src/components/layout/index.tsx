import React from 'react';

import { Header, MobileNavbar, Navbar } from '~/components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex w-full flex-col font-regular'>
      <Navbar />
      <div className='flex w-full flex-col sm:mt-16'>
        <Header />
        {children}
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Layout;

export const withLayout = (Component: React.ReactNode): React.ReactNode => {
  return <Layout>{Component}</Layout>;
};
