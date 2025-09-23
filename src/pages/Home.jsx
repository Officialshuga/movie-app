import React from 'react'
import Navbar from '../components/navbar/Navbar'
import MovieList from '../components/movies/MovieList/MovieList'
import Hero from "../components/hero-section/Hero"
import Footer from "../components/footer/Footer"
const Home = () => {
  return (
    <div>
     <Navbar/>
     <Hero />
     <MovieList />
     <Footer /> 
    </div>
  )
}

export default Home