import axios from 'axios';
import { API_SERVER_URL } from '../config';

const Axios = axios.create({
  baseURL: API_SERVER_URL,
  headers: {
    Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

Axios.interceptors.request.use((config) => {
  const { headers } = config;
  const token = localStorage.getItem('token') || '';
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    Authorization: `Bearer ${token}`,
    ...headers,
  };
  return config;
});

export default Axios;
