import axios from 'axios';
import { axiosApi } from './urlConfig';


const axiosInstance = axios.create({
  baseURL: axiosApi,
  timeout: 1000,
  headers: {
    Authorization: '',
  },
});

export default axiosInstance;
