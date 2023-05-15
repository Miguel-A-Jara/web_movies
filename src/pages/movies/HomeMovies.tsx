// React
import { FormEvent, useEffect, useState } from 'react';

// Third Party
import { useDebounce } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';

// Projec
import { Movie } from '~/entities/movie';
import MainLayout from '~/components/MainLayout';
import Searchbar from '~/components/navbars/Searchbar';
import { nowPlayingToMovie } from '~/services/movies/moviesMappers';
import MovieGridDisplay from '~/components/movies/MovieGridDisplay';
import {
  nowPlayingService,
  searchMovieService,
} from '~/services/movies/moviesServices';
import CircularProgressIndicator from '~/components/loading/CircularProgressIndicator';

const HomeMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const nowPlaying = useQuery({
    enabled: debouncedValue.length === 0,
    queryKey: ['movies', 'all-playing'],
    queryFn: async () => await nowPlayingService(),
  });

  const searchedMovie = useQuery({
    enabled: debouncedValue.length > 0,
    queryKey: ['movies', 'all-playing', debouncedValue],
    queryFn: async () => await searchMovieService(debouncedValue),
  });

  useEffect(() => {
    if (debouncedValue.length > 0 && searchedMovie.data?.results) {
      const parsedMovies = searchedMovie.data.results.map((m) =>
        nowPlayingToMovie(m)
      );
      setMovies(parsedMovies);
    }

    if (debouncedValue.length === 0 && nowPlaying.data?.results) {
      const parsedMovies = nowPlaying.data.results.map((m) =>
        nowPlayingToMovie(m)
      );
      setMovies(parsedMovies);
    }
  }, [JSON.stringify(nowPlaying.data), JSON.stringify(searchedMovie.data)]);

  function handleOnSubmit(val: FormEvent<HTMLFormElement>) {
    val.preventDefault();
  }

  return (
    <MainLayout title='Películas'>
      <Searchbar
        value={searchValue}
        onSubmit={handleOnSubmit}
        onChange={(e) => setSearchValue(e)}
      />
      <MovieGridDisplay
        movies={movies}
        emptyPlaceholder={{
          show: movies.length === 0,
          element: <CircularProgressIndicator />,
        }}
      />
    </MainLayout>
  );
};

export default HomeMovies;
