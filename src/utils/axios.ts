import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/'
  : 'https://api.widacki.me/';

export const API = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL,
});
