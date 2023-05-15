// Project
import { moviesAxios } from './moviesAxios';
import { MovieByID, NowPlaying } from './moviesModel';

export async function nowPlayingService() {
  const { data } = await moviesAxios.get<NowPlaying>('/movie/now_playing');
  return data;
}

export async function searchMovieService(query: string) {
  const { data } = await moviesAxios.get<NowPlaying>('/search/movie', {
    params: {
      query,
      include_adult: true,
    },
  });

  return data;
}

export async function movieByID(movieID: number | string) {
  const { data } = await moviesAxios.get<MovieByID>(`/movie/${movieID}`);

  return data;
}
