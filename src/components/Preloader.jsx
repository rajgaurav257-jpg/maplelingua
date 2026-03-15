import React, { useState, useEffect } from 'react';
import './Preloader.css';
import logo from '../assets/Maple_logo.webp';

export default function Preloader({ onComplete }) {
  const [merged, setMerged] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Start merger animation after a short delay
    const mergeTimer = setTimeout(() => {
      setMerged(true);
    }, 500);

    // Show logo after merger completes (approx 1s after merge starts)
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

    // Final reveal after logo animation completes
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(mergeTimer);
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className="preloader preloader--logos">
      <div className="preloader__inner">
        <div className={`merger-container ${merged ? 'merged' : ''} ${showLogo ? 'logo-active' : ''}`}>
          <div className="logo-reveal">
            <img src={logo} alt="MapleLingua Logo" className="preloader__logo" />
          </div>
          <div className="merger-words">
            <div className="merger-word maple">MAPLE</div>
            <div className="merger-word lingua">LINGUA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
