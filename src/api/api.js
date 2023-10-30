import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'acf0af182bd80fd1b8fe4238ec11e366';

async function fetchWithError(url = '', config = {}) {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingMovies() {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  return fetchWithError(url);
}

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  return fetchWithError(url);
}

export async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetchWithError(url);
}

export async function getMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetchWithError(url);
}

export async function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetchWithError(url);
}
