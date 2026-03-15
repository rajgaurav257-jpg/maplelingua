import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Maple_logo.webp';
import './Header.css';


const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="container header__inner">
        {/* 1. Logo Left */}
        <Link to="/" className="header__logo" id="nav-logo">
          <img src={logo} alt="MapleLingua Logo" className="logo-img" />
          <span className="logo-text-v2">MAPLE<span className="logo-accent-v2">LINGUA</span></span>
        </Link>

        {/* 2. Navigation Links (Center-Left) */}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} id="main-nav">
          <div className="nav-links-wrap">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-v2 ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile-only actions */}
          <div className="header__actions-mobile">
            <Link to="/login" className="login-link-mobile">Log In</Link>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Get Started
            </Link>
          </div>
        </nav>

        {/* 3. Actions Right (Desktop Only) */}
        <div className="header__actions-v2 desktop-only">
          <Link to="/login" className="login-link">Log In</Link>
          <Link to="/contact" className="btn btn-primary btn-sm" id="nav-cta">
            Get Started
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          id="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
