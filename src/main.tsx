import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './context';
import App from './App.tsx';

import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
