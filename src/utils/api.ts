import { Movie, MovieDetail } from '../types/movie';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (): Promise<{ results: Movie[] }> => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
};

export const fetchMovieDetails = async (id: string): Promise<MovieDetail> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};

export const searchMovies = async (query: string): Promise<{ results: Movie[] }> => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return response.data;
};