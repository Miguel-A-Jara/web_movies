// Third Party
import { Link } from 'react-router-dom';
import { Star } from '@mui/icons-material';

// Project
import { Movie } from '~/entities/movie';
import AddMovieToFavorite from './AddMovieToFavorite';
import { MAIN_APP_ROUTES } from '~/config/router/mainRoutes';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const urlToMovie = `${MAIN_APP_ROUTES.MOVIE_INFO.base}/${movie.id}`;

  return (
    <div className='bg-indigo-600 rounded p-4 relative'>
      <div className='relative'>
        <AddMovieToFavorite movie={movie} />
        <Link to={urlToMovie}>
          <img
            className='rounded h-96 object-scale-down object-center mx-auto 
          hover:opacity-50 transition-all duration-300'
            src={movie.image}
          />
        </Link>
      </div>

      <hr className='mt-2 mb-4' />

      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-white hover:underline'>
          <Link to={urlToMovie}>{movie.title}</Link>
        </h3>
        <span className='text-white flex items-end'>
          {movie.voteAverage.toFixed(1)}
          <Star className='text-yellow-500' />
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
