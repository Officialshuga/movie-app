import React from "react";
import "./hero.css";
// import HeroImg from "/assets/waiter.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <img className="hero-img" src='./assets/waiter.png' alt="HERO IMAGE" />
      <div className="hero-section-texts">
        <h2>The Waiter</h2>
        <div className="hero-section-btn">
          <button>
            <a href="https://moviebox.ph/detail/the-waiter-gQ2Ngm21ks1?id=1222708246893527656&scene=&page_from=search_detail&type=/movie/detail&utm_source=h5seo_www.google.com">
              View Details
            </a>
          </button>
          <button> 
            <a href="https://fmoviesunblocked.net/spa/videoPlayPage/movies/the-waiter-gQ2Ngm21ks1?id=1222708246893527656&type=/movie/detail&lang=en">
              Watch Now
            </a>  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
