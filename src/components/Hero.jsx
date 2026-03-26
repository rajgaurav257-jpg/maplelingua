import React from 'react'
import heroImg from '../assets/herosection.png'
import './Hero.css';

const Hero = () => {
  return (
    <main className="container hero-wrapper">
      <div className="hero-card">
        <div className="hero-left">
          <h1>Learn French<br />from anywhere<br />in the world</h1>
          
          <p className="hero-subtext">
            Master the language of diplomacy and culture with Global 
            French Academy. Our instructors bring the essence of France to 
            your screen, no matter where you live.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-red">Start</button>
            <button className="btn btn-outline">Explore</button>
          </div>
        </div>
        
        <div className="hero-right">
          <img src={heroImg} alt="Learn French" />
        </div>
      </div>
    </main>
  )
}

export default Hero
