import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { HomePageLayout, Layout } from './components';
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
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="nannies" element={<NanniesPage />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

export default App;
