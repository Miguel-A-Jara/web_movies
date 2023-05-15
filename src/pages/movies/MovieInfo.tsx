// React
import { useEffect, useState } from 'react';

// Third Party
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Project
import { Movie } from '~/entities/movie';
import MainLayout from '~/components/MainLayout';
import { movieByID } from '~/services/movies/moviesServices';
import { MAIN_APP_ROUTES } from '~/config/router/mainRoutes';
import { movieByIdToMovie } from '~/services/movies/moviesMappers';
import CircularProgressIndicator from '~/components/loading/CircularProgressIndicator';
import { Star } from '@mui/icons-material';

const MovieInfo = () => {
  const navigate = useNavigate();
  const { movieID } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);

  const fetchedMovie = useQuery({
    enabled: !!movieID,
    queryKey: ['movie', movieID],
    // Here WE KNOW we have an ID, because the query only gets called
    // when movieID is truthy.
    queryFn: async () => await movieByID(movieID ?? 0),
  });

  useEffect(() => {
    if (!fetchedMovie.data) return;

    if (!movieID || fetchedMovie.error) {
      navigate(MAIN_APP_ROUTES.HOME_MOVIES, { replace: true });
      return;
    }

    setMovie(movieByIdToMovie(fetchedMovie.data));
  }, [movieID, fetchedMovie.error, fetchedMovie.data]);

  if (!movie) {
    return (
      <MainLayout title='Cargando...'>
        <CircularProgressIndicator />
      </MainLayout>
    );
  }

  return (
    <MainLayout title={movie.title}>
      <div className='grid grid-cols-4 gap-4 p-2 md:p-8'>
        <div className='col-span-4 md:col-span-3 bg-indigo-500/50 p-2 md:p-4 rounded text-white flex items-center'>
          <h2 className='md:text-3xl'>{movie.title}</h2>
          <span className='flex items-center ms-auto gap-1'>
            <span className='font-bold md:text-xl'>
              {movie.voteAverage.toFixed(1)} / 10
            </span>
            <Star className='text-yellow-500' />
          </span>
        </div>

        <div className='col-span-4 md:col-span-1 row-span-4 bg-indigo-500/50 flex items-center justify-center p-4 md:p-8 rounded'>
          <img className='rounded max-h-96' src={movie.image} />
        </div>

        <div className='col-span-4 md:col-span-3 row-span-3 bg-indigo-500/50 p-2 md:p-4 rounded text-white font-light text-xl'>
          <p className='text-justify'>{movie.description}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MovieInfo;
