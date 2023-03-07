import axios from 'axios';

const KEY = '6e14e7f7adc702d050e16bca3452efd9';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export async function getTrending(page) {
  const { data } = await axios(`trending/movie/day`, {
    params: { api_key: KEY, page },
  });
  return data.results;
}

export async function getSearchMovies(query, page) {
  const { data } = await axios('search/movie', {
    params: { api_key: KEY, query, page },
  });
  return data.results;
}

export async function getMovieDetails(id) {
  const { data } = await axios(`movie/${id}`, {
    params: { api_key: KEY },
  });
  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios(`movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return data.cast;
}

export async function getMovieReviews(id) {
  const { data } = await axios(`movie/${id}/reviews`, {
    params: { api_key: KEY },
  });
  return data.results;
}
