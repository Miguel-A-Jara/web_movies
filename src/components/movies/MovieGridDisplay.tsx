// Project
import MovieItem from './MovieItem';
import { Movie } from '~/entities/movie';
import CircularProgressIndicator from '~/components/loading/CircularProgressIndicator';

interface MovieGridDisplayProps {
  movies: Movie[];
}

const MovieGridDisplay = ({ movies }: MovieGridDisplayProps) => {
  if (movies.length === 0) return <CircularProgressIndicator />;

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
      {movies.map((m) => (
        <MovieItem key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default MovieGridDisplay;
