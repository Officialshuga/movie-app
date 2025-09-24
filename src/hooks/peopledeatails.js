import { useState, useEffect, use } from "react";

const PopularPeopleDetails = (id) => {
    const [popularPeople, setPopularPeople] = useState([]);
    const [loading, setLoading] = useState(true);
   useEffect(()=>{
    const fetchpopularPeopleDetails = async ()=>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=d356c160f95581ec7f73e580ffb73eaf`);
            const data = await response.json();
            setPopularPeople(data);
            setLoading(false);
            console.log(data);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    fetchpopularPeopleDetails();
   },[id]);

    // useEffect(()=>{
    //     fetchpopularPeopleDetails();
    // },[id]);

    return{loading, popularPeople};
}

export default PopularPeopleDetails;