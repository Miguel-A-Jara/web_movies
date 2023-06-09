// Project
import { Movie } from '~/entities/movie';
import noPosterFound from '~/assets/no_poster.png';
import { MovieByID, NowPlayingMovie } from './moviesModel';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export function nowPlayingToMovie(nowPlayingRes: NowPlayingMovie): Movie {
  const movieImage = nowPlayingRes.poster_path
    ? `${IMAGE_BASE}${nowPlayingRes.poster_path}`
    : noPosterFound;

  const movie: Movie = {
    id: nowPlayingRes.id,
    title: nowPlayingRes.title,
    adult: nowPlayingRes.adult,
    voteAverage: nowPlayingRes.vote_average,
    description: nowPlayingRes.overview,
    image: movieImage,
  };

  return movie;
}

export function searchedMovieToMovie(searchedRes: NowPlayingMovie): Movie {
  const movieImage = searchedRes.poster_path
    ? `${IMAGE_BASE}${searchedRes.poster_path}`
    : noPosterFound;

  const movie: Movie = {
    id: searchedRes.id,
    title: searchedRes.title,
    adult: searchedRes.adult,
    voteAverage: searchedRes.vote_average,
    description: searchedRes.overview,
    image: movieImage,
  };

  return movie;
}

export function movieByIdToMovie(movieByIdResponse: MovieByID): Movie {
  const movieImage = movieByIdResponse.poster_path
    ? `${IMAGE_BASE}${movieByIdResponse.poster_path}`
    : noPosterFound;

  const movie: Movie = {
    id: movieByIdResponse.id,
    title: movieByIdResponse.title,
    adult: movieByIdResponse.adult,
    voteAverage: movieByIdResponse.vote_average,
    description: movieByIdResponse.overview ?? 'Descripción no disponible.',
    image: movieImage,
  };

  return movie;
}
