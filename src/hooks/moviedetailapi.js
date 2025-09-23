import { useState, useEffect } from "react";
const moviedetailapi = (id) => {
    const [movieDetail, setMovieDetail] = useState([]);
    const [loadingDetail, setLoadingDetail] = useState(true);
    useEffect(()=>{
        const fetchMovieDeatils = async ()=>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d356c160f95581ec7f73e580ffb73eaf`);
                const data = await response.json();
                setMovieDetail(data);
            }catch(error){
                console.error('Error fetching data:', error);
            }finally {
                setLoadingDetail(false); 
            }
        };
        fetchMovieDeatils();
    }, [id]);

    return {movieDetail, loadingDetail};
};

export default moviedetailapi