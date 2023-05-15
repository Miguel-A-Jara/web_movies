// Third Party
import { Route, Routes } from 'react-router-dom';

// Project
import { MAIN_APP_ROUTES } from './mainRoutes';
import { FavoriteMovies, HomeMovies, MovieInfo } from '~/pages';

const MainAppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_APP_ROUTES.HOME_MOVIES} element={<HomeMovies />} />
      <Route
        path={MAIN_APP_ROUTES.FAVORITE_MOVIES}
        element={<FavoriteMovies />}
      />
      <Route
        path={`${MAIN_APP_ROUTES.MOVIE_INFO.base}${MAIN_APP_ROUTES.MOVIE_INFO.id}`}
        element={<MovieInfo />}
      />
    </Routes>
  );
};

export default MainAppRouter;
