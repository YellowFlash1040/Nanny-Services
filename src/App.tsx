import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { HomePage, NanniesPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="nannies" element={<NanniesPage />}></Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

export default App;
