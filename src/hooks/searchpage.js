// src/api/tmdb.js
const API_KEY = "d356c160f95581ec7f73e580ffb73eaf";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
};

// export const getMovieDetails = async (id) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//   if (!res.ok) throw new Error("Failed to fetch movie details");
//   return res.json();
// };
