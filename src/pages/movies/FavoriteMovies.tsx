// Project
import MainLayout from '~/components/MainLayout';
import MovieGridDisplay from '~/components/movies/MovieGridDisplay';
import useFavoriteMovies from '~/config/hooks/useFavoriteMovies';

const FavoriteMovies = () => {
  const { localMovies } = useFavoriteMovies();

  return (
    <MainLayout title='Tus favoritos'>
      <MovieGridDisplay movies={localMovies} />
    </MainLayout>
  );
};

export default FavoriteMovies;
