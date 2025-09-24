import { useState, useEffect } from "react";


const PopularPeople = () => {
    const [popularPeople, setPopularPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   const fetchpopularPeople = async()=>{
        try{
            const response = await fetch('https://api.themoviedb.org/3/trending/person/week?api_key=d356c160f95581ec7f73e580ffb73eaf');
            const data = await response.json();
            setPopularPeople(data.results);
            setLoading(false);
            console.log(data.results);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchpopularPeople();
    },[]);

    return{loading, popularPeople}
}

export default PopularPeople;