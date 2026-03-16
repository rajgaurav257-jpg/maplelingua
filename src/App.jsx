import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import './App.css';
import Admin from "./pages/admin";
import AdminLogin from "./pages/adminLogin";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && <Header />}
      <div className={`app-content ${loading ? 'app-content--hidden' : 'app-content--visible'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--grad-hero)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1.5rem',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <span style={{ fontSize: '5rem' }}>🇫🇷</span>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '3rem' }}>
        Oops! <span style={{ color: 'var(--gold-400)' }}>404</span>
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '440px' }}>
        Cette page n'existe pas. (This page doesn't exist.) Let's get you back on track!
      </p>
      <a href="/" className="btn btn-primary btn-lg">← Return Home</a>
    </main>
  );
}
