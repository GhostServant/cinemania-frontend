import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const propertiesToast = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showSuccessMessage = (message) => {
  toast.success(message, propertiesToast);
};

export const showErrorMessage = (message) => {
  toast.error(message, propertiesToast);
};
