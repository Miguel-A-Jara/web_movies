// Project
import { NowPlaying } from './moviesModel';
import { moviesAxios } from './moviesAxios';

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
