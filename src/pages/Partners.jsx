import React from 'react';

const Partners = () => {
  return (
    <div className="page-container partners-page">
      <section className="page-hero">
        <div className="container">
          <span className="course-badge">Integrations</span>
          <h1>Become a Partner</h1>
          <p className="lead">Join our ecosystem of prestigious universities, corporate trainers, and cultural institutions.</p>
        </div>
      </section>

      {/* NEW: White Section - Why Partner? */}
      <section className="section-white">
        <div className="container">
          <div className="grid grid-3">
             <div className="p-card premium-card" style={{textAlign: 'center'}}>
                <h3>Shared Vision</h3>
                <p style={{marginTop: '1rem'}}>Collaborate with a team that values cultural integrity and academic excellence above all else.</p>
             </div>
             <div className="p-card premium-card" style={{textAlign: 'center'}}>
                <h3>Global Scale</h3>
                <p style={{marginTop: '1rem'}}>Access our community of 10,000+ active French learners located in 50+ countries.</p>
             </div>
             <div className="p-card premium-card" style={{textAlign: 'center'}}>
                <h3>Premium Tech</h3>
                <p style={{marginTop: '1rem'}}>Integrate your services with our state-of-the-art 'Immersive Audio' learning platform.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="partner-tiers" style={{padding: '8rem 0'}}>
        <div className="container">
           <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
              <h2>Partnership Tiers</h2>
           </div>
           <div className="grid grid-2">
              <div className="tier-card premium-card" style={{borderLeft: '4px solid var(--primary-red)'}}>
                 <h4>Academic Institutions</h4>
                 <p style={{color: 'var(--text-grey)', marginTop: '1rem'}}>Customized curriculum integration and student exchange coordination for world-class universities.</p>
              </div>
              <div className="tier-card premium-card" style={{borderLeft: '4px solid var(--primary-red)'}}>
                 <h4>Corporate Training</h4>
                 <p style={{color: 'var(--text-grey)', marginTop: '1rem'}}>Tailored language programs for global companies looking to expand their presence in the Francophone world.</p>
              </div>
           </div>
        </div>
      </section>

      {/* NEW: White Section - Action */}
      <section className="section-white" style={{background: '#fcfcfc'}}>
         <div className="container" style={{textAlign: 'center'}}>
            <h2>Start a Collaboration</h2>
            <p className="lead" style={{margin: '1.5rem 0 3rem'}}>Ready to build the future of language education with us?</p>
            <button className="btn btn-red" style={{padding: '1rem 3rem'}}>Inquire as a Partner</button>
         </div>
      </section>
    </div>
  );
};

export default Partners;
