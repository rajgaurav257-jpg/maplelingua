import React from 'react'
import img1 from '../assets/1st image of WHY section.png'
import img2 from '../assets/2nd image of WHY section.png'
import img3 from '../assets/3rd image of WHY section.png'
import './Why.css';

const Why = () => {
  const cards = [
    {
      tag: 'Native',
      title: 'Learn from native French speakers',
      description: "Hear the language as it's truly spoken in daily life",
      linkText: 'Learn',
      image: img1
    },
    {
      tag: 'Interactive',
      title: 'Engage with lessons that demand your participation',
      description: 'Speaking, listening, and writing woven into every session',
      linkText: 'Engage',
      image: img2
    },
    {
      tag: 'Flexible',
      title: 'Study on your own schedule, not ours',
      description: 'Morning or midnight, weekday or weekend, you choose',
      linkText: 'Choose',
      image: img3
    }
  ]

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-header">
          <p className="why-tag">Why</p>
          <h2 className="why-title">What sets us apart</h2>
          <p className="why-subtitle">Real teachers from France and French-speaking regions worldwide</p>
        </div>

        <div className="why-grid">
          {cards.map((card, index) => (
            <div key={index} className="why-card">
              <div className="why-card-content">
                <span className="card-tag">{card.tag}</span>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a href={`#${card.linkText.toLowerCase()}`} className="card-link">
                  {card.linkText} 
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '6px'}}>
                    <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="why-card-image">
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why
