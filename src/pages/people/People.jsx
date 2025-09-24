import './people.css';
import Footer from '../../components/footer/Footer';
import PopularPeople from '../../hooks/people';
import Navbar from '../../components/navbar/Navbar';
import ShimmerCard from '../../components/shimmer/Shimmer';
import { Link, useParams } from 'react-router-dom';
const People = () => {
    const {popularPeople, loading} = PopularPeople();
  return (
   <div>
    <Navbar/>
    {loading? (
            <div className='movie-list'> 
                {Array(6).fill("").map((_, index)=> <ShimmerCard key={index}/>)}
            </div>
          ): (
        <div className='people'>
            {popularPeople.map((person) => (
                <div key={person.id} className='people-card'>
                    <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                    <h3><Link to={`/peopledetails/${person.id}`}>{person.name}</Link></h3>
                </div>
            ))}
        </div>
         )}
        <Footer/>
   </div>
  )
}

export default People;