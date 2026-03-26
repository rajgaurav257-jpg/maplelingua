import React from 'react';
import { Link } from 'react-router-dom';

const CourseB2 = () => {
  return (
    <div className="page-container course-b2-page">
      <section className="page-hero" style={{padding: '8rem 0 6rem', background: '#000'}}>
        <div className="container">
          <span className="course-badge" style={{color: 'var(--primary-red)', border: '1px solid var(--primary-red)'}}>Elite Professional</span>
          <h1 style={{fontSize: '5rem', marginBottom: '1.5rem'}}>B2 - Upper Intermediate</h1>
          <p className="lead" style={{maxWidth: '900px', margin: '0 auto 3rem'}}>The Gateway to France. Attain the level of fluency required for university study and high-level professional work in any French-speaking country.</p>
        </div>
      </section>

      {/* B2 Facility: Academic Mentors */}
      <section className="facility section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <div className="grid grid-2" style={{alignItems: 'center', gap: '5rem'}}>
               <div className="image-stack" style={{position: 'relative', height: '500px'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, width: '80%', height: '80%', background: '#eee', zIndex: 1}}></div>
                  <div style={{position: 'absolute', bottom: '20px', right: '20px', width: '80%', height: '80%', background: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 2}}>
                     <div style={{textAlign: 'center'}}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <p style={{fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Elite Mentorship</p>
                     </div>
                  </div>
               </div>
               <div className="text-content">
                  <span style={{letterSpacing: '0.2em', opacity: 0.6}}>THE B2 FACILITY</span>
                  <h2 style={{fontSize: '3rem', margin: '2rem 0'}}>University Preparation Lab</h2>
                  <p className="lead">For students aiming for higher education in France, our B2 program includes a dedicated Academic Support Lab.</p>
                  <div className="features" style={{marginTop: '3rem'}}>
                     <div style={{marginBottom: '2rem'}}>
                        <h4>Thesis & Essay Workshops</h4>
                        <p style={{color: '#666'}}>Learn to synthesize complex sources into a coherent French dissertation.</p>
                     </div>
                     <div>
                        <h4>Public Speaking mastery</h4>
                        <p style={{color: '#666'}}>Weekly "Eloquence sessions" to master the art of the formal presentation.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="curriculum section-dark" style={{padding: '8rem 0', background: '#111', color: '#fff'}}>
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '4rem'}}>The B2 Master Curriculum</h2>
            <div className="grid grid-2" style={{gap: '2rem'}}>
               {[
                  { t: 'Rhetoric & Style', d: 'Mastering the art of persuasion and formal debate.' },
                  { t: 'Political Discourse', d: 'Analyzing modern French politics and media bias.' },
                  { t: 'Modern Ethics', d: 'Discussing bioethics, environmentalism, and social justice.' },
                  { t: 'Science & Tech', d: 'Technical French for innovation and academic research.' },
                  { t: 'Literary Analysis', d: 'Deconstructing contemporary French literature and poetry.' },
                  { t: 'The Art of Synthesis', d: 'Combining multiple sources into a coherent professional brief.' }
               ].map((mod, i) => (
                  <div key={i} className="premium-card" style={{padding: '2.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', transition: 'transform 0.3s ease'}}>
                     <div style={{color: 'var(--primary-red)', marginBottom: '1rem', fontWeight: '800'}}>0{i+1}</div>
                     <h4 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>{mod.t}</h4>
                     <p style={{color: '#888', margin: 0}}>{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <section className="cta section-white" style={{padding: '10rem 0', textAlign: 'center'}}>
         <div className="container">
            <div style={{background: '#0a0a0a', padding: '6rem', borderRadius: '40px', border: '1px solid #222', color: '#fff'}}>
               <h2 style={{fontSize: '4.5rem', marginBottom: '1.5rem', letterSpacing: '-2px', color: '#ffffff'}}>Master the Language.</h2>
               <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3.5rem', color: 'rgba(255,255,255,0.7)'}}>B2 is the gateway to France. Attain the level of fluency required for university study and high-level professional work in any French-speaking country.</p>
               <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center'}}>
                  <button className="btn btn-red" style={{padding: '1.5rem 4rem', fontSize: '1.1rem', fontWeight: '800'}}>Apply Now – $349</button>
                  <Link to="/contact" className="btn btn-outline" style={{padding: '1.5rem 4rem', borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff'}}>Speak to an Advisor</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CourseB2;
