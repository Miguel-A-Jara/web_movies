// Project
import MainLayout from '~/components/MainLayout';
import MovieGridDisplay from '~/components/movies/MovieGridDisplay';
import useFavoriteMovies from '~/config/hooks/useFavoriteMovies';

const FavoriteMovies = () => {
  const { localMovies } = useFavoriteMovies();

  return (
    <MainLayout title='Tus favoritos'>
      <MovieGridDisplay
        emptyPlaceholder={{
          show: localMovies.length === 0,
          element: (
            <h1 className='text-center text-white text-3xl font-bold'>
              Agrega una película como favorita!
            </h1>
          ),
        }}
        movies={localMovies}
      />
    </MainLayout>
  );
};

export default FavoriteMovies;
