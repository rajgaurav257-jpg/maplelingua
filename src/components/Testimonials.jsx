import React from 'react'
import avatarMarie from '../assets/avatar_marie.png'
import avatarJames from '../assets/avatar_james.png'
import avatarSofia from '../assets/avatar_sofia.png'
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Marie Dubois',
      role: 'Marketing Director',
      avatar: avatarMarie,
      text: 'Within three months I was holding conversations at dinner parties. The instructors made it feel natural, not forced.'
    },
    {
      name: 'James Chen',
      role: 'Software engineer, Singapore',
      avatar: avatarJames,
      text: 'I tried other apps for years. This is the first time I actually understood what people were saying.'
    },
    {
      name: 'Sofia Rossi',
      role: 'Nurse, Buenos Aires',
      avatar: avatarSofia,
      text: 'The flexibility saved me. I could study at midnight after my shifts and still make real progress.'
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Real voices</h2>
          <p className="testimonials-subtitle">Hear from students who found their fluency</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L9.8 5.5H15.5L10.9 9L12.6 14.5L8 11L3.4 14.5L5.1 9L0.5 5.5H6.2L8 0Z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <p className="author-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
