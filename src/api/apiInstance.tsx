import { AxiosInstance, axios } from '@/imports';

const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: parseInt(process.env.EXPO_PUBLIC_API_URL_TIMEOUT || '10000', 10), // timeout for api calls
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
