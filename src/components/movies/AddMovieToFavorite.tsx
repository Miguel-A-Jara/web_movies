// Third Party
import { Favorite, Check } from '@mui/icons-material';

// Project
import { Movie } from '~/entities/movie';
import useFavoriteMovies from '~/config/hooks/useFavoriteMovies';

interface AddMovieToFavoriteProps {
  movie: Movie;
}

const AddMovieToFavorite = ({ movie }: AddMovieToFavoriteProps) => {
  const { toggleFavoriteMovie, isMovieInFavorites } = useFavoriteMovies();
  const isInFavorite = isMovieInFavorites(movie.id);

  return (
    <button
      onClick={() => toggleFavoriteMovie(movie)}
      className={`w-10 h-10 active:scale-90 absolute -top-2 right-8 z-10
        flex items-center justify-center rounded-full transition-all duration-300
        hover:scale-105
        ${
          isInFavorite
            ? 'bg-green-500/70 hover:bg-green-500'
            : 'bg-white/50 hover:bg-white'
        }
      `}
    >
      {isInFavorite ? (
        <Check className='text-white' />
      ) : (
        <Favorite className='text-red-500' />
      )}
    </button>
  );
};

export default AddMovieToFavorite;
