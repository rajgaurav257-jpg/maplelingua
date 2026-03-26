import React from 'react';
import campusImg from '../assets/campus.png';
import './About.css';

const About = () => {
  const team = [
    { name: 'Dr. Marie Laurent', role: 'Academic Director', bio: 'Expert in applied linguistics with 15+ years experience.' },
    { name: 'Jean-Pierre Dubois', role: 'Senior Instructor', bio: 'Native Parisian with a passion for French literature.' },
    { name: 'Sophie Bernard', role: 'Culture Specialist', bio: 'Specializes in immersive cultural experiences and workshops.' }
  ];

  const milestones = [
    { year: '2015', event: 'Founded with a mission to bridge cultures through the French language.' },
    { year: '2018', event: 'Launched our global online learning platform.' },
    { year: '2021', event: 'Recognized as a leading French Language Provider.' },
    { year: '2024', event: 'Reached 10,000 successful student certifications.' }
  ];

  return (
    <div className="page-container about-page">
      <section className="page-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderBottom: 'none'
      }}>
        <div className="container">
          <span className="course-badge" style={{marginBottom: '1rem', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)'}}>established 2015</span>
          <h1 style={{color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>A Legacy of Excellence</h1>
          <p className="lead" style={{color: '#ddd'}}>Dedicated to bringing the sophistication and culture of the French language to students everywhere.</p>
        </div>
      </section>

      {/* NEW: White Section - Our History */}
      <section className="section-white">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="history-text">
              <h2>Our Journey</h2>
              <p className="lead" style={{textAlign: 'left', margin: '1rem 0 3rem'}}>How we became the world's most trusted name in French education.</p>
              <div className="timeline">
                {milestones.map((m, i) => (
                  <div key={i} className="timeline-item" style={{display: 'flex', gap: '2rem', marginBottom: '2rem'}}>
                    <div className="year" style={{color: 'var(--primary-red)', fontWeight: 'bold', fontSize: '1.2rem', minWidth: '60px'}}>{m.year}</div>
                    <div className="event" style={{color: '#444'}}>{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image-wrapper">
               <img src={campusImg} alt="Our Campus" style={{width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="meet-the-team" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Meet Our Expert Faculty</h2>
            <p className="lead">Our instructors aren't just teachers; they are cultural ambassadors who bring the French language to life.</p>
          </div>
          <div className="grid grid-3">
            {team.map((member, i) => (
              <div key={i} className="team-card premium-card" style={{textAlign: 'center'}}>
                <div className="team-avatar-placeholder" style={{width: '100px', height: '100px', background: '#333', borderRadius: '50%', margin: '0 auto 1.5rem', border: '3px solid var(--primary-red)'}}></div>
                <h4>{member.name}</h4>
                <p className="team-role" style={{color: 'var(--primary-red)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem'}}>{member.role}</p>
                <p style={{fontSize: '0.9rem', color: 'var(--text-grey)'}}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: White Section - Global Commitment */}
      <section className="section-white" style={{background: '#fcfcfc'}}>
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="values-image" style={{background: '#eee', height: '400px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
              [Graphic: Global Impact]
            </div>
            <div className="values-text" style={{paddingLeft: '3rem'}}>
              <h2>Our Global Commitment</h2>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>We are committed to accessibility, cultural integrity, and student success. Wherever you are, maplelingua is your home for French learning.</p>
              <ul className="accent-list primary-dots">
                <li>Supporting sustainable language preservation.</li>
                <li>Partnering with globally recognized institutions.</li>
                <li>Fostering a diverse community of 100+ nationalities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
