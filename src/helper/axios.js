import axios from 'axios';
import { axiosApi } from './urlConfig';

// const token=document.cookie
const token=localStorage.getItem('token')
console.log(token);
const axiosInstance = axios.create({
  baseURL: axiosApi,
  timeout: 60000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: token||'',
  },
  withCredentials: true
});

export default axiosInstance;
