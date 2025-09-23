import React from "react";
import Navbar from "../../components/navbar/Navbar";
import moviedetailapi from "../../hooks/moviedetailapi";
import { useParams } from "react-router-dom";
import "./moviedetail.css";
import Loading from "../../components/loading/Loading";
import movieTrailer from "../../hooks/movieTrailer";


const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetail, loadingDetail } = moviedetailapi(id);
  const { trailerKey, loadingTrailer } = movieTrailer(id);
  const [showTrailer, setShowTrailer] = React.useState(false);


  if (loadingDetail) {
    return (
      <div className="loading-icon">
        <Loading />{" "}
      </div>
    );
  }

  if (!movieDetail) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="movie-detail-section">
        <div className="movie-detail-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
        <div className="movie-details-texts">
          <div className="movie-detail-first-text">
            <h2>
              {" "}
              {movieDetail.title}{" "}
              <span>({movieDetail.release_date.slice(0, 4)})</span>{" "}
            </h2>
            <span> Year: {movieDetail.release_date}, </span>
            <span> Country: {movieDetail.origin_country}, </span>
            <span>Genres:</span>
            {movieDetail.genres.map((genre, index) => {
              return (
                <span key={index}>
                  {" "}
                  {genre.name}
                  {index < movieDetail.genres.length - 1 ? ", " : ""}{" "}
                </span>
              );
            })}
            <span>
              {" "}
              Time: {Math.floor(movieDetail.runtime / 60)}h{" "}
              {movieDetail.runtime % 60}m
            </span>
          </div>
          <div className="movie-info">
            {trailerKey && !loadingTrailer ? (
              <button onClick={() => setShowTrailer(true)}>▶ Play Trailer</button>
            ) : (
              <p>No trailer available</p>
            )}
            <p id="tagline">{movieDetail.tagline}</p>
            <h3> Overview </h3>
            <p id="overview"> {movieDetail.overview}</p>
          </div>
        </div>
      </div>


            {/* Modal for trailer */}
      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <span className="close-btn" onClick={() => setShowTrailer(false)}>
              ✖
            </span>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default MovieDetails;
