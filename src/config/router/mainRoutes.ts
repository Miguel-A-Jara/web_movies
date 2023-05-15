export const MAIN_APP_ROUTES = {
  HOME_MOVIES: '/',
  FAVORITE_MOVIES: '/favorite-movies',
  MOVIE_INFO: { base: '/movie', id: '/:movieID' },
} as const;
