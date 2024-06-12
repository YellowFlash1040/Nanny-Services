import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="nannies" element={<NanniesPage />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

export default App;
