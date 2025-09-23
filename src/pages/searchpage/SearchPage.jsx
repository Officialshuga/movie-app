import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./searchpage.css";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const SearchPage = () => {
  const { id } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [displaySearchResults, setDisplaySearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // 🔹 start with false
  const [hasSearched, setHasSearched] = useState(false);

  const searchMovies = async () => {
    if (!searchInput.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=d356c160f95581ec7f73e580ffb73eaf`
      );
      const data = await response.json();
      setDisplaySearchResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDisplaySearchResults([]);
    } finally {
      setLoading(false);
      setHasSearched(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="search-hero">
        <div className="test">
          <div className="words">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search-input">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="search"
              placeholder="Search for Movie, TV Show or Person..."
            />
            <button onClick={searchMovies}> Search </button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="loading-icon">
          <Loading />
        </div>
      )}

      {!loading && hasSearched && displaySearchResults.length === 0 && (
        <div className="no-results">
          ❌ No movies found. Try another search.
        </div>
      )}

      {!loading &&
        displaySearchResults
          .filter(
            (movie) =>
              movie.poster_path &&
              movie.title &&
              movie.overview &&
              movie.release_date
          )
          .map((movie) => (
            <div className="cards" key={movie.id}>
              <div className="card-imag">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="card-inf">
                <Link to={`/movie/${movie.id}`}>
                  <h1>{movie.title}</h1>
                  <p>{movie.release_date}</p>
                  <p>{movie.overview}</p>
                </Link>
              </div>
            </div>
          ))}
          
    </div>
  );
};

export default SearchPage;
