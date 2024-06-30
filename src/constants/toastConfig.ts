import { Theme, ToastPosition, Bounce } from 'react-toastify';

export const toastOptions = {
  position: 'top-center' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light' as Theme,
  transition: Bounce
};
