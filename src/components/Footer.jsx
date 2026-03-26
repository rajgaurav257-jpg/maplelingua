import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Part: Stay in touch */}
        <div className="footer-top">
          <div className="stay-in-touch">
            <h3>Stay in touch</h3>
            <p>Get updates on new courses and language tips</p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input type="email" placeholder="Your email" />
              <button className="btn btn-subscribe">Subscribe Now</button>
            </div>
            <p className="privacy-notice">By subscribing you agree to our <Link to="/info?page=Privacy Policy" style={{color: 'inherit', textDecoration: 'underline'}}>Privacy Policy</Link></p>
          </div>
        </div>

        {/* Middle Part: Links */}
        <div className="footer-middle">
          <div className="footer-brand">
            <Link to="/" className="logo-center" style={{fontSize: '2.5rem', textDecoration: 'none', color: '#fff'}}>maplelingua</Link>
            <p style={{color: 'var(--text-grey)', marginTop: '1rem', maxWidth: '300px'}}>The world's premier French language academy since 2015.</p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/blog">Expert Blog</Link></li>
                <li><Link to="/info?page=Resources">Free Resources</Link></li>
                <li><Link to="/info?page=Pricing">Pricing Plans</Link></li>
                <li><Link to="/faq">Student FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">News & Press</Link></li>
                <li><Link to="/partners">Partnerships</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><Link to="/info?page=Help Center">Help center</Link></li>
                <li><Link to="/info?page=Documentation">Platform Docs</Link></li>
                <li><Link to="/info?page=Community">Community Forum</Link></li>
                <li><Link to="/info?page=Status">System Status</Link></li>
                <li><Link to="/contact">Report Issues</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter / X</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/info?page=Privacy Policy">Privacy Policy</Link></li>
                <li><Link to="/info?page=Terms of Service">Terms of Service</Link></li>
                <li><Link to="/info?page=Cookies">Cookie Settings</Link></li>
                <li><Link to="/info?page=Accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Part: Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2025 Global French Academy. All rights reserved.</p>
            <div className="bottom-links">
              <Link to="/info?page=Privacy Policy">Privacy</Link>
              <Link to="/info?page=Terms">Terms</Link>
              <Link to="/info?page=Cookies">Cookies</Link>
            </div>
          </div>
          <div className="footer-social-icons">
            <a href="#fb" aria-label="Facebook"><i className="soc-icon">f</i></a>
            <a href="#ig" aria-label="Instagram"><i className="soc-icon">ig</i></a>
            <a href="#li" aria-label="LinkedIn"><i className="soc-icon">in</i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
