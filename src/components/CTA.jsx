import React from 'react'
import imgSpeak from '../assets/speak frech.png'
import './CTA.css';

const CTA = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-content">
          <h2 className="promo-title">Start speaking French today</h2>
          <p className="promo-subtitle">Your first lesson is free. No credit card required to begin.</p>
          <div className="promo-actions">
            <button className="btn btn-red">Begin</button>
            <button className="btn btn-outline">Browse</button>
          </div>
        </div>
        <div className="promo-image-large">
          <img src={imgSpeak} alt="Start speaking French" />
        </div>
      </div>
    </section>
  )
}

export default CTA
