import { useState, useEffect } from "react";
const moviedetailapi = (id) => {
    const [trailerKey, setTrailerKey] = useState(null);
    const [loadingTrailer, setLoadingTrailer] = useState(true);
    useEffect(()=>{
        const fetchMovieTrailer = async () =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d356c160f95581ec7f73e580ffb73eaf`);
                const data = await response.json();
                setTrailerKey(data);
                const trailer = data.results.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
                );
                if (trailer) setTrailerKey(trailer.key);
            }catch(error){
                console.error('Error fetching data:', error);
            }finally {
                setLoadingTrailer(false); 
            }
        };
        fetchMovieTrailer();
    }, [id]);

  return { trailerKey, loadingTrailer };
};

export default moviedetailapi