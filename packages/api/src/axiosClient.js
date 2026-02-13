import axios from 'axios';
import { handleApiError } from './errors.js';
import { session } from '../../auth/src/session.js';

const BASE_URL = import.meta.env?.VITE_API_BASE_URL || '/api';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = session?.getToken ? session.getToken() : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error);
  }
);
