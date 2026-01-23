import { toast, type ToastOptions } from 'react-toastify';
import style from './styles.module.css';

const defaultOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  className: style['custom-toast'],
};

export const showMessage = {
  success: (msg: string) => toast.success(msg, defaultOptions),
  error: (msg: string) => toast.error(msg, defaultOptions),
  warn: (msg: string) => toast.warn(msg, defaultOptions),
  warning: (msg: string) => toast.warning(msg, defaultOptions),
  info: (msg: string) => toast.info(msg, defaultOptions),
  dismiss: () => toast.dismiss(),
};
