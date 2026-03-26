import React from 'react';
import { Link } from 'react-router-dom';

const CourseA1 = () => {
  return (
    <div className="page-container course-a1-page">
      <section className="page-hero" style={{padding: '8rem 0 6rem', background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80") center/cover'}}>
        <div className="container">
          <span className="course-badge" style={{background: 'var(--primary-red)'}}>Foundation Level</span>
          <h1 style={{fontSize: '4.5rem', marginBottom: '1.5rem'}}>A1 - Beginner French</h1>
          <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>The starting point for your French journey. No prior knowledge required. Build your foundation with immersive, interactive learning.</p>
          
          <div className="course-quick-stats" style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span style={{color: '#fff', opacity: 0.7}}>Duration: </span>10 Weeks
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span style={{color: '#fff', opacity: 0.7}}>Frequency: </span>2x Weekly
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span style={{color: '#fff', opacity: 0.7}}>Price: </span>$199
             </div>
          </div>
        </div>
      </section>

      {/* A1 Facility: Phonetic Lab Integration */}
      <section className="facility-section section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <div className="grid grid-2" style={{alignItems: 'center'}}>
               <div className="facility-image">
                  <div className="premium-card" style={{height: '400px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
                     <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                     </svg>
                     <div style={{position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
                        <div style={{fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary-red)'}}>EXCLUSIVE A1 FACILITY</div>
                        <h4 style={{margin: '5px 0'}}>Real-time Phonetics Lab</h4>
                     </div>
                  </div>
               </div>
               <div className="facility-text" style={{paddingLeft: '3rem'}}>
                  <h2>Master the French Accent</h2>
                  <p className="lead">At the A1 level, pronunciation is everything. Our unique Phonetics Lab provides real-time AI feedback on your nasal vowels and silent letters.</p>
                  <ul style={{listCompare: 'none', padding: 0, marginTop: '2rem'}}>
                     <li style={{marginBottom: '1rem', display: 'flex', gap: '10px'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginTop: '3px'}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Interactive Lip-Sync modules
                     </li>
                     <li style={{marginBottom: '1rem', display: 'flex', gap: '10px'}}><span style={{color: 'var(--primary-red)'}}>✓</span> Liaison & Silent Letter workshops</li>
                     <li style={{marginBottom: '1rem', display: 'flex', gap: '10px'}}><span style={{color: 'var(--primary-red)'}}>✓</span> 24/7 Voice Recognition practice</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <section className="curriculum-timeline" style={{padding: '8rem 0', background: '#121212'}}>
         <div className="container">
            <h2 style={{textAlign: 'center', color: '#fff', marginBottom: '5rem'}}>A1 Roadmap to Confidence</h2>
            <div className="curriculum-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
               {[
                 { w: '01', t: 'The Alphabet & Sounds', d: 'Mastering the 26 letters and 36 sounds of French.' },
                 { w: '02', t: 'Greetings & Basic Self', d: 'Introducing yourself and basic "politesse".' },
                 { w: '03', t: 'The Living Space', d: 'Rooms, furniture and your immediate environment.' },
                 { w: '04', t: 'Daily Survival', d: 'Numbers, dates, time and basic verbs.' },
                 { w: '05', t: 'Gastronomy Part 1', d: 'Ordering in cafes and grocery shopping.' },
                 { w: '06', t: 'Family & Identity', d: 'Describing family members and physical traits.' },
                 { w: '07', t: 'The Verb Aller & Places', d: 'Going places and navigating the city.' },
                 { w: '08', t: 'Sports & Hobbies', d: 'Discussing What you "do" and "play".' },
                 { w: '09', t: 'Weather & Seasons', d: 'Climate talk and planning your day.' },
                 { w: '10', t: 'Certification Prep', d: 'Reviewing core outcomes for A1 diploma.' }
               ].map((mod, i) => (
                  <div key={i} className="premium-card" style={{padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)'}}>
                     <span style={{color: 'var(--primary-red)', fontWeight: '800', fontSize: '0.8rem'}}>WEEK {mod.w}</span>
                     <h4 style={{color: '#fff', margin: '10px 0', fontSize: '1.4rem'}}>{mod.t}</h4>
                     <p style={{color: '#aaa', margin: 0, fontSize: '0.9rem'}}>{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="course-footer section-white" style={{padding: '8rem 0', textAlign: 'center'}}>
         <div className="container">
            <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Start your French Story here.</h2>
            <p className="lead" style={{marginBottom: '3rem'}}>Join 2,000+ other beginners in our upcoming batch starting Monday.</p>
            <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center'}}>
               <button className="btn btn-red" style={{padding: '1.2rem 3rem'}}>Secure My Spot – $199</button>
               <Link to="/courses" className="btn btn-outline" style={{padding: '1.2rem 3rem'}}>View Other Levels</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default CourseA1;
