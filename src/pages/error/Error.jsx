import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'

const Error = () => {
    

  return (
    <div className='error-container'>
        <div className='error-content'> 
            <h1>404</h1>
            <h2>OOPS!!! PAGE NOT FOUND</h2>
            <p> The page your're Looking for Wasn't created </p>
            <Link to="/" className="home-button"> Go Back Home </Link>
        </div>
        <div className='error-image'> 
            <img src="/assets/404-error.jpg" alt='404 error'/>
        </div>
    </div>
  )
}

export default Error