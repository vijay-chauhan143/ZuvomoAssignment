import { create } from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const api = create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(error),
);

export default api;
