import React from 'react'
import './hero.css'
import HeroImg from "/assets/waiter.png";

const Hero = () => {
  return (
    <div className='hero-section' >
        <img className='hero-img' src={HeroImg} alt='HERO IMAGE'/>
      <div className='hero-section-texts'>
        <h2>The Waiter</h2>
        <div className='hero-section-btn'>
            <button> View Details </button>
            <button> Watch Movie </button>
        </div>
      </div>
    
    </div>
   
  )
}

export default Hero;