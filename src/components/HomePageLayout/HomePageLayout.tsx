import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader, HomePageHeader } from '../../components';

const HomePageLayout = () => {
  return (
    <>
      <HomePageHeader />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePageLayout;
