import { useState, useEffect } from "react";


const PopularPeopleDetails = (id) => {
    const [popularPeople, setPopularPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   const fetchpopularPeopleDetails = async()=>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=d356c160f95581ec7f73e580ffb73eaf`);
            const data = await response.json();
            setPopularPeople(data.results);
            setLoading(false);
            console.log(data.results[0]);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchpopularPeopleDetails();
    },[id]);

    return{loading, popularPeople}
}

export default PopularPeopleDetails;