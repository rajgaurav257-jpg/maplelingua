import React from 'react';
import { Link } from 'react-router-dom';

const CourseA2 = () => {
  return (
    <div className="page-container course-a2-page">
      <section className="page-hero" style={{padding: '8rem 0 6rem', background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1920&q=80") center/cover'}}>
        <div className="container">
          <span className="course-badge" style={{background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid #fff'}}>Elementary Professional</span>
          <h1 style={{fontSize: '4.5rem', marginBottom: '1.5rem'}}>A2 - Elementary French</h1>
          <p className="lead" style={{maxWidth: '800px', margin: '0 auto 3rem'}}>Bridge the gap between basic phrases and meaningful conversation. Master narrative flow and complex social interactions.</p>
        </div>
      </section>

      {/* A2 Facility: Cultural Salons */}
      <section className="facility-section section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '4rem'}}>The "Café de Paris" Simulation</h2>
            <div className="grid grid-3">
               <div className="premium-card" style={{padding: '3rem', textAlign: 'center', background: '#fcfcfc', border: '1px solid #eee'}}>
                  <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                  </div>
                  <h3>Cultural Salons</h3>
                  <p>Weekly informal meetups to practice conversational flow in a pressure-free environment.</p>
               </div>
               <div className="premium-card" style={{padding: '3rem', textAlign: 'center', background: '#fcfcfc', border: '1px solid #eee'}}>
                  <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"></path><path d="M12 8v4l3 3"></path></svg>
                  </div>
                  <h3>Roleplay Mastery</h3>
                  <p>50+ situational scenarios from booking a TGV to handling medical emergencies.</p>
               </div>
               <div className="premium-card" style={{padding: '3rem', textAlign: 'center', background: '#fcfcfc', border: '1px solid #eee'}}>
                  <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                  <h3>Guided Readings</h3>
                  <p>Start reading your first short stories in French with expert linguistic support.</p>
               </div>
            </div>
         </div>
      </section>

      <section className="curriculum section-dark" style={{padding: '8rem 0', background: '#121212', color: '#fff'}}>
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '5rem'}}>A2 Mastery Roadmap</h2>
            <div className="grid grid-3" style={{gap: '1.5rem'}}>
               {[
                 { w: '01', t: 'Complex Descriptions', d: 'Describing people, feelings and opinions in detail.' },
                 { w: '02', t: 'Passé Composé vs Imparfait', d: 'Mastering the two main past tenses of French.' },
                 { w: '03', t: 'The Future Tense', d: 'Discussing plans, dreams and long-term goals.' },
                 { w: '04', t: 'Giving Directions', d: 'Navigating any French city like a local.' },
                 { w: '05', t: 'Daily Routines', d: 'Pronominal verbs and complex morning cycles.' },
                 { w: '06', t: 'Personal Narratives', d: 'Telling stories about your life and background.' },
                 { w: '07', t: 'Health & Wellbeing', d: 'Visiting the doctor and explaining symptoms.' },
                 { w: '08', t: 'Comparing & Contrasting', d: 'Using comparatives and superlatives naturally.' },
                 { w: '09', t: 'Culture & Entertainment', d: 'Discussing movies, books and French media.' },
                 { w: '10', t: 'Obligations & Permission', d: 'Using modal verbs in professional contexts.' },
                 { w: '11', t: 'Social Conventions', d: 'Mastering the art of "La Bise" and formal etiquette.' },
                 { w: '12', t: 'Final Proficiency Review', d: 'Mock A2 exam and performance assessment.' }
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

      <section className="outcomes section-white" style={{padding: '8rem 0'}}>
         <div className="container">
            <div className="grid grid-2" style={{alignItems: 'center', gap: '4rem'}}>
               <div className="text-content">
                  <h2 style={{fontSize: '3rem', marginBottom: '2rem'}}>What you will achieve</h2>
                  <div className="outcome-list">
                     {[
                        'Communicate effectively in all basic social situations.',
                        'Understand the main points of clear standard French.',
                        'Write simple connected text on topics which are familiar.',
                        'Describe experiences and events, dreams, hopes and ambitions.',
                        'Master the use of past, present, and future tenses.'
                     ].map((item, i) => (
                        <div key={i} style={{display: 'flex', gap: '15px', marginBottom: '1.2rem', alignItems: 'center'}}>
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           <p style={{margin: 0, fontWeight: '600'}}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="visual-stat">
                  <div className="premium-card" style={{padding: '4rem', background: '#f5f5f5', textAlign: 'center', borderRadius: '30px'}}>
                     <h2 style={{fontSize: '5rem', color: 'var(--primary-red)'}}>85%</h2>
                     <p style={{fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Conversational Confidence</p>
                     <p style={{color: '#666'}}>reached by our students after the A2 program.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="action section-white" style={{padding: '8rem 0', textAlign: 'center'}}>
         <div className="container">
            <h2>Ready to level up?</h2>
            <Link to="/courses" className="btn btn-red" style={{marginTop: '2rem'}}>Enroll in A2 for $249</Link>
         </div>
      </footer>
    </div>
  );
};

export default CourseA2;
