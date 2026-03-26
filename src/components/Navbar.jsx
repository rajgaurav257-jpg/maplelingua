import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
    setLangOpen(false);
  };

  const closeAll = () => {
    setIsOpen(false);
    setLangOpen(false);
  };

  const handleLangChange = (code) => {
    setCurrentLang(code);
    if (window.changeLanguage) {
      window.changeLanguage(code.toLowerCase());
    }
    setLangOpen(false);
  };

  return (
    <nav ref={menuRef}>
      <div className="container nav-content">

        {/* Hamburger — always first in DOM */}
        <button
          className="nav-mobile-toggle"
          onPointerUp={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>

        {/* Desktop left links */}
        <div className="nav-left">
          <Link to="/about" onClick={closeAll}>About us</Link>
          <Link to="/blog" onClick={closeAll}>Blog</Link>
          <div className="nav-dropdown">
            <Link to="/courses" className="nav-drop-trigger" onClick={closeAll}>
              Courses
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="dropdown-menu">
              <Link to="/courses/a1" onClick={closeAll}>A1 - Beginner</Link>
              <Link to="/courses/a2" onClick={closeAll}>A2 - Elementary</Link>
              <Link to="/courses/b1" onClick={closeAll}>B1 - Intermediate</Link>
              <Link to="/courses/b2" onClick={closeAll}>B2 - Upper-Int</Link>
              <div className="dropdown-divider"></div>
              <Link to="/courses" onClick={closeAll}>All Programs →</Link>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="logo-center">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeAll}>maplelingua</Link>
        </div>

        {/* Right: Lang + Enroll */}
        <div className="nav-right desktop-enroll">
          <div className="lang-switcher" style={{ position: 'relative' }}>
            <button
              className="lang-btn"
              onClick={() => setLangOpen(prev => !prev)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem', opacity: 0.8, transition: '0.3s' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{currentLang}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`lang-dropdown ${langOpen ? 'show' : ''}`}>
              <button onClick={() => handleLangChange('EN')}>🇬🇧 English</button>
              <button onClick={() => handleLangChange('FR')}>🇫🇷 Français</button>
              <button onClick={() => handleLangChange('ES')}>🇪🇸 Español</button>
              <button onClick={() => handleLangChange('DE')}>🇩🇪 Deutsch</button>
              <button onClick={() => handleLangChange('HI')}>🇮🇳 हिन्दी</button>
              <button onClick={() => handleLangChange('ZH-CN')}>🇨🇳 中文</button>
              <button onClick={() => handleLangChange('AR')}>🇸🇦 العربية</button>
              <button onClick={() => handleLangChange('PT')}>🇧🇷 Português</button>
              <button onClick={() => handleLangChange('IT')}>🇮🇹 Italiano</button>
              <button onClick={() => handleLangChange('JA')}>🇯🇵 日本語</button>
              <button onClick={() => handleLangChange('KO')}>🇰🇷 한국어</button>
              <button onClick={() => handleLangChange('RU')}>🇷🇺 Русский</button>
              <button onClick={() => handleLangChange('TR')}>🇹🇷 Türkçe</button>
              <button onClick={() => handleLangChange('NL')}>🇳🇱 Nederlands</button>
            </div>
          </div>
          <Link to="/contact">
            <button className="btn btn-red">Enroll</button>
          </Link>
        </div>
      </div>

      {/* Mobile slide-in menu — rendered OUTSIDE nav-content to avoid layout conflicts */}
      <div className={`mobile-menu-overlay ${isOpen ? 'mobile-open' : ''}`} aria-hidden={!isOpen}>
        <Link to="/about" onClick={closeAll}>About us</Link>
        <Link to="/blog" onClick={closeAll}>Blog</Link>
        <Link to="/courses" onClick={closeAll}>Courses</Link>
        <Link to="/courses/a1" onClick={closeAll}>A1 - Beginner</Link>
        <Link to="/courses/a2" onClick={closeAll}>A2 - Elementary</Link>
        <Link to="/courses/b1" onClick={closeAll}>B1 - Intermediate</Link>
        <Link to="/courses/b2" onClick={closeAll}>B2 - Upper-Int</Link>
        <Link to="/contact" className="mobile-enroll-link" onClick={closeAll}>Enroll Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
