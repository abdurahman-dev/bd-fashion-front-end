import axios from 'axios';
import { axiosApi } from './urlConfig';

const token=document.cookie
const axiosInstance = axios.create({
  baseURL: axiosApi,
  timeout: 5000,
  headers: {
    Authorization: token||'',
  },
  withCredentials: true
});

export default axiosInstance;
