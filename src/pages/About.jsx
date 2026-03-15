import { Link } from 'react-router-dom';
import { 
  FiAward, 
  FiGlobe, 
  FiHeart, 
  FiSearch, 
  FiZap,
  FiStar,
  FiCheckCircle
} from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineAcademicCap } from 'react-icons/hi';
import './About.css';

const values = [
  { icon: <HiOutlineAcademicCap />, title: 'Pedagogical Excellence', desc: 'Our curricula are crafted by certified linguists and language acquisition experts, aligned to CEFR international standards.' },
  { icon: <HiOutlineGlobeAlt />, title: 'Cultural Immersion', desc: 'We believe language is the vessel of culture. Every lesson is woven with French art, cuisine, history, and contemporary life.' },
  { icon: <FiHeart />, title: 'Learner First', desc: 'Every decision we make begins with one question: "How does this serve our learners?" We are truly dedicated to your success.' },
  { icon: <FiSearch />, title: 'Science-Backed Methods', desc: 'Spaced repetition, active recall, comprehensible input — our approach is grounded in decades of language learning research.' },
];

const team = [
  { name: 'Sophie Beaumont', role: 'Lead Curriculum Designer', bio: 'Former Sorbonne lecturer with 12 years of French pedagogy experience.', initials: 'SB', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Arjun Mehta', role: 'CEO & Co-founder', bio: 'Passionate polyglot and EdTech entrepreneur who speaks 6 languages fluently.', initials: 'AM', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Claire Dubois', role: 'Head of Tutoring', bio: 'Native Parisian tutor with expertise in accent reduction and conversational French.', initials: 'CD', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Riya Kapoor', role: 'Technology & AI Lead', bio: 'ML engineer building the adaptive learning engine that personalizes every lesson.', initials: 'RK', flag: 'https://flagcdn.com/w40/in.png' },
];

const milestones = [
  { year: '2020', event: 'MapleLingua founded in Montreal with a vision to make French learning elegant and accessible.' },
  { year: '2021', event: 'Launched our first 50 structured courses, reaching 1,000 learners in 3 months.' },
  { year: '2022', event: 'Introduced Live Tutor sessions and AI pronunciation coaching. Crossed 5,000 subscribers.' },
  { year: '2023', event: 'Expanded to 40+ native French tutors and launched cultural immersion content series.' },
  { year: '2024', event: 'Hit 12,000 active learners across 45+ countries. Launched DELF/DALF prep courses.' },
  { year: '2025', event: 'Redesigned platform with adaptive AI engine. Ranked #1 French learning site in Canada.' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="page-hero about-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge badge-gold mb-md" style={{ display: 'inline-flex' }}><FiZap /> Our Story</div>
          <h1 className="display-2 mb-md" style={{ color: 'var(--slate-900)' }}>
            Building the World's Most<br />
            <span className="gradient-text">Elegant French Platform</span>
          </h1>
          <p className="lead" style={{ color: 'var(--slate-600)', maxWidth: 580, margin: '0 auto' }}>
            Born in Canada, inspired by France — MapleLingua was founded by language lovers who believed that learning French should be as beautiful as the language itself.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div className="mission-text">
              <p className="section-label">Our Mission</p>
              <h2 className="heading-1 mb-md">
                French for Every <span className="gradient-text">Ambitious Learner</span>
              </h2>
              <p className="body-lg text-secondary mb-md">
                At MapleLingua, we believe that French is more than vocabulary and grammar — it's a doorway into one of the world's richest cultures, literatures, and histories.
              </p>
              <p className="body-lg text-secondary mb-md">
                Our mission is to deliver a French learning experience so compelling, so beautiful, and so effective that our students don't just learn the language — they fall in love with it. We combine expert pedagogy with cutting-edge technology and genuine human connection to make fluency not just possible, but inevitable.
              </p>
              <p className="body-lg text-secondary mb-lg">
                Whether you're a curious beginner, a professional seeking French business skills, or a heritage speaker reconnecting with your roots — MapleLingua is your home.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg" id="about-mission-cta">Join Our Community</Link>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mc-flag">
                  <img src="https://flagcdn.com/w80/fr.png" alt="French Flag" style={{ width: '40px', borderRadius: '4px' }} />
                </div>
                <blockquote className="mc-quote">
                  "Une langue différente est une vision différente de la vie."
                </blockquote>
                <p className="mc-translation">"A different language is a different vision of life."</p>
                <p className="mc-author">— Federico Fellini</p>
                <div className="mc-divider" />
                <div className="mc-stats">
                  <div className="mc-stat"><span className="gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'1.8rem', fontWeight:700}}>45+</span><span>Countries</span></div>
                  <div className="mc-stat"><span className="gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'1.8rem', fontWeight:700}}>12K+</span><span>Learners</span></div>
                  <div className="mc-stat"><span className="gradient-text" style={{fontFamily:'var(--font-display)',fontSize:'1.8rem', fontWeight:700}}>500+</span><span>Lessons</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">What We Stand For</p>
            <h2 className="heading-1">Our Core Values</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div className="value-card" key={i} id={`value-${i}`}>
                <div className="value-icon" style={{ color: 'var(--brand-primary)' }}>{v.icon}</div>
                <h3 className="heading-3 mt-md">{v.title}</h3>
                <p className="text-secondary mt-sm body-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section timeline-section" style={{ background: 'var(--pearl-500)' }}>
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">Our Journey</p>
            <h2 className="heading-1" style={{ color: 'var(--slate-900)' }}>From Startup to Category Leader</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`} id={`timeline-${i}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p className="timeline-event" style={{ color: 'var(--slate-600)' }}>{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-xl">
            <p className="section-label">The Experts</p>
            <h2 className="heading-1">Meet Our Team</h2>
          </div>
          <div className="grid-4">
            {team.map((t, i) => (
              <div className="team-card card" key={i} id={`team-${i}`}>
                <div className="team-avatar">
                  {t.initials}
                  <img src={t.flag} alt="Flag" className="team-flag" style={{ width: '24px', height: '16px', borderRadius: '2px', position: 'absolute', bottom: '-5px', right: '-5px', border: '1px solid white' }} />
                </div>
                <h3 className="heading-3 mt-md">{t.name}</h3>
                <p className="text-gold body-sm">{t.role}</p>
                <p className="text-secondary body-sm mt-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <h2 className="display-2 mb-md" style={{ color: 'var(--slate-900)' }}>Ready to Transform Your French?</h2>
          <p className="lead mb-lg" style={{ color: 'var(--slate-600)', maxWidth: 520, margin: '0 auto var(--space-lg)' }}>
            Join a community of ambitious learners and start speaking French with confidence.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg" id="about-cta-btn">Start Your Free Trial</Link>
        </div>
      </section>
    </main>
  );
}
