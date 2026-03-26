import React from 'react'
import imgNumbers1 from '../assets/1st image number that speacks them selfs.png'
import imgNumbers2 from '../assets/2st image number that speacks them selfs.png'
import imgNumbers3 from '../assets/3rd image numbers section.png'
import './Numbers.css';

const Numbers = () => {
  return (
    <section className="numbers-section">
      <div className="container">
        <div className="numbers-header">
          <div className="numbers-header-left">
            <p className="numbers-tag">Results</p>
            <h2 className="numbers-title">Numbers that speak for themselves</h2>
          </div>
          <div className="numbers-header-right">
            <p className="numbers-description">
              We've built something real across the globe. Thousands of students
              have found their voice in French, and they keep coming back. The
              proof is in the progress they make.
            </p>
            <div className="numbers-actions">
              <button className="btn btn-outline">Join</button>
              <button className="btn btn-link">
                Explore
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                  <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="numbers-grid">
          {/* Column 1: Tall Card */}
          <div className="numbers-card card-tall">
            <div className="card-stat">5000+</div>
            <div className="numbers-image-box" style={{ height: '200px', margin: '1.5rem 0' }}>
              <img src={imgNumbers3} alt="Diverse students" />
            </div>
            <div className="card-info">
              <h4>Students worldwide</h4>
              <p>Learning French across every continent</p>
            </div>
          </div>

          {/* Column 2: Image top, Card bottom */}
          <div className="numbers-col">
            <div className="numbers-image-box">
              <img src={imgNumbers1} alt="Community" />
            </div>
            <div className="numbers-card">
              <div className="card-stat">95%</div>
              <div className="card-info">
                <h4>Reach conversational fluency</h4>
                <p>Within six months of consistent study</p>
              </div>
            </div>
          </div>

          {/* Column 3: Card top, Image bottom */}
          <div className="numbers-col">
            <div className="numbers-card">
              <div className="card-stat">12+</div>
              <div className="card-info">
                <h4>Countries represented</h4>
                <p>From Tokyo to Toronto, we teach them all</p>
              </div>
            </div>
            <div className="numbers-image-box">
              <img src={imgNumbers2} alt="Global reach" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers
