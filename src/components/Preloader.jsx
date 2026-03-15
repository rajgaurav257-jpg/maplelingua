import React, { useState, useEffect } from 'react';
import GlobePreloader from './GlobePreloader';
import './Preloader.css';



export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(1); // 1: Globe, 2: Logos
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    if (stage === 2) {
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
    }
  }, [stage, onComplete]);

  if (stage === 1) {
    return <GlobePreloader onComplete={() => setStage(2)} />;
  }

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
