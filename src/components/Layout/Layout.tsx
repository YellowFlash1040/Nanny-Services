import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader, Header } from '../../components';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <div id="modal"></div>
    </>
  );
};

export default Layout;
