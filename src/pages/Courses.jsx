import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const levels = [
    { title: 'A1 - Beginner', desc: 'Start from scratch. Learn basics, introductions, and everyday phrases.', duration: '8 weeks', price: '$199' },
    { title: 'A2 - Elementary', desc: 'Build on your foundation. Handle simple tasks and familiar topics.', duration: '10 weeks', price: '$249' },
    { title: 'B1 - Intermediate', desc: 'Express yourself fluently. Handle most situations while traveling.', duration: '12 weeks', price: '$299' },
    { title: 'B2 - Upper Intermediate', desc: 'Understand complex texts and interact with native speakers.', duration: '12 weeks', price: '$349' }
  ];

  const curriculum = [
    { 
      module: '01', 
      title: 'Phonetics & Pronunciation', 
      desc: 'Master the sounds of the French language. We focus on the unique vowel system, nasal sounds, and the rules of liaison.',
      topics: ['The IPA for French', 'Nasal Vowels', 'R-Guttural Mastery', 'Liaison Rules'] 
    },
    { 
      module: '02', 
      title: 'Grammar Foundations', 
      desc: 'Build a rock-solid structural base. Learn how to construct complex sentences and understand the logic of French syntax.',
      topics: ['Verb Conjugation', 'Gender Agreement', 'Sentence Structure', 'Prepositions'] 
    },
    { 
      module: '03', 
      title: 'Daily Interaction', 
      desc: 'Transition from theory to practice. Real-world scenarios that prepare you for life in a French-speaking environment.',
      topics: ['Social Etiquette', 'Public Transport', 'Medical Situations', 'Dining Out'] 
    },
    { 
      module: '04', 
      title: 'Cultural Immersion', 
      desc: 'Language is inseparable from culture. Explore the history, philosophy, and art that shaped the Francophone world.',
      topics: ['French History', 'Modern Aesthetics', 'Regional Dialects', 'Literature Intro'] 
    }
  ];

  return (
    <div className="page-container courses-page">
      <section className="page-hero" style={{
        padding: '8rem 0 6rem',
        background: 'linear-gradient(rgba(0,0,0,0.75), rgba(18,18,18,0.95)), url("https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1920&q=80") center/cover no-repeat'
      }}>
        <div className="container">
          <span className="course-badge">Curriculum 2025</span>
          <h1>Master French with Precision</h1>
          <p className="lead">Our curriculum is designed by world-class linguists to ensure you reach native-level fluency through a balanced approach of grammar, speaking, and cultural immersion.</p>
        </div>
      </section>


      {/* NEW: White Section - Curriculum Overview */}
      <section className="section-white">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '5rem'}}>
            <span style={{color: 'var(--primary-red)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem'}}>The Roadmap</span>
            <h2 style={{marginTop: '0.5rem'}}>Comprehensive Curriculum</h2>
            <p className="lead">A milestone-based approach to professional fluency.</p>
          </div>
          
          <div className="curriculum-steps-grid">
            {curriculum.map((item, i) => (
              <div key={i} className="curriculum-card premium-card">
                <div className="card-header">
                  <span className="mod-label">Module</span>
                  <span className="mod-index">{item.module}</span>
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p className="mod-desc">{item.desc}</p>
                  <div className="topics-list">
                    {item.topics.map((topic, j) => (
                      <div key={j} className="topic-tag">
                        <span className="dot"></span>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-grid-section" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Certification Levels</h2>
            <p className="lead" style={{color: 'var(--text-grey)'}}>Choose the path that fits your current proficiency.</p>
          </div>
          <div className="grid grid-2">
            {levels.map((level, i) => (
              <div key={i} className="course-card premium-card">
                <div className="course-badge">CEFR {level.title.split(' ')[0]}</div>
                <h3>{level.title}</h3>
                <p style={{color: 'var(--text-grey)', marginBottom: '1.5rem'}}>{level.desc}</p>
                <div className="course-meta">
                  <span>Duration: {level.duration}</span>
                  <span className="price">{level.price}</span>
                </div>
                <Link to={`/courses/${level.title.split(' ')[0].toLowerCase()}`} className="btn btn-red full-width">View Course Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFINED: Exam Preparation Section - Dark Premium Theme */}
      <section className="exams-section section-dark" style={{padding: '10rem 0', background: '#0a0a0a', borderTop: '1px solid #1a1a1a'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '6rem'}}>
            <span style={{color: 'var(--primary-red)', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem'}}>Institutional Excellence</span>
            <h2 style={{fontSize: '3.5rem', color: '#fff'}}>Professional Exam Mastery</h2>
            <p className="lead" style={{color: 'var(--text-grey)', marginTop: '1.5rem'}}>Intensive preparatory tracks developed for maximum score achievement in global certifications.</p>
          </div>
          <div className="grid grid-3">
            {/* DELF Card */}
            <div className="course-card premium-card" style={{border: '1px solid rgba(229, 90, 90, 0.1)'}}>
              <div style={{marginBottom: '2rem'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="course-badge" style={{background: 'rgba(229, 90, 90, 0.1)', color: 'var(--primary-red)', border: '1px solid rgba(229, 90, 90, 0.2)'}}>Lifetime Diploma</div>
              <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem'}}>DELF Training</h3>
              <p style={{color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6'}}>Structured preparation for the official French Ministry of Education diploma. Focus on linguistic precision and academic rigor.</p>
              <div className="course-meta" style={{borderTop: '1px solid #222', paddingTop: '1.5rem'}}>
                <span style={{color: '#888'}}>Validity: <strong style={{color: '#fff'}}>Lifetime</strong></span>
                <span className="price" style={{color: 'var(--primary-red)', fontSize: '1.4rem'}}>$299</span>
              </div>
              <Link to="/courses/delf" className="btn btn-red full-width" style={{marginTop: '1rem'}}>Explore Exam Track</Link>
            </div>

            {/* TEF Card */}
            <div className="course-card premium-card" style={{border: '1px solid rgba(255, 255, 255, 0.05)'}}>
              <div style={{marginBottom: '2rem'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="course-badge" style={{background: 'rgba(52, 152, 219, 0.1)', color: '#3498db', border: '1px solid rgba(52, 152, 219, 0.2)'}}>Immigration PR</div>
              <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem'}}>TEF Specialization</h3>
              <p style={{color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6'}}>Targeted intensive for TEF Canada/France. Strategy-focused training to maximize your score for immigration and work permits.</p>
              <div className="course-meta" style={{borderTop: '1px solid #222', paddingTop: '1.5rem'}}>
                <span style={{color: '#888'}}>Validity: <strong style={{color: '#fff'}}>2 Years</strong></span>
                <span className="price" style={{color: '#3498db', fontSize: '1.4rem'}}>$349</span>
              </div>
              <Link to="/courses/tef" className="btn btn-outline full-width" style={{marginTop: '1rem', color: '#fff', borderColor: '#333'}}>Explore Exam Track</Link>
            </div>

            {/* TCF Card */}
            <div className="course-card premium-card" style={{border: '1px solid rgba(255, 255, 255, 0.05)'}}>
              <div style={{marginBottom: '2rem'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="course-badge" style={{background: 'rgba(46, 204, 113, 0.1)', color: '#2ecc71', border: '1px solid rgba(46, 204, 113, 0.2)'}}>Fast-Track Assessment</div>
              <h3 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem'}}>TCF Accelerator</h3>
              <p style={{color: 'var(--text-grey)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6'}}>Rapid preparation for university admissions and career advancement. Comprehensive assessment training from A1 to C2.</p>
              <div className="course-meta" style={{borderTop: '1px solid #222', paddingTop: '1.5rem'}}>
                <span style={{color: '#888'}}>Validity: <strong style={{color: '#fff'}}>2 Years</strong></span>
                <span className="price" style={{color: '#2ecc71', fontSize: '1.4rem'}}>$329</span>
              </div>
              <Link to="/courses/tcf" className="btn btn-outline full-width" style={{marginTop: '1rem', color: '#fff', borderColor: '#333'}}>Explore Exam Track</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section in White */}
      <section className="section-white">
         <div className="container">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '5rem'}}>
              <span style={{color: 'var(--primary-red)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem'}}>Support & Guidance</span>
              <h2 style={{marginTop: '0.5rem'}}>Common Questions</h2>
              <p className="lead">Everything you need to know about starting your French journey.</p>
            </div>
            
            <div className="faq-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem'}}>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Do I need to buy textbooks?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>No. All learning materials, worksheets, and digital resources are included in your tuition and easily accessible via your dashboard.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Are your instructors native speakers?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>Yes, 100%. All our teachers are native French speakers with certified degrees in teaching FLE (Français Langue Étrangère).</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Can I switch levels if a course is too hard?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>Absolutely. If you find your current level doesn't match your skills, you can request a level transfer within the first two weeks of class.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Will I receive a certificate?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>Yes. Upon successful completion of each level, you will receive a MapleLingua certificate aligned with CEFR international standards.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>Do you offer payment installments?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>Yes, we support student success by offering 3-month interest-free payment plans for all our full-semester certification programs.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>What is your maximum class size?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>To ensure personalized attention and maximum speaking time, we limit our group classes to a maximum of 8 students per intake.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>What if I miss a live session?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>Every live session is recorded in high definition and uploaded to your private student portal within 24 hours for you to watch anytime.</p>
               </div>
               <div className="faq-item premium-card" style={{padding: '2.5rem', background: '#fff'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a'}}>How long does it take to reach B2?</h4>
                  <p style={{color: '#555', lineHeight: '1.6'}}>From zero, a dedicated student typically reaches B2 professional fluency in 12-14 months of consistent study in our academy.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Courses;
