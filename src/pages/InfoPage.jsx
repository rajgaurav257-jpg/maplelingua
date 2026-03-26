import React from 'react';
import { useLocation } from 'react-router-dom';

const InfoPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const pageTitle = query.get('page') || 'Information';

  return (
    <div className="page-container info-page">
      <section className="page-hero">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p className="lead">Official documentation and information regarding {pageTitle} at maplelingua.</p>
        </div>
      </section>

      <section className="info-content">
        <div className="container" style={{maxWidth: '800px'}}>
          <article className="premium-card">
            <p>Welcome to the official <strong>{pageTitle}</strong> page. We are currently updating our extensive documentation to provide you with the most accurate and premium information possible.</p>
            <p style={{marginTop: '1.5rem'}}>At maplelingua, we prioritize transparency and excellence in all our dealings with students, partners, and the global French-speaking community.</p>
            
            <h3 style={{margin: '2rem 0 1rem'}}>What you'll find here</h3>
            <ul className="accent-list primary-dots">
              <li>Detailed guidelines and policy statements.</li>
              <li>Official procedures regarding {pageTitle.toLowerCase()}.</li>
              <li>Contact details for specific department inquiries.</li>
              <li>Latest updates and announcements.</li>
            </ul>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '15px'}}>
              <p>Need more specific help? Our team of academic advisors and support specialists is available 24/7 to assist you with any questions related to {pageTitle.toLowerCase()}.</p>
              <button className="btn btn-red" style={{marginTop: '1.5rem'}}>Contact Support</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
