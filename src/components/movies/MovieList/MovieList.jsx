import React, {useEffect, useState} from 'react'
import useMovies from '../../../hooks/homepageapi';
import MovieCard from '../MovieCards/MovieCard';
import "./movielist.css"
import ShimmerCard from '../../shimmer/Shimmer';

const MovieList = () => {
    const {popularMovies, nowPlayingMovies, loading, topRated, popularTv} = useMovies();      //DESTRUCTURING



  return (
    <div className='movies'>
      <div className='first-movie-row'>
          <h2>Popular movies</h2>
          {/* show SHIMMER COMPONENT */}
          {loading? (
            <div className='movie-list'> 
                {Array(6).fill("").map((_, index)=> <ShimmerCard key={index}/>)}
            </div>
          ): (
          <div className='movie-list'>
              {popularMovies.map((movie) => {
                return (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title || movie.original_name}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                );
              })}
          </div>
          )}
      </div>



      {/* SECOND MOVIE ROW */}
      <div className='first-movie-row'>
          <h2>Upcoming</h2>
          {/* show SHIMMER COMPONENT */}
          {loading? (
            <div className='movie-list'> 
                {Array(6).fill("").map((_, index)=> <ShimmerCard key={index}/>)}
            </div>
          ): (
          <div className='movie-list'>
              {nowPlayingMovies.map((movie) => {
                return (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title || movie.original_name}
                    //image={movie.image}
                    //real API CALLING
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                );
              })}
          </div>
          )}
      </div>



      {/* Third MOVIE ROW */}
      <div className='first-movie-row'>
          <h2>Top Rated</h2>
          {/* show SHIMMER COMPONENT */}
          {loading? (
            <div className='movie-list'> 
                {Array(6).fill("").map((_, index)=> <ShimmerCard key={index}/>)}
            </div>
          ): (
          <div className='movie-list'>
              {topRated.map((movie) => {
                return (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title || movie.original_name}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                );
              })}
          </div>
          )}
      </div>



      <div className='first-movie-row'>
          <h2>Popular Tv</h2>
          {/* show SHIMMER COMPONENT */}
          {loading? (
            <div className='movie-list'> 
                {Array(6).fill("").map((_, index)=> <ShimmerCard key={index}/>)}
            </div>
          ): (
          <div className='movie-list'>
              {popularTv.map((movie) => {
                return (
                  <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title || movie.original_name}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                );
              })}
          </div>
          )}
      </div>
    </div>
  )
}

export default MovieList