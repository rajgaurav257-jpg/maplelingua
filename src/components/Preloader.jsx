import React, { useState, useEffect } from 'react';
import './Preloader.css';



export default function Preloader({ onComplete }) {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    // Start merger animation after a short delay
    const mergeTimer = setTimeout(() => {
      setMerged(true);
    }, 500);

    // Final reveal after merger completes
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(mergeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader preloader--logos`}>
      <div className="preloader__inner">
        <div className={`merger-container ${merged ? 'merged' : ''}`}>
          <div className="merger-line"></div>
          <div className="merger-word maple">MAPLE</div>
          <div className="merger-word lingua">LINGUA</div>
        </div>
      </div>
    </div>
  );
}
