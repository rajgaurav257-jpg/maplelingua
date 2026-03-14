import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Learn: [
    { label: 'Beginner French', to: '/' },
    { label: 'Intermediate', to: '/' },
    { label: 'Advanced', to: '/' },
    { label: 'Business French', to: '/' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'Careers', to: '/' },
  ],
  Resources: [
    { label: 'Free Lessons', to: '/' },
    { label: 'Vocabulary Guide', to: '/' },
    { label: 'Grammar Tips', to: '/' },
    { label: 'French Culture', to: '/blog' },
  ],
};

const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'Twitter', icon: '🐦', href: '#' },
  { label: 'LinkedIn', icon: '💼', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Top CTA strip */}
      <div className="footer__cta-strip">
        <div className="container">
          <div className="footer__cta-inner">
            <div>
              <p className="section-label" style={{ color: 'var(--gold-400)' }}>Ready to Begin?</p>
              <h2 className="heading-1 text-white">Your French Journey Starts Today</h2>
            </div>
            <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg" id="footer-cta-primary">Get Started Free</Link>
              <Link to="/about" className="btn btn-outline btn-lg" id="footer-cta-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Col */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo" id="footer-logo">
                <span>🍁</span>
                <span className="logo-text">Maple<span className="logo-accent">Lingua</span></span>
              </Link>
              <p className="footer__tagline">
                Premium French language education, crafted for modern learners who value elegance, culture, and fluency.
              </p>
              <div className="footer__socials">
                {socials.map(s => (
                  <a key={s.label} href={s.href} id={`social-${s.label.toLowerCase()}`} className="social-btn" title={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="footer__col">
                <h4 className="footer__col-heading">{heading}</h4>
                <ul className="footer__links">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link to={link.to} className="footer__link">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copy">
              © {year} MapleLingua. All rights reserved. Made with 🍁 &amp; ❤️ in Canada.
            </p>
            <div className="footer__legal">
              <a href="#" className="footer__link" id="footer-privacy">Privacy Policy</a>
              <a href="#" className="footer__link" id="footer-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
