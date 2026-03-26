import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <section className="page-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderBottom: 'none'
      }}>
        <div className="container">
          <span className="course-badge" style={{color: '#fff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)'}}>24/7 Support</span>
          <h1 style={{color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)'}}>Get in Touch</h1>
          <p className="lead" style={{color: '#ddd'}}>We're here to help you navigate your language learning journey.</p>
        </div>
      </section>

      {/* NEW: White Section - Contact Form and Global Map */}
      <section className="section-white">
        <div className="container">
          <div className="grid grid-2">
            <div className="contact-form-side">
              <span style={{color: 'var(--primary-red)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase'}}>Direct Contact</span>
              <h2 style={{marginTop: '0.5rem', marginBottom: '1.5rem'}}>Send us a Message</h2>
              <form className="contact-form premium-card" style={{padding: '4rem', background: '#fff'}}>
                <div className="row">
                  <div className="form-group">
                    <label style={{fontWeight: '700', color: '#1a1a1a'}}>First Name</label>
                    <input type="text" placeholder="Alex" style={{border: '1px solid #eee', background: '#fcfcfc', color: '#1a1a1a'}} />
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight: '700', color: '#1a1a1a'}}>Last Name</label>
                    <input type="text" placeholder="Smith" style={{border: '1px solid #eee', background: '#fcfcfc', color: '#1a1a1a'}} />
                  </div>
                </div>
                <div className="form-group">
                  <label style={{fontWeight: '700', color: '#1a1a1a'}}>Email Address</label>
                  <input type="email" placeholder="alex@maplelingua.com" style={{border: '1px solid #eee', background: '#fcfcfc', color: '#1a1a1a'}} />
                </div>
                <div className="form-group">
                    <label style={{fontWeight: '700', color: '#1a1a1a'}}>Message</label>
                    <textarea rows="5" placeholder="Tell us about your learning goals..." style={{border: '1px solid #eee', background: '#fcfcfc', color: '#1a1a1a'}}></textarea>
                </div>
                <button type="submit" className="btn btn-red full-width" style={{padding: '1.2rem', fontSize: '1rem', fontWeight: '800'}}>Connect with an Advisor</button>
              </form>
            </div>
            
            <div className="contact-info-side" style={{paddingLeft: '4rem'}}>
              <div className="map-placeholder" style={{height: '350px', background: '#f8f9fa', borderRadius: '32px', marginBottom: '4rem', overflow: 'hidden', border: '1px solid #eee', position: 'relative'}}>
                 <div style={{position: 'absolute', inset: 0, opacity: 0.05, background: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
                 <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div style={{width: '60px', height: '60px', background: 'rgba(229, 90, 90, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <span style={{fontWeight: '800', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem'}}>Global Presence Visualization</span>
                 </div>
              </div>

              <div className="info-grid" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '3rem'}}>
                 <div className="info-block">
                    <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Linguistics HQ</h3>
                    <p style={{color: '#666', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '300px'}}>Dwarka sector 3, Delhi, India</p>
                 </div>
                 <div className="info-block">
                    <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Institutional Support</h3>
                    <p style={{color: '#666', fontSize: '1.1rem', marginBottom: '0.5rem'}}>bonjour@maplelingua.com</p>
                    <p style={{color: '#666', fontSize: '1.1rem'}}>+91 70421 13408</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers Section (Dark) */}
      <section className="support-tiers" style={{padding: '8rem 0'}}>
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2>Priority Support</h2>
            <p className="lead">We value your time and prioritize your inquiries.</p>
          </div>
          <div className="grid grid-3">
             <div className="premium-card">
                <h4 style={{color: 'var(--primary-red)'}}>Student Success</h4>
                <p style={{marginTop: '1rem', color: 'var(--text-grey)'}}>Direct line for our current students to handle academic platform questions.</p>
             </div>
             <div className="premium-card">
                <h4 style={{color: 'var(--primary-red)'}}>Admissions</h4>
                <p style={{marginTop: '1rem', color: 'var(--text-grey)'}}>Get expert advice on choosing the right level and scheduling your classes.</p>
             </div>
             <div className="premium-card">
                <h4 style={{color: 'var(--primary-red)'}}>Corporate</h4>
                <p style={{marginTop: '1rem', color: 'var(--text-grey)'}}>Specialized assistance for company-wide French training programs.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
