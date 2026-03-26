import React from 'react';
import { Link } from 'react-router-dom';
import './ExamPages.css';

const CourseTCF = () => {
  return (
    <div className="exam-page">
      {/* Hero Section */}
      <section className="exam-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <span className="badge-premium" style={{color: '#2ecc71', borderColor: 'rgba(46, 204, 113, 0.3)', background: 'rgba(46, 204, 113, 0.1)'}}>Professional Assessment Track</span>
          <h1 style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>TCF Tout Public & IRN</h1>
          <p className="lead">The versatile test for university admissions, professional advancement, and residence permits. Prove your level with a fast, efficient, and recognized assessment.</p>
        </div>
      </section>

      {/* Efficiency and Precision Section - WHITE */}
      <section className="exam-section exam-section-white">
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '6rem'}}>
               <span style={{color: '#2ecc71', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem'}}>Efficiency and Precision</span>
               <h2 style={{fontSize: '3.5rem'}}>Assessment-Focused Prep</h2>
            </div>
            <div className="grid grid-3">
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline><path d="M7 10h4M7 14h2" strokeWidth="0.5"></path></svg>
                  </div>
                  <h3>Adaptive Training</h3>
                  <p>Prep materials that cover the entire range from A1 to C2, adapting to your target goals and proficiency level.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline><circle cx="12" cy="12" r="10" strokeWidth="0.1" opacity="0.2"></circle></svg>
                  </div>
                  <h3>Diagnostic Tests</h3>
                  <p>Frequent testing to pinpoint your exact CEFR level and focus on needed improvements in grammar and syntax.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline><path d="M2 19h12" strokeWidth="0.5"></path></svg>
                  </div>
                  <h3>Tailored Content</h3>
                  <p>Whether for IRN (Nationality) or CAPES (Academic), we provide specific content for your TCF variant.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Roadmap Section */}
      <section className="exam-section exam-section-black">
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '6rem', fontSize: '3.5rem'}}>TCF Mastery Program</h2>
            <div className="exam-roadmap-grid">
               {[
                 { w: '01', t: 'Multiple Choice Strategy', d: 'How to tackle MCQ questions quickly and accurately.' },
                 { w: '02', t: 'Auditory Discrimination', d: 'Focusing on details in diverse Francophone accents.' },
                 { w: '03', t: 'Reading Comprehension', d: 'Scanning and skimming techniques for long texts.' },
                 { w: '04', t: 'Language Components', d: 'Grammar and syntax specifically tested in TCF.' },
                 { w: '05', t: 'Oral Expression Task 1', d: 'Presenting yourself and your environment clearly.' },
                 { w: '06', t: 'Oral Expression Task 2', d: 'Interacting and obtaining information effectively.' },
                 { w: '07', t: 'Oral Expression Task 3', d: 'Giving a sustained opinion on a complex topic.' },
                 { w: '08', t: 'Written Production Task 1', d: 'Drafting clear and concise messages/letters.' },
                 { w: '09', t: 'Written Production Task 2', d: 'Comparing situations and taking a stand.' },
                 { w: '10', t: 'Written Production Task 3', d: 'Synthesizing ideas and reformulating arguments.' },
                 { w: '11', t: 'Timed MCQ Simulations', d: 'Speed drills for the mandatory tests.' },
                 { w: '12', t: 'Final Performance Review', d: 'Final assessment and exam day strategy.' }
               ].map((mod, i) => (
                  <div key={i} className="roadmap-card">
                     <span className="track-idx" style={{color: '#2ecc71'}}>TRACK {mod.w}</span>
                     <h4>{mod.t}</h4>
                     <p>{mod.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Outcomes Section */}
      <section className="exam-section exam-section-dark">
         <div className="container">
            <div className="grid grid-2" style={{alignItems: 'center', gap: '6rem'}}>
               <div className="text-content">
                  <h2 style={{fontSize: '3.5rem', marginBottom: '2.5rem', color: '#fff'}}>Academic & Legal Success</h2>
                  <div className="outcome-list">
                     {[
                        'Verified CEFR profile from A1 to C2.',
                        'Speed-optimized computer testing skills.',
                        'Clarity in written communications of all types.',
                        'Confidence in interactive speaking modules.',
                        'Full preparation for the IRN or Tout Public variants.'
                     ].map((item, i) => (
                        <div key={i} style={{display: 'flex', gap: '20px', marginBottom: '2rem', alignItems: 'center'}}>
                           <div style={{minWidth: '24px'}}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           <p style={{margin: 0, fontWeight: '600', fontSize: '1.2rem', color: '#ccc'}}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="visual-stat">
                  <div className="stat-box-premium" style={{borderColor: 'rgba(46, 204, 113, 0.2)'}}>
                     <div className="stat-val" style={{color: '#2ecc71'}}>2 Weeks</div>
                     <div className="stat-label">To Official Results</div>
                     <p style={{color: '#666', marginTop: '2rem', fontSize: '1.1rem'}}>We help you prep for the fastest turn-around exam available.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <footer className="exam-section exam-section-black" style={{textAlign: 'center'}}>
         <div className="container">
            <h2 style={{fontSize: '4.5rem', color: '#fff', marginBottom: '3rem'}}>Ready for Assessment?</h2>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
               <Link to="/courses" className="btn btn-red" style={{background: '#2ecc71', padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px'}}>Enroll Accelerator — $329</Link>
               <Link to="/contact" className="btn btn-outline" style={{padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px', color: '#fff', borderColor: '#333'}}>Book Free Trial</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default CourseTCF;
