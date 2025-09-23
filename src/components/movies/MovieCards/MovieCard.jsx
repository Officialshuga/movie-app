import React from 'react'
import "./moviecard.css"
import { Link } from 'react-router-dom'

const MovieCard = ({id, title, image}) => {
  return (
    <div className='card'>
        <div className='card-image'> 
            <img src={image} alt={title}/>
        </div>
        <div className='card-info'>
            <Link to={`movie/${id}`}>
              <p>{title}</p>
            </Link> 
        </div>
    </div>
  )
}

export default MovieCard