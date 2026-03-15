import { Link } from 'react-router-dom';
import { 
  FiTarget, 
  FiMic, 
  FiSmartphone, 
  FiAward, 
  FiCheckCircle, 
  FiUnlock, 
  FiArrowRight,
  FiZap,
  FiBookOpen,
  FiStar,
  FiMail
} from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineChartBar } from 'react-icons/hi';
import './Home.css';

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
  { level: 'A1–A2', name: 'Débutant', desc: 'Greetings, numbers, everyday phrases', color: '#4CAF50' },
  { level: 'B1–B2', name: 'Intermédiaire', desc: 'Travel, work, culture & conversation', color: '#C9A84C' },
  { level: 'C1–C2', name: 'Avancé', desc: 'Fluent discourse, literature & business', color: '#9C27B0' },
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
  return (
    <main className="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        {/* Decorative orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        <div className="container hero__content">
          <div className="hero__text animate-fadeUp">
            <div className="badge badge-gold mb-md">
              <HiOutlineGlobeAlt /> Premier French Learning Platform
            </div>
            <h1 className="display-1 hero__heading" style={{ color: 'var(--slate-900)' }}>
              Speak French with
              <br />
              <em className="gradient-text">Confidence & Grace</em>
            </h1>
            <p className="lead hero__subtext">
              MapleLingua blends world-class pedagogy with immersive French culture — giving you the language, the accent, and the elegance to truly <em>belong</em> in the French-speaking world.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
                <FiZap /> Start Free Today
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg" id="hero-cta-secondary">
                Discover Our Story
              </Link>
            </div>

            {/* Trust stamps */}
            <div className="hero__trust">
              <div className="trust-item">
                <div className="trust-stars">
                  <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                </div>
                <span>4.9 / 5 from 2,400+ reviews</span>
              </div>
              <span className="trust-divider">|</span>
              <div className="trust-item"><FiUnlock /> No credit card required</div>
              <span className="trust-divider">|</span>
              <div className="trust-item"><FiCheckCircle /> Free 14-day trial</div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hero__card animate-fadeUp delay-300">
            <div className="hero-card">
              <div className="hero-card__header">
                <div className="hero-card__flag">
                  <img src="https://flagcdn.com/w80/fr.png" alt="French Flag" style={{ width: '32px', borderRadius: '4px' }} />
                </div>
                <div>
                  <div className="hero-card__label">Today's Lesson</div>
                  <div className="hero-card__title">Les Salutations</div>
                </div>
                <span className="badge badge-gold">A1</span>
              </div>
              <div className="hero-card__phrase">
                <div className="phrase-row">
                  <span className="phrase-fr">Bonjour !</span>
                  <span className="phrase-en">Good morning!</span>
                </div>
                <div className="phrase-row">
                  <span className="phrase-fr">Comment allez-vous ?</span>
                  <span className="phrase-en">How are you?</span>
                </div>
                <div className="phrase-row">
                  <span className="phrase-fr">Enchanté(e) !</span>
                  <span className="phrase-en">Pleased to meet you!</span>
                </div>
                <div className="phrase-row">
                  <span className="phrase-fr">Au revoir !</span>
                  <span className="phrase-en">Goodbye!</span>
                </div>
              </div>
              <div className="hero-card__progress">
                <span>Lesson Progress</span>
                <span>78%</span>
              </div>
              <div className="hero-card__bar">
                <div className="hero-card__bar-fill" style={{ width: '78%' }} />
              </div>
              <div className="hero-card__stats">
                <div className="hc-stat"><FiZap className="text-gold" /> 12-day streak</div>
                <div className="hc-stat"><FiBookOpen className="text-indigo" /> 48 words learned</div>
                <div className="hc-stat"><FiStar className="text-gold" /> 320 XP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <div className="scroll-mouse"><div className="scroll-dot" /></div>
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

      {/* ===== LEVELS ===== */}
      <section className="section" id="levels">
        <div className="container text-center">
          <p className="section-label">Find Your Level</p>
          <h2 className="heading-1 mb-md">Courses for Every Stage</h2>
          <p className="lead text-secondary mb-xl" style={{ maxWidth: 600, margin: '0 auto var(--space-xl)' }}>
            Whether you're saying "bonjour" for the first time or polishing your Parisian accent, we have a path for you.
          </p>
          <div className="grid-3">
            {levels.map((l, i) => (
              <div className="level-card card" key={i} id={`level-card-${i}`}>
                <div className="level-badge" style={{ background: l.color }}>{l.level}</div>
                <h3 className="heading-2 mt-md">{l.name}</h3>
                <p className="text-secondary mt-sm">{l.desc}</p>
                <Link to="/contact" className="btn btn-navy mt-md" style={{ display: 'inline-flex' }} id={`level-cta-${i}`}>
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRENCH PROGRAMS ===== */}
      <section className="section" id="programs">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">French Language Programs</p>
            <h2 className="heading-1">Our Learning Path</h2>
          </div>
          <div className="program-grid">
            {frenchPrograms.map((p, i) => (
              <div className="program-card" key={i}>
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
      <section className="section features-section" id="features">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">Why MapleLingua</p>
            <h2 className="heading-1">Everything You Need to Become Fluent</h2>
          </div>
          <div className="grid-3 features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i} id={`feature-${i}`}>
                <div className="feature-icon" style={{ color: 'var(--brand-primary)' }}>{f.icon}</div>
                <h3 className="heading-3 mt-md">{f.title}</h3>
                <p className="text-secondary mt-sm body-lg">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-section" id="how-it-works">
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
              <div className="visual-card animate-float">
                <div className="vc-top">
                  <HiOutlineGlobeAlt className="vc-flag text-gold" />
                  <span className="vc-title">Weekly Summary</span>
                </div>
                <div className="vc-bars">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => {
                    const heights = [60, 85, 45, 90, 70, 55, 80];
                    return (
                      <div className="vc-bar-wrap" key={d}>
                        <div
                          className="vc-bar"
                          style={{ height: `${heights[i]}%`, opacity: i === 3 ? 1 : 0.6 }}
                        />
                        <span className="vc-day">{d}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="vc-footer">
                  <span>🏆 Best week yet!</span>
                  <span className="text-gold">+24% progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">What Learners Say</p>
            <h2 className="heading-1">Stories of Real Transformation</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i} id={`testimonial-${i}`}>
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

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" id="cta-banner">
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
