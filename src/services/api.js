import axios from "axios";

import { BASE_URL, AUTH_TOKEN } from "./constants";

const options = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return data;
};

const fetchMoviesByTitle = async (title, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${title}&include_adult=false&language=en-US&page=${page}}`,
    options
  );

  return data;
};

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

export default {
  fetchTrendingMovies,
  fetchMoviesByTitle,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchMovieCast,
};
