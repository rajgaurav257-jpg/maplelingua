import React from 'react'
import imgScale1 from '../assets/1st immage started section.png'
import imgScale2 from '../assets/2st immage started section.png'
import imgScale3 from '../assets/3st immage started section.png'
import './Started.css';

const Started = () => {
  return (
    <section className="started-section">
      <div className="container">
        <div className="started-header">
          <p className="started-tag">Simple</p>
          <h2 className="started-title">Getting started takes minutes</h2>
          <p className="started-subtitle">Three straightforward steps separate you from fluency</p>
        </div>

        <div className="started-grid">
          <div className="started-card">
            <div className="started-card-image">
              <img src={imgScale1} alt="Sign up" />
            </div>
            <div className="started-card-content">
              <span className="step-tag">Step</span>
              <h3 className="step-title">Sign up here</h3>
              <p className="step-description">Create your account and tell us your level</p>
              <a href="#signup" className="step-link">
                Begin
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '6px'}}>
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="started-card">
            <div className="started-card-image">
              <img src={imgScale2} alt="Choose your instructor" />
            </div>
            <div className="started-card-content">
              <span className="step-tag">Next</span>
              <h3 className="step-title">Choose your instructor</h3>
              <p className="step-description">Browse profiles and select someone who matches your goals</p>
              <a href="#instructors" className="step-link">
                Select
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '6px'}}>
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="started-card started-card-wide">
            <div className="started-card-image-half">
              <img src={imgScale3} alt="Schedule lesson" />
            </div>
            <div className="started-card-content-half">
              <span className="step-tag">Final</span>
              <h3 className="step-title">Schedule your first lesson and start learning</h3>
              <p className="step-description">Your instructor will guide you through everything</p>
              <a href="#start" className="step-link">
                Start
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '6px'}}>
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Started
