import axios from 'axios';
import { $auth } from '../store/auth/$auth';
import { HOST } from '../env';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? HOST || 'http://localhost:3000/'
    : 'https://api.widacki.me/';

export const API = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL,
});

const absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const isAbsoluteUrl = (url: string) => absUrlRegex.test(url);

API.interceptors.request.use(
  (request) => {
    const { token } = $auth.getState();

    if (request && token) {
      if (isAbsoluteUrl(request.url || '')) {
        return request;
      } else if (request.headers) {
        request.headers.Authorization = 'Bearer ' + token;
      }
    }
    return request;
  },
  (error) => error,
);

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  window.API = API;
}
