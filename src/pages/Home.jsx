import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiTarget,
  FiMic,
  FiSmartphone,
  FiAward,
  FiUnlock,
  FiArrowRight,
  FiZap,
  FiBookOpen,
  FiStar,
  FiMail,
  FiPlay,
  FiUsers,
  FiBook,
  FiCheckCircle,
  FiGlobe,
  FiSend,
  FiAlertCircle
} from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineChartBar } from 'react-icons/hi';
import heroImg from '../assets/hero-premium.jpg';
import { useReveal } from '../hooks/useReveal';
import GlobePreloader from '../components/GlobePreloader';
import './Home.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/mangotreetech.com/s/AKfycbyV7hsl31NUWl7mL8zFAnbUjSV-xlUtS00XUmEjfsU0Ji_JgzmfQA3fb_bnDQmVwQEOFQ/exec';

const features = [
  {
    icon: <FiTarget />,
    title: 'Structured Learning Paths',
    desc: 'From bonjour to fluency — our curriculum follows CEFR standards (A1 to C2), guiding you step by step with clarity and purpose.',
  },
  {
    icon: <FiMic />,
    title: 'Live Pronunciation Coaching',
    desc: 'Master the infamous French "r" and nasal vowels with AI-powered pronunciation feedback and live tutor sessions.',
  },
  {
    icon: <HiOutlineLightBulb />,
    title: 'Spaced Repetition Memory',
    desc: 'Our smart flashcard system uses proven cognitive science to lock vocabulary into your long-term memory.',
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: 'Immersive French Culture',
    desc: 'Language is culture. Explore French cinema, cuisine, history, and etiquette while you learn to speak like a native.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Learn Anywhere, Anytime',
    desc: 'Fully responsive on all devices. Pick up your lesson on the metro, at a café, or from the comfort of your couch.',
  },
  {
    icon: <FiAward />,
    title: 'Certified Achievements',
    desc: 'Earn MapleLingua achievement badges and prepare for internationally recognized DELF/DALF certifications.',
  },
];

const stats = [
  { value: '12K+', label: 'Active Learners' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '40+', label: 'Expert Tutors' },
  { value: '500+', label: 'Lessons Available' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'PS',
    rating: 5,
    text: 'MapleLingua transformed my French entirely. Within 6 months I passed my DELF B2 exam. The cultural immersion approach is unlike anything else online.',
  },
  {
    name: 'James O\'Connor',
    location: 'Toronto, Canada',
    avatar: 'JO',
    rating: 5,
    text: 'The live sessions are incredible. My tutor, Sophie, made every class feel like a conversation in a Parisian café. I\'m now working in a French company!',
  },
  {
    name: 'Aisha Malik',
    location: 'Dubai, UAE',
    avatar: 'AM',
    rating: 5,
    text: 'I tried 4 other platforms before MapleLingua. This is the only one that kept me engaged. The UI is beautiful, the content is rich, and it actually works.',
  },
];

const levels = [
  {
    level: 'A1–A2',
    name: 'Débutant',
    desc: 'Master the basics: greetings, numbers, and everyday phrases for a solid foundation.',
    color: '#4CAF50',
    icon: <FiZap />
  },
  {
    level: 'B1–B2',
    name: 'Intermédiaire',
    desc: 'Bridge the gap: Travel, work, and fluid conversation in a variety of cultural contexts.',
    color: '#C9A84C',
    icon: <FiBookOpen />
  },
  {
    level: 'C1–C2',
    name: 'Avancé',
    desc: 'Reach mastery: Fluent discourse, complex literature, and professional business French.',
    color: '#9C27B0',
    icon: <FiAward />
  },
];

const frenchPrograms = [
  {
    title: "French for Beginners (A1-A2)",
    badge: "FOUNDATIONAL",
    desc: "Master the basics of French grammar, pronunciation and daily conversation.",
    points: [
      "Daily Conversation Practice",
      "Interactive Cultural Lessons",
      "Live Tutor Sessions"
    ]
  },
  {
    title: "Intermediate French (B1-B2)",
    badge: "FLUENT",
    desc: "Develop confidence in real-world conversations and complex expressions.",
    points: [
      "Thematic Learning Units",
      "Grammar & Expression Mastery",
      "Pronunciation Improvement"
    ]
  },
  {
    title: "Advanced Fluency (C1-C2)",
    badge: "EXPERT",
    desc: "Achieve near-native fluency with advanced writing and discussion.",
    points: [
      "Advanced Grammar Mastery",
      "Academic Writing Skills",
      "Debate & Discussion Practice"
    ]
  },
  {
    title: "DELF / DALF Preparation",
    badge: "ACADEMIC",
    desc: "Prepare for globally recognized French language certifications.",
    points: [
      "Mock Exam Practice",
      "Exam Strategy Training",
      "Personalized Feedback"
    ]
  },
  {
    title: "TEF Canada Preparation",
    badge: "IMMIGRATION",
    desc: "Special preparation for TEF exam required for Canada immigration.",
    points: [
      "Listening & Speaking Practice",
      "TEF Mock Tests",
      "Score Improvement Strategy"
    ]
  },
  {
    title: "French for Professionals",
    badge: "CAREER",
    desc: "Learn business French for workplace communication and meetings.",
    points: [
      "Business Communication",
      "Professional Email Writing",
      "Meeting & Presentation Skills"
    ]
  }
];

export default function Home() {
  useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      const body = new URLSearchParams({
        ...formData,
        timestamp: new Date().toISOString(),
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body,
        mode: 'no-cors',
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container hero__content">
          {/* Left Side: Information */}
          <div className="hero__info animate-fadeUp">
            <div className="badge-luxury mb-sm">
              <span className="dot-gold"></span> WORLD-CLASS EDUCATION
            </div>
            <h1 className="display-1 hero__heading mb-md">
              Master a New <br />
              Language with <br />
              <span className="text-italic-gold">Confidence.</span>
            </h1>
            <p className="lead hero__subtext mb-xl">
              Experience bespoke language training designed for the global elite. Our certified expert tutors provide personalized learning paths that guarantee fluency and cultural mastery.
            </p>

            <div className="hero__actions mb-xl">
              <Link to="/contact" className="btn btn-primary btn-lg shine-effect" id="hero-cta-main">
                Start Your Journey
              </Link>
              <button className="btn-play-link" id="hero-cta-video">
                <div className="play-icon-wrap"><FiPlay /></div>
                <span className="play-text">WATCH STORY</span>
              </button>
            </div>

            <div className="hero__trust">
              <div className="avatar-group">
                <div className="avatar"><span>S</span></div>
                <div className="avatar"><span>J</span></div>
                <div className="avatar"><span>A</span></div>
              </div>
              <div className="trust-info">
                <p className="trust-title">500+ Expert Tutors</p>
                <p className="trust-subtitle">Helping 20,000+ students globally</p>
              </div>
            </div>
          </div>

          <div className="hero__middle animate-fadeUp delay-200">
            <div className="hero__search mt-xl">
              <div className="search-box-wrapper">
                <input type="text" placeholder="What do you want to learn today?" className="form-control" />
                <button className="btn btn-primary"><FiTarget /></button>
              </div>
              <ul className="hero__features-list">
                <li><FiCheckCircle className="text-gold" /> Native French Tutors</li>
                <li><FiCheckCircle className="text-gold" /> CEFR Aligned Curriculum</li>
                <li><FiCheckCircle className="text-gold" /> Flexible Scheduling</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Visual Card (3D Globe) */}
          <div className="hero__visual perspective-3d">
            {/* Globe spins freely with no background container */}
            <GlobePreloader heroMode={true} />
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="stats-banner" id="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i} id={`stat-${i}`}>
                <div className="stat-value gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRENCH EXCELLENCE HUB (Refined for Students) ===== */}
      <section className="hub-section reveal" id="excellence-hub">
        <div className="container">
          <div className="hub-header text-center mb-xl">
            <p className="badge-luxury mb-sm" style={{ background: 'rgba(197, 160, 52, 0.08)', color: 'var(--brand-secondary)' }}>
              STUDENT EXCELLENCE CENTER
            </p>
            <h2 className="display-2 mb-md">Dedicated Space for French Students</h2>
            <p className="lead mx-auto" style={{ maxWidth: '600px', color: 'var(--slate-600)' }}>
              Empowering the next generation of French speakers. Whether you're a high-schooler aiming for excellence or a university student targeting specialized certifications.
            </p>
          </div>

          <div className="hub-grid perspective-3d">
            {/* Pathway 1: Academic Achievement */}
            <div className="hub-card hub-card--academic animate-fadeUp tilt-effect">
              <div className="hub-card__icon-wrap">
                <FiBook className="hub-icon" />
              </div>
              <div className="hub-card__content">
                <h3 className="heading-2 mb-sm">Academic Achievement</h3>
                <p className="body-lg text-secondary mb-lg">
                  Master the curriculum with precision. We provide targeted support for DELF/DALF exams, academic literature, and essay writing excellence.
                </p>
                <ul className="hub-list mb-xl">
                  <li><FiCheckCircle className="text-gold" /> Exam-Focused Intensive Training</li>
                  <li><FiCheckCircle className="text-gold" /> Academic Writing & Grammar</li>
                  <li><FiCheckCircle className="text-gold" /> Literature & Cultural Analysis</li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Elite Academic Path</Link>
              </div>
            </div>

            {/* Pathway 2: Professional Excellence */}
            <div className="hub-card hub-card--professional animate-fadeUp delay-200 tilt-effect">
              <div className="hub-card__icon-wrap">
                <FiAward className="hub-icon" />
              </div>
              <div className="hub-card__content">
                <h3 className="heading-2 mb-sm">Professional Excellence</h3>
                <p className="body-lg text-secondary mb-lg">
                  Accelerate your career in the Francophone world. Specialized vocabulary for business, law, and diplomacy designed for ambitious students.
                </p>
                <ul className="hub-list mb-xl">
                  <li><FiUnlock className="text-gold" /> Career-Centered Vocabulary</li>
                  <li><FiUnlock className="text-gold" /> Business Etiquette & Networking</li>
                  <li><FiUnlock className="text-gold" /> Global Internship Preparation</li>
                </ul>
                <Link to="/contact" className="btn btn-outline">Professional Student Path</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEVELS ===== */}
      <section className="section levels-section reveal" id="levels">
        <div className="container text-center">
          <p className="section-label">Find Your Level</p>
          <h2 className="heading-1 mb-md">Courses for Every Stage</h2>
          <p className="lead text-secondary mb-xl" style={{ maxWidth: 600, margin: '0 auto var(--space-xl)' }}>
            Whether you're saying "bonjour" for the first time or polishing your Parisian accent, we have a path for you.
          </p>
          <div className="grid-3 perspective-3d">
            {levels.map((l, i) => (
              <div className="level-card-v2 tilt-effect" key={i} id={`level-card-${i}`}>
                <div className="level-icon-wrap" style={{ '--level-color': l.color }}>
                  {l.icon}
                </div>
                <div className="level-badge" style={{ background: l.color }}>{l.level}</div>
                <h3 className="heading-2 mt-md">{l.name}</h3>
                <p className="text-secondary mt-sm body-lg">{l.desc}</p>
                <div className="level-cta-wrap">
                  <Link to="/contact" className="btn btn-navy-minimal mt-lg" id={`level-cta-${i}`}>
                    Enroll Now <FiArrowRight className="ml-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRENCH PROGRAMS ===== */}
      <section className="section reveal" id="programs">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">French Language Programs</p>
            <h2 className="heading-1">Our Learning Path</h2>
          </div>
          <div className="program-grid perspective-3d">
            {frenchPrograms.map((p, i) => (
              <div className="program-card tilt-effect" key={i}>
                <span className="program-badge">{p.badge}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul>
                  {p.points.map((point, index) => (
                    <li key={index}><FiCheckCircle className="text-gold" /> {point}</li>
                  ))}
                </ul>
                <div className="program-buttons">
                  <Link to="/contact" className="btn btn-primary">
                    Enroll Now
                  </Link>
                  <button className="btn btn-outline">
                    Syllabus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section features-section reveal" id="features">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">Why MapleLingua</p>
            <h2 className="heading-1">Everything You Need to Become Fluent</h2>
          </div>
          <div className="grid-3 features-grid perspective-3d">
            {features.map((f, i) => (
              <div className="feature-card tilt-effect" key={i} id={`feature-${i}`}>
                <div className="feature-icon" style={{ color: 'var(--brand-primary)' }}>{f.icon}</div>
                <h3 className="heading-3 mt-md">{f.title}</h3>
                <p className="text-secondary mt-sm body-lg">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-section reveal" id="how-it-works">
        <div className="container">
          <div className="how-grid">
            <div className="how-text">
              <p className="section-label">How It Works</p>
              <h2 className="heading-1 mb-md">
                Your Fluency Journey in <span className="gradient-text">4 Simple Steps</span>
              </h2>
              <div className="steps">
                {[
                  { n: '01', title: 'Take a Free Assessment', desc: 'Our 5-minute level test places you in the perfect course, no guesswork.' },
                  { n: '02', title: 'Follow Your Personalized Plan', desc: 'AI-curated lessons adapt to your pace, interests, and learning style.' },
                  { n: '03', title: 'Practice with Real Tutors', desc: 'Book live 1-on-1 sessions with native French speakers anytime.' },
                  { n: '04', title: 'Track Progress & Celebrate', desc: 'Earn certificates, badges, and watch your fluency grow week by week.' },
                ].map((s, i) => (
                  <div className="step" key={i} id={`step-${i}`}>
                    <span className="step-num">{s.n}</span>
                    <div>
                      <h4 className="heading-3">{s.title}</h4>
                      <p className="text-secondary mt-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary btn-lg mt-lg" id="how-cta">
                Begin My Journey <FiArrowRight />
              </Link>
            </div>
            <div className="how-visual">
              <div className="visual-card-v3 animate-float">
                <div className="v3-card__header">
                  <div className="v3-card__user">
                    <div className="v3-avatar"><span>JD</span></div>
                    <div>
                      <p className="v3-user-name">Julian De Ville</p>
                      <p className="v3-user-status"><span className="dot-gold"></span> ACTIVE NOW</p>
                    </div>
                  </div>
                  <div className="v3-level-badge">B2 LEVEL</div>
                </div>

                <div className="v3-card__main">
                  <div className="v3-progress-ring">
                    <div className="v3-ring-content">
                      <span className="v3-percent">84%</span>
                      <span className="v3-label">FLUENCY</span>
                    </div>
                  </div>
                  <div className="v3-main-info">
                    <p className="v3-main-title">Path to Mastery</p>
                    <p className="v3-main-desc">You're in the top 5% of learners this month. Keep it up!</p>
                  </div>
                </div>

                <div className="v3-stats-grid">
                  <div className="v3-stat-box">
                    <FiMic className="v3-stat-icon" />
                    <div>
                      <p className="v3-stat-val">42h</p>
                      <p className="v3-stat-label">Speaking</p>
                    </div>
                  </div>
                  <div className="v3-stat-box">
                    <FiBookOpen className="v3-stat-icon" />
                    <div>
                      <p className="v3-stat-val">1.2k</p>
                      <p className="v3-stat-label">Words</p>
                    </div>
                  </div>
                  <div className="v3-stat-box">
                    <FiAward className="v3-stat-icon" />
                    <div>
                      <p className="v3-stat-val">12</p>
                      <p className="v3-stat-label">Badges</p>
                    </div>
                  </div>
                </div>

                <div className="v3-footer">
                  <div className="v3-badge-certified">
                    <FiCheckCircle /> CERTIFIED PROGRESS
                  </div>
                  <div className="v3-xp-bar">
                    <div className="v3-xp-fill" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section reveal" id="testimonials">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">What Learners Say</p>
            <h2 className="heading-1">Stories of Real Transformation</h2>
          </div>
          <div className="grid-3 perspective-3d">
            {testimonials.map((t, i) => (
              <div className="testimonial-card tilt-effect" key={i} id={`testimonial-${i}`}>
                <div className="testi-quote" style={{ opacity: 0.05 }}>"</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-rating">
                  {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <div className="testi-author">
                  <div className="avatar">{t.avatar}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOME CONTACT SECTION ===== */}
      <section className="home-contact-section reveal" id="home-contact">
        <div className="container">
          <div className="home-contact-grid">
            <div className="hc-info-side">
              <p className="badge-luxury mb-sm">CONNECT WITH EXCELLENCE</p>
              <h2 className="display-2 mb-md">Have Questions? <br />Let's <span className="gradient-text">Talk.</span></h2>
              <p className="lead mb-xl">
                Ready to begin your journey or need more details? Our elite team of advisors is here to guide you toward the perfect learning path.
              </p>

              <div className="hc-features">
                <div className="hc-feat-item">
                  <div className="hc-feat-icon"><FiMail /></div>
                  <div className="hc-feat-text">
                    <strong>Elite Support</strong>
                    <p>hello@maplelingua.ca</p>
                  </div>
                </div>
                <div className="hc-feat-item">
                  <div className="hc-feat-icon"><FiGlobe /></div>
                  <div className="hc-feat-text">
                    <strong>Global Access</strong>
                    <p>Learning from 20+ Countries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hc-form-side">
              <div className="hc-form-card">
                {status === 'success' ? (
                  <div className="hc-form-success">
                    <FiCheckCircle className="success-icon" />
                    <h3>Bientôt en Contact!</h3>
                    <p>Merci! We've received your message and will reach out within 24 hours.</p>
                    <button className="btn btn-primary mt-md" onClick={() => setStatus('idle')}>Send Another</button>
                  </div>
                ) : (
                  <form className="hc-form" onSubmit={handleSubmit}>
                    <div className="hc-form-group">
                      <label htmlFor="hc-name">Full Name</label>
                      <input
                        type="text"
                        id="hc-name"
                        name="name"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="hc-form-group">
                      <label htmlFor="hc-email">Email Address</label>
                      <input
                        type="email"
                        id="hc-email"
                        name="email"
                        placeholder="jean@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="hc-form-group">
                      <label htmlFor="hc-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="hc-phone"
                        name="phone"
                        placeholder="+33 1 23 45 67 89"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="hc-form-group">
                      <label htmlFor="hc-message">Your Message</label>
                      <textarea
                        id="hc-message"
                        name="message"
                        placeholder="How can we help you master French?"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <p className="hc-form-error"><FiAlertCircle /> Failed to send. Please try again.</p>
                    )}

                    <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : 'Connect Now'} <FiSend />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner reveal" id="cta-banner">
        <div className="container text-center">
          <p className="section-label" style={{ color: 'var(--brand-secondary)', display: 'flex', justifyContent: 'center' }}>
            <FiZap /> Limited Time Access
          </p>
          <h2 className="display-2 mb-md" style={{ color: 'var(--slate-900)' }}>
            Start Speaking French <br />
            <span className="gradient-text">in Just 30 Days</span>
          </h2>
          <p className="lead mb-lg" style={{ color: 'var(--slate-600)', maxWidth: 560, margin: '0 auto var(--space-lg)' }}>
            Join 12,000+ learners who chose MapleLingua. Your first two weeks are completely free — no credit card needed.
          </p>
          <div className="flex-center gap-md" style={{ flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" id="cta-banner-btn">
              <FiTarget /> Claim My Free Access
            </Link>
            <Link to="/blog" className="btn btn-outline btn-lg" id="cta-banner-blog">Read Our Blog</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
