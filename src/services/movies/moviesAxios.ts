import axios from 'axios';

export const moviesAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_THE_MOVIEDB_API_KEY,
    language: 'es-MX',
  },
});
