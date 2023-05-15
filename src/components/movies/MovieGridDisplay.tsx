// Project
import MovieItem from './MovieItem';
import { Movie } from '~/entities/movie';

interface MovieGridDisplayProps {
  movies: Movie[];
  emptyPlaceholder: { show: boolean; element: JSX.Element };
}

const MovieGridDisplay = ({
  movies,
  emptyPlaceholder,
}: MovieGridDisplayProps) => {
  if (emptyPlaceholder.show) return emptyPlaceholder.element;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
      {movies.map((m) => (
        <MovieItem key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default MovieGridDisplay;
