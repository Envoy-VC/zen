import React from 'react';

import { Header, MobileNavbar, Navbar, Sidebar } from '~/components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='font-regular flex w-full flex-col'>
      <Navbar />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-row mb-[10dvh] sm:mb-0'>
        <div className='w-full basis-[100%] px-2 lg:basis-2/3'>{children}</div>
        <div className='hidden w-full lg:flex lg:basis-1/3'>
          <Sidebar />
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Layout;

export const withLayout = (Component: React.ReactNode): React.ReactNode => {
  return <Layout>{Component}</Layout>;
};
