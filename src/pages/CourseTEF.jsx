import React from 'react';
import { Link } from 'react-router-dom';
import './ExamPages.css';

const CourseTEF = () => {
  return (
    <div className="exam-page">
      {/* Hero Section */}
      <section className="exam-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <span className="badge-premium" style={{color: '#3498db', borderColor: 'rgba(52, 152, 219, 0.3)'}}>Immigration & PR Specialist</span>
          <h1 style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>TEF Canada & France</h1>
          <p className="lead">The essential test for Canadian Permanent Residency and French Citizenship. Maximize your CRS points and achieve your immigration goals with our specialized training.</p>
        </div>
      </section>

      {/* Strategic Migration Section - WHITE */}
      <section className="exam-section exam-section-white">
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '6rem'}}>
               <span style={{color: '#3498db', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem'}}>Strategic Migration</span>
               <h2 style={{fontSize: '3.5rem'}}>Results-Driven Preparation</h2>
            </div>
            <div className="grid grid-3">
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline><circle cx="12" cy="12" r="5" strokeWidth="0.5" strokeDasharray="2 2"></circle></svg>
                  </div>
                  <h3>Score Optimization</h3>
                  <p>Techniques designed to secure Level 7 (C1) and above, giving you the maximum points for Express Entry.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M7 8h10M7 12h5" strokeWidth="0.5"></path></svg>
                  </div>
                  <h3>Computer-Based Lab</h3>
                  <p>Familiarize yourself with the e-TEF interface and technical requirements of the actual exam.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><circle cx="12" cy="12" r="8" strokeWidth="0.2" opacity="0.3"></circle></svg>
                  </div>
                  <h3>Modular Approach</h3>
                  <p>Focused modules for e-Compréhension, Expression Orale, and Expression Écrite for precision targeting.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Roadmap Section */}
      <section className="exam-section exam-section-black">
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '6rem', fontSize: '3.5rem'}}>TEF Score Booster</h2>
            <div className="exam-roadmap-grid">
               {[
                 { w: '01', t: 'TEF Structure Intro', d: 'Breakdown of the scoring system and section weighting.' },
                 { w: '02', t: 'Oral Comprehension', d: 'Fast-paced audio decoding and answer selection.' },
                 { w: '03', t: 'Written Comprehension', d: 'Identifying nuances and synonyms in complex texts.' },
                 { w: '04', t: 'Oral Expression A', d: 'Gathering information and asking pertinent questions.' },
                 { w: '05', t: 'Oral Expression B', d: 'Convincing and arguing for a specific lifestyle or event.' },
                 { w: '06', t: 'Written Expression A', d: 'Structuring newspaper stories/faits divers.' },
                 { w: '07', t: 'Written Expression B', d: 'Argumentative techniques for letters to the editor.' },
                 { w: '08', t: 'Lexique et Structure', d: 'Grammar and vocabulary drills for maximum precision.' },
                 { w: '09', t: 'Interactive Workshops', d: 'Live peer review and collective correction sessions.' },
                 { w: '10', t: 'Full TEF Simulation', d: 'Timed practice with real past exam papers.' },
                 { w: '11', t: 'Feedback & Refinement', d: 'Analyzing weaknesses and reinforcing key rules.' },
                 { w: '12', t: 'Exam Readiness', d: 'Final briefing and psychological preparation.' }
               ].map((mod, i) => (
                  <div key={i} className="roadmap-card">
                     <span className="track-idx" style={{color: '#3498db'}}>MODULE {mod.w}</span>
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
                  <h2 style={{fontSize: '3.5rem', marginBottom: '2.5rem', color: '#fff'}}>Your Path to PR</h2>
                  <div className="outcome-list">
                     {[
                        'Consistent CLB 7+ scores across all modules.',
                        'Speed and accuracy in reading comprehension.',
                        'Mastery of formal and informal rhetorical styles.',
                        'Highly effective strategies for computer-based testing.',
                        'Deep understanding of Canadian/French thematic contexts.'
                     ].map((item, i) => (
                        <div key={i} style={{display: 'flex', gap: '20px', marginBottom: '2rem', alignItems: 'center'}}>
                           <div style={{minWidth: '24px'}}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           <p style={{margin: 0, fontWeight: '600', fontSize: '1.2rem', color: '#ccc'}}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="visual-stat">
                  <div className="stat-box-premium" style={{borderColor: 'rgba(52, 152, 219, 0.2)'}}>
                     <div className="stat-val" style={{color: '#3498db'}}>50+</div>
                     <div className="stat-label">CRS Points Added</div>
                     <p style={{color: '#666', marginTop: '2rem', fontSize: '1.1rem'}}>on average to students applying for Canadian Express Entry.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <footer className="exam-section exam-section-black" style={{textAlign: 'center'}}>
         <div className="container">
            <h2 style={{fontSize: '4.5rem', color: '#fff', marginBottom: '3rem'}}>Ready to Migrate?</h2>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
               <Link to="/courses" className="btn btn-red" style={{background: '#3498db', padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px'}}>Enroll TEF — $349</Link>
               <Link to="/contact" className="btn btn-outline" style={{padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px', color: '#fff', borderColor: '#333'}}>Get Free Assessment</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default CourseTEF;
