import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjMyMzYxY2E2ZmViZTQzOGE5OGM3YmQyODU3MDk3MyIsInN1YiI6IjY0OTljZGYyYjM0NDA5MDEzOTg1NmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.noujh3925jamJn7mF9RpSygXqaaI6zmGD6p385AGBAw',
  },
};

export const getTrending = async () => {
  const response = await axios.get('trending/all/day?', options);
  // console.log(response.data.results);
  return response.data.results;
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?query=${query}`, options);
// console.log(response.data.results);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?`, options);
 console.log(response.data);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits?`, options);
  // console.log(response.data.cast);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?`, options);
  // console.log(response?.data?.results);
  return response.data.results;
};
