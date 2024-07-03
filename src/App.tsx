import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import { Layout, PageLoader } from './components';
import { changeAppTheme } from './helpers';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const App = () => {
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') || '"Red"');
    changeAppTheme(theme);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route path="nannies" element={<NanniesPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};

export default App;
