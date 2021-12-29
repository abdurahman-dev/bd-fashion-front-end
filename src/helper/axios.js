import axios from 'axios';
import { axiosApi } from './urlConfig';


// const token=localStorage.getItem('token')
const axiosInstance = axios.create({
  baseURL: axiosApi,
  timeout: 60000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: localStorage.getItem('token')||'',
  },
  withCredentials: true
});

export default axiosInstance;
