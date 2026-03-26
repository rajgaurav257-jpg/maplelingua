import React from 'react';

const Press = () => {
  return (
    <div className="page-container press-page">
      <section className="page-hero">
        <div className="container">
          <span className="course-badge">Newsroom</span>
          <h1>Press & Media</h1>
          <p className="lead">Latest updates, media assets, and company news from the heart of maplelingua.</p>
        </div>
      </section>

      {/* NEW: White Section - Recent News */}
      <section className="section-white">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Recent News</h2>
          </div>
          <div className="grid grid-2">
            <div className="news-item premium-card">
              <span style={{color: 'var(--primary-red)', fontWeight: 'bold'}}>Mar 10, 2025</span>
              <h3>maplelingua Expands to North America</h3>
              <p style={{marginTop: '1rem'}}>Announcing our new strategic partnership with leading Canadian educational institutions.</p>
            </div>
            <div className="news-item premium-card">
              <span style={{color: 'var(--primary-red)', fontWeight: 'bold'}}>Feb 25, 2025</span>
              <h3>Awarded "Best Language App 2024"</h3>
              <p style={{marginTop: '1rem'}}>Recognized for our innovative 'Immersive Audio' technology and student-first approach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="media-assets" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Brand Assets</h2>
            <p className="lead">Official logos and photography for media use.</p>
          </div>
          <div className="grid grid-3">
             <div className="asset-card premium-card" style={{textAlign: 'center'}}>
                <div style={{height: '100px', background: '#333', borderRadius: '12px', marginBottom: '1.5rem'}}></div>
                <h4>Logo Pack</h4>
                <button className="btn btn-red" style={{marginTop: '1rem'}}>Download .ZIP</button>
             </div>
             <div className="asset-card premium-card" style={{textAlign: 'center'}}>
                <div style={{height: '100px', background: '#333', borderRadius: '12px', marginBottom: '1.5rem'}}></div>
                <h4>Campus Photos</h4>
                <button className="btn btn-red" style={{marginTop: '1rem'}}>Download .JPG</button>
             </div>
             <div className="asset-card premium-card" style={{textAlign: 'center'}}>
                <div style={{height: '100px', background: '#333', borderRadius: '12px', marginBottom: '1.5rem'}}></div>
                <h4>Leadership Bios</h4>
                <button className="btn btn-red" style={{marginTop: '1rem'}}>Download .PDF</button>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: White Section - Contact */}
      <section className="section-white" style={{background: '#fcfcfc'}}>
         <div className="container" style={{textAlign: 'center'}}>
            <h2>Media Inquiries</h2>
            <p className="lead" style={{margin: '1.5rem 0 3rem'}}>For interview requests or additional information, please contact our PR team.</p>
            <div className="premium-card" style={{display: 'inline-block', padding: '2rem 4rem'}}>
               <p style={{fontWeight: 'bold', fontSize: '1.2rem', color: '#1a1a1a'}}>press@maplelingua.com</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Press;
