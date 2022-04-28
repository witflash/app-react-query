import axiosInstance from 'axios';
import { toast } from 'react-toastify';

const axios = axiosInstance.create();

const handleSuccess = (response) => {
  console.log('Request SUCCESS');
  return response;
};

const handleError = (error) => {
  console.log(error);
  toast.error(error.response.data);
  return Promise.reject(error);
};

axios.interceptors.response.use(handleSuccess, handleError);

export default axios;
