import React from 'react'
import { useParams } from 'react-router-dom'
import PopularPeopleDetails from '../../hooks/peopledeatails';
import './peopledeatails.css'
import Loading from '../../components/loading/Loading';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const peopleDetails = () => {
   const { id } = useParams();
  const {popularPeople, Loading} = PopularPeopleDetails(id);
  return (
    <div>
      <Navbar/>
      <div className='peopleDetails'> 
        <div className='movie-detail-image'>
          {Loading ? <Loading/> : <img src={`https://image.tmdb.org/t/p/w500${popularPeople.profile_path}`} alt={popularPeople.name} />}
        </div>
        {Loading ? <Loading/> : 
        <div  className='peopleDetailsInfo'>
          <h2>{popularPeople.name}</h2>
          <p>Birthday: {popularPeople.birthday}</p>
          <p>Place of Birth: {popularPeople.place_of_birth}</p>
          <p>Biography: {popularPeople.biography}</p>
        </div>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default peopleDetails