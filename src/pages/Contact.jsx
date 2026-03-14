import { useState } from 'react';
import './Contact.css';

// ============================================================
// 🔧 GOOGLE SHEETS INTEGRATION
// Steps to connect:
// 1. Go to your Google Sheet → Extensions → Apps Script
// 2. Paste the Apps Script code (see README or ask for it)
// 3. Deploy as Web App (anyone can access)
// 4. Replace the URL below with your deployed Web App URL
// ============================================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/mangotreetech.com/s/AKfycbyV7hsl31NUWl7mL8zFAnbUjSV-xlUtS00XUmEjfsU0Ji_JgzmfQA3fb_bnDQmVwQEOFQ/exec';

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Dwarka, New Delhi, India' },
  { icon: '📧', label: 'Email', value: 'hello@maplelingua.ca' },
  { icon: '📞', label: 'Phone', value: '+91-98765 43210' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri: 9AM – 6PM EST' },
];

const languages = [
  'French',
  'German',
  'Italian',
  'Spanish',
  'English'
];

export default function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  language: '',
  message: '',
});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Build form-urlencoded body (works with Google Apps Script)
      const body = new URLSearchParams({
        ...formData,
        timestamp: new Date().toISOString(),
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body,
        // mode: 'no-cors' is needed because Google Apps Script doesn't set CORS headers for form posts
        mode: 'no-cors',
      });

      // With no-cors we can't read the response, so we assume success
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', language: '', message: '' });    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">
      {/* PAGE HERO */}
      <section className="page-hero contact-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge badge-gold mb-md" style={{ display: 'inline-flex' }}>Get in Touch</div>
          <h1 className="display-2 text-white mb-md">
            Learn <span className="gradient-text">French with Confidence</span>
          </h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto' }}>
            Start your journey to speak French fluently. Join MapleLingua and learn from expert tutors with practical conversations from day one.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT — Info */}
            <div className="contact-info">
              <p className="section-label">Contact Details</p>
              <h2 className="heading-1 mb-md">Let's Start a <span className="gradient-text">Conversation</span></h2>
              <p className="body-lg text-secondary mb-lg">
                Our friendly team typically responds within 24 hours. For urgent queries about active enrolments, please call us directly.
              </p>

              <div className="info-cards">
                {contactInfo.map((info, i) => (
                  <div className="info-card" key={i} id={`contact-info-${i}`}>
                    <div className="info-icon">{info.icon}</div>
                    <div>
                      <div className="info-label">{info.label}</div>
                      <div className="info-value">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social chips */}
              <div className="contact-socials">
                <p className="body-sm text-muted mb-sm">Also find us on:</p>
                <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                  {['Instagram', 'YouTube', 'Twitter', 'LinkedIn'].map(s => (
                    <a key={s} href="#" className="social-chip" id={`contact-social-${s.toLowerCase()}`}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="map-placeholder">
                <div className="map-inner">
                  <span className="map-pin">📍</span>
                  <p>270 Spadina Ave, Toronto</p>
                  <p className="body-sm text-muted">Open in Google Maps →</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="contact-form-wrap">
              <div className="contact-form-card">
                <h3 className="heading-2 mb-sm">Send Us a Message</h3>
                <p className="body-sm text-secondary mb-lg">
                  Fill in the form below and we'll get back to you within one business day.
                </p>

                {status === 'success' ? (
                  <div className="form-success" id="form-success">
                    <div className="success-icon">✅</div>
                    <h3 className="heading-2">Message Sent!</h3>
                    <p className="text-secondary mt-sm">
                      Merci beaucoup! Your message has been received. We'll be in touch within 24 hours.
                    </p>
                    <button className="btn btn-primary mt-lg" onClick={() => setStatus('idle')} id="form-send-another">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-language">Language *</label>

                      <select
                        id="contact-language"
                        name="language"
                        className="form-input form-select"
                        value={formData.language}
                        onChange={handleChange}
                         required
                         >
                          <option value="">Select language...</option>

                          {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                            ))}

                            </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-input form-textarea"
                        placeholder="Tell us how we can help you... Bonjour! 🇫🇷"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {status === 'error' && (
                      <div className="form-error" id="form-error">
                        ⚠️ Something went wrong. Please check your connection and try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      id="contact-submit"
                      disabled={status === 'loading'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {status === 'loading' ? (
                        <><span className="spinner" />Sending...</>
                      ) : (
                        '📨 Send Message'
                      )}
                    </button>

                    <p className="body-sm text-muted text-center mt-sm">
                      🔒 Your information is encrypted and never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="faq-section section-sm" id="faq">
        <div className="container">
          <div className="text-center mb-lg">
            <p className="section-label">FAQ</p>
            <h2 className="heading-1">Quick Answers</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: 'Do I need prior knowledge to start?', a: 'Not at all! Our A1 Débutant courses start from absolute zero. You\'ll be greeting people in French within your very first lesson.' },
              { q: 'How long does it take to become conversational?', a: 'Most learners reach conversational French (B1 level) within 6–9 months of consistent daily study with MapleLingua.' },
              { q: 'Are the tutors native French speakers?', a: 'Yes — all our tutors are native or near-native speakers, carefully vetted and trained in our immersive teaching methodology.' },
              { q: 'Can I try MapleLingua for free?', a: 'Absolutely! We offer a full 14-day free trial. No credit card required. Cancel anytime, no questions asked.' },
            ].map((faq, i) => (
              <div className="faq-item" key={i} id={`faq-${i}`}>
                <h4 className="heading-3 mb-xs">{faq.q}</h4>
                <p className="text-secondary body-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
