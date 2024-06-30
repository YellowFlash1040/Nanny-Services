import { Theme, ToastPosition, Bounce } from 'react-toastify';

const toastOptions = {
  position: 'top-center' as ToastPosition,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light' as Theme,
  transition: Bounce
};

export const toastOptionsSuccess = {
  ...toastOptions,
  autoClose: 2000
};

export const toastOptionsError = {
  ...toastOptions,
  autoClose: 4000
};
