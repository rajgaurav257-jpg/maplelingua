import React from 'react';
import { Link } from 'react-router-dom';
import './ExamPages.css';

const CourseDELF = () => {
  return (
    <div className="exam-page">
      {/* Hero Section */}
      <section className="exam-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <span className="badge-premium" style={{color: '#e74c3c', borderColor: 'rgba(231, 76, 60, 0.3)'}}>Official Ministry Certification</span>
          <h1 style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>DELF Preparation</h1>
          <p className="lead">The gold standard of French language certification. Valid for life, recognized globally, and essential for career and academic advancement.</p>
        </div>
      </section>

      {/* Professional Strategy Section - WHITE */}
      <section className="exam-section exam-section-white">
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '6rem'}}>
               <span style={{color: '#e74c3c', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem'}}>Academic Excellence</span>
               <h2 style={{fontSize: '3.5rem'}}>Bespoke Learning Architecture</h2>
            </div>
            <div className="grid grid-3">
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path><circle cx="12" cy="12" r="3" strokeWidth="0.5" strokeDasharray="1 1"></circle></svg>
                  </div>
                  <h3>Methodical Pedagogy</h3>
                  <p>Our approach is rooted in the CEFR framework, ensuring every lesson builds towards official mastery criteria.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>
                  </div>
                  <h3>Curated Workshops</h3>
                  <p>Intensive sessions focusing on the four core competencies: listening, reading, writing, and speaking.</p>
               </div>
               <div className="exam-card-premium">
                  <div style={{marginBottom: '2.5rem'}}>
                     <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <h3>Vocabulary Boost</h3>
                  <p>Expand your lexical range with field-specific terminology required for B1 and B2 level proficiency.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Roadmap Section */}
      <section className="exam-section exam-section-black">
         <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '6rem', fontSize: '3.5rem'}}>DELF Success Roadmap</h2>
            <div className="exam-roadmap-grid">
               {[
                 { w: '01', t: 'Diagnostic Assessment', d: 'Comprehensive evaluation of your current CEFR level (A1-B2).' },
                 { w: '02', t: 'Grammar Foundations', d: 'Mastery of complex tenses, moods (subjunctive), and syntax.' },
                 { w: '03', t: 'Oral Comprehension', d: 'Decoding natural speech, radio broadcasts, and lectures.' },
                 { w: '04', t: 'Written Comprehension', d: 'Analyzing informative, argumentative, and literary texts.' },
                 { w: '05', t: 'Thematic Vocabulary', d: 'Societal issues, environment, technology, and culture.' },
                 { w: '06', t: 'Expression Écrite A', d: 'Structuring formal letters and informative reports.' },
                 { w: '07', t: 'Expression Écrite B', d: 'Constructing powerful arguments and critical essays.' },
                 { w: '08', t: 'Expression Orale A', d: 'Presenting and defending a viewpoint on a given topic.' },
                 { w: '09', t: 'Expression Orale B', d: 'Interacting fluently and spontaneously with examiners.' },
                 { w: '10', t: 'Simulation Exam I', d: 'Full-length timed practice under real exam conditions.' },
                 { w: '11', t: 'Feedback & Correction', d: 'Individualized review of mock exam performance.' },
                 { w: '12', t: 'Final Polish', d: 'Stress management and strategic time-allocation tips.' }
               ].map((mod, i) => (
                  <div key={i} className="roadmap-card">
                     <span className="track-idx">MODULE {mod.w}</span>
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
                  <h2 style={{fontSize: '3.5rem', marginBottom: '2.5rem', color: '#fff'}}>Institutional Recognition</h2>
                  <div className="outcome-list">
                     {[
                        'Lifetime validity recognized by the French Ministry of Education.',
                        'Enhanced employability in Francophone corporate sectors.',
                        'Waiver of language entrance exams at most French universities.',
                        'Official proof of fluency for immigration and naturalization.',
                        'Durable linguistic skills that go beyond simple test-taking.'
                     ].map((item, i) => (
                        <div key={i} style={{display: 'flex', gap: '20px', marginBottom: '2rem', alignItems: 'center'}}>
                           <div style={{minWidth: '24px'}}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           <p style={{margin: 0, fontWeight: '600', fontSize: '1.2rem', color: '#ccc'}}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="visual-stat">
                  <div className="stat-box-premium">
                     <div className="stat-val">98%</div>
                     <div className="stat-label">Graduation Rate</div>
                     <p style={{color: '#666', marginTop: '2rem', fontSize: '1.1rem'}}>of our students successfully pass their DELF exam on the first attempt.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <footer className="exam-section exam-section-black" style={{textAlign: 'center'}}>
         <div className="container">
            <h2 style={{fontSize: '4.5rem', color: '#fff', marginBottom: '3rem'}}>Secure Your Future</h2>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
               <Link to="/courses" className="btn btn-red" style={{background: '#e74c3c', padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px'}}>Enroll Now — $299</Link>
               <Link to="/contact" className="btn btn-outline" style={{padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '12px', color: '#fff', borderColor: '#333'}}>Inquire for Corporate</Link>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default CourseDELF;
