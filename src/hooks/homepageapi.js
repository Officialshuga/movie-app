import { useState, useEffect } from "react";

const useMovies = () =>{
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true);
    const [popularTv, setPopularTv] = useState([]);

    //Fetching the data and storing in state
    const fetchpopularMovies = async()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d356c160f95581ec7f73e580ffb73eaf');
            const data = await response.json();
            setPopularMovies(data.results);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const fetchNowPlayingMovies = async()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d356c160f95581ec7f73e580ffb73eaf');
            const data = await response.json();
            setLoading(false);
            setNowPlayingMovies(data.results);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const fetchTopRatedMovies = async()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d356c160f95581ec7f73e580ffb73eaf');
            const data = await response.json();
            setTopRated(data.results);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };


     const fetchPopularTv = async()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=d356c160f95581ec7f73e580ffb73eaf');
            const data = await response.json();
            setPopularTv(data.results);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };



    useEffect(()=>{
        fetchpopularMovies();
        fetchNowPlayingMovies();
        fetchTopRatedMovies();
        fetchPopularTv();
    },[]);

    return { popularMovies, loading, nowPlayingMovies, topRated, popularTv}; 
   
};

export default useMovies;