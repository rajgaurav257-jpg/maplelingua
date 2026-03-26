import React from 'react';

const Careers = () => {
  const jobs = [
    { title: 'French Language Instructor', team: 'Education', location: 'Delhi / Remote' },
    { title: 'Student Success Manager', team: 'Support', location: 'London / Remote' },
    { title: 'Curriculum Developer', team: 'Academic', location: 'Remote' },
    { title: 'Digital Marketing Specialist', team: 'Growth', location: 'Remote' }
  ];

  return (
    <div className="page-container careers-page">
      <section className="page-hero">
        <div className="container">
          <span className="course-badge">Hiring Now</span>
          <h1>Join the maplelingua Team</h1>
          <p className="lead">Work at the intersection of language, culture, and technology. Help us redefine how the world learns French.</p>
        </div>
      </section>

      {/* NEW: White Section - Our Culture */}
      <section className="section-white">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="culture-text">
              <h2>Our Culture</h2>
              <p style={{fontSize: '1.1rem', margin: '1.5rem 0'}}>We are a team of educators, technologists, and language enthusiasts. We value creativity, diverse perspectives, and a relentless commitment to student success.</p>
              <ul className="accent-list primary-dots">
                 <li>Inclusive, global team spanning 15+ countries.</li>
                 <li>Continuous professional development & training.</li>
                 <li>Passion for language and cultural exchange.</li>
              </ul>
            </div>
            <div className="culture-stats premium-card" style={{padding: '3rem', background: '#f8f9fa'}}>
               <div style={{marginBottom: '2rem'}}>
                  <h4 style={{color: '#1a1a1a'}}>Flexible Work</h4>
                  <p style={{color: '#666'}}>We embrace remote work and asynchronous collaboration.</p>
               </div>
               <div>
                  <h4 style={{color: '#1a1a1a'}}>Immersive Learning</h4>
                  <p style={{color: '#666'}}>Free language courses and cultural workshops for all employees.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="open-positions" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Open Positions</h2>
            <p className="lead">Find your next role with us.</p>
          </div>
          <div className="grid grid-1" style={{maxWidth: '1000px', margin: '0 auto', gap: '1.5rem'}}>
            {jobs.map((job, i) => (
              <div key={i} className="job-card premium-card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.5rem', color: '#fff'}}>{job.title}</h3>
                  <div style={{display: 'flex', gap: '1.5rem', color: 'var(--text-grey)', fontSize: '0.9rem', marginTop: '0.5rem'}}>
                    <span>{job.team}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="btn btn-red" style={{padding: '0.8rem 2rem'}}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: White Section - Benefits */}
      <section className="section-white" style={{background: '#fafafa'}}>
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
              <h2>Why You'll Love It Here</h2>
            </div>
            <div className="grid grid-3">
               <div className="benefit-card premium-card" style={{textAlign: 'center'}}>
                 <h4 style={{color: '#1a1a1a'}}>Comprehensive Healthcare</h4>
                 <p style={{color: '#666', marginTop: '1rem', fontSize: '0.9rem'}}>Full medical, dental, and vision coverage for you and your family.</p>
               </div>
               <div className="benefit-card premium-card" style={{textAlign: 'center'}}>
                 <h4 style={{color: '#1a1a1a'}}>Unlimited PTO</h4>
                 <p style={{color: '#666', marginTop: '1rem', fontSize: '0.9rem'}}>Take the time you need to recharge and see the world.</p>
               </div>
               <div className="benefit-card premium-card" style={{textAlign: 'center'}}>
                 <h4 style={{color: '#1a1a1a'}}>Home Office Stipend</h4>
                 <p style={{color: '#666', marginTop: '1rem', fontSize: '0.9rem'}}>We provide the budget for a premium remote setup.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Careers;
