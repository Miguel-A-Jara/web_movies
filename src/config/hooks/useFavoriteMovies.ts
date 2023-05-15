// Third Party
import { useLocalStorage } from 'usehooks-ts';

// Project
import { Movie } from '~/entities/movie';

const useFavoriteMovies = () => {
  const [localMovies, setLocalMovies] = useLocalStorage<Movie[]>(
    'localMovies',
    []
  );

  function isMovieInFavorites(movieID: number) {
    return localMovies.some((m) => m.id === movieID);
  }

  function toggleFavoriteMovie(movie: Movie) {
    let updatedMovies: Movie[] = [];

    const isInFavorite = isMovieInFavorites(movie.id);

    if (isInFavorite)
      updatedMovies = localMovies.filter((m) => m.id != movie.id);
    else updatedMovies = [...localMovies, movie];

    setLocalMovies(updatedMovies);
  }

  return { toggleFavoriteMovie, isMovieInFavorites, localMovies };
};

export default useFavoriteMovies;
