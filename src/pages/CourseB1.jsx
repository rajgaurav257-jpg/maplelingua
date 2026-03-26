import React from 'react';
import { Link } from 'react-router-dom';

const CourseB1 = () => {
  return (
    <div className="page-container course-b1-page">
      <section className="page-hero" style={{padding: '8rem 0 6rem', background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80") center/cover'}}>
        <div className="container">
          <span className="course-badge" style={{background: '#1a1a1a', border: '1px solid var(--primary-red)', color: 'var(--primary-red)'}}>Advanced Independent</span>
          <h1 style={{fontSize: '4.5rem', marginBottom: '1.5rem'}}>B1 - Intermediate French</h1>
          <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>Achieve threshold fluency. Move beyond survival to true self-expression in complex academic and professional settings.</p>
          
          <div className="course-quick-stats" style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '800'}}>Duration: </span>12 Weeks
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '800'}}>Level: </span>Independent
             </div>
             <div className="stat-pill" style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.8rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{color: 'var(--primary-red)', fontWeight: '800'}}>Price: </span>$299
             </div>
          </div>
        </div>
      </section>

      {/* B1 Facility: Business Hub */}
      <section className="facility-section section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <div className="grid grid-2" style={{alignItems: 'center'}}>
               <div className="facility-text" style={{paddingRight: '3rem'}}>
                  <h2>Professional Immersion Hub</h2>
                  <p className="lead">At the B1 level, we focus on real-world utility. Our Business Hub allows you to simulate high-stakes professional environments in French.</p>
                  <div className="feature-blocks" style={{marginTop: '2.5rem', display: 'grid', gap: '1.5rem'}}>
                     <div className="feature-item" style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                        <div style={{width: '60px', height: '60px', background: '#f5f5f5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div>
                           <h4 style={{margin: 0}}>Mock Interview Suite</h4>
                           <p style={{margin: 0, fontSize: '0.9rem', color: '#666'}}>Practice job interviews with real recruiters from France.</p>
                        </div>
                     </div>
                     <div className="feature-item" style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                        <div style={{width: '60px', height: '60px', background: '#f5f5f5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                        </div>
                        <div>
                           <h4 style={{margin: 0}}>Negotiation Lab</h4>
                           <p style={{margin: 0, fontSize: '0.9rem', color: '#666'}}>Learn the nuances of business negotiation and corporate culture.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="facility-image">
                  <div className="premium-card" style={{height: '500px', background: '#121212', borderRadius: '24px', position: 'relative', overflow: 'hidden'}}>
                     <div style={{position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at center, var(--primary-red) 0%, transparent 70%)'}}></div>
                     <div style={{padding: '3rem', color: '#fff'}}>
                        <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>The B1 Advantage</h3>
                        <p style={{color: '#aaa'}}>We don't just teach language; we teach professional success in a globalized French market.</p>
                        <div style={{marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px'}}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                           <h4 style={{marginTop: '1rem'}}>Corporate Readiness Certificate</h4>
                           <p style={{fontSize: '0.85rem', color: '#888'}}>Included with all B1 program completions.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="curriculum-timeline" style={{padding: '8rem 0', background: '#121212'}}>
         <div className="container">
            <h2 style={{textAlign: 'center', color: '#fff', marginBottom: '5rem'}}>B1 Master Curriculum</h2>
            <div className="curriculum-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
               {[
                 { w: '01', t: 'The Subjunctive Mood', d: 'Expressing desires and doubts.' },
                 { w: '02', t: 'Debating Social Issues', d: 'Agreement & justification skills.' },
                 { w: '03', t: 'Media Literacy', d: 'Analyzing French news & podcasts.' },
                 { w: '04', t: 'The Passive Voice', d: 'Formal academic reporting.' },
                 { w: '05', t: 'Art & Aesthetics', d: 'Describing cinema and literature.' },
                 { w: '06', t: 'Business Ethics', d: 'French workplace culture.' },
                 { w: '07', t: 'Hypothetical Tenses', d: 'Conditional sentences type 2.' },
                 { w: '08', t: 'Rhetorical Devices', d: 'Sounding more sophisticated.' },
                 { w: '09', t: 'Modern Politics', d: 'Discussing global events.' },
                 { w: '10', t: 'Academic Writing', d: 'The "Synthèse" technique.' },
                 { w: '11', t: 'Professional Talk', d: 'Persuasive speaking lab.' },
                 { w: '12', t: 'Graduation Project', d: 'Final oral thesis presentation.' }
               ].map((mod, i) => (
                  <div key={i} className="premium-card" style={{padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)'}}>
                     <span style={{color: 'var(--primary-red)', fontWeight: '800', fontSize: '0.75rem'}}>MODULE {mod.w}</span>
                     <h4 style={{color: '#fff', margin: '5px 0', fontSize: '1.2rem'}}>{mod.t}</h4>
                     <p style={{color: '#888', margin: 0, fontSize: '0.85rem'}}>{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="course-footer" style={{padding: '10rem 0', textAlign: 'center', background: '#fff'}}>
         <div className="container" style={{maxWidth: '700px'}}>
            <div style={{background: '#f9f9f9', padding: '5rem', borderRadius: '40px', border: '1px solid #eee'}}>
               <h2 style={{fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-2px', color: '#000000'}}>Unlock your Global Career.</h2>
               <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3.5rem', color: '#444444'}}>B1 is the turning point where French becomes a professional asset. Join our elite cohort of upcoming bilinguals and gain the confidence to lead in any environment.</p>
               <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center'}}>
                  <button className="btn btn-red" style={{width: '100%', maxWidth: '450px', padding: '1.5rem', fontSize: '1.2rem', fontWeight: '800', boxShadow: '0 20px 40px rgba(229, 62, 62, 0.2)'}}>Apply for B1 Intake – $299</button>
                  <Link to="/contact" style={{color: '#000000', fontSize: '0.95rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #ddd', paddingBottom: '4px'}}>
                     Still have questions? Speak to a B1 Expert Advisor 
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default CourseB1;
