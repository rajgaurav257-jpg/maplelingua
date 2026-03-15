import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

export default function GlobePreloader({ heroMode = true }) {
  const globeEl = useRef();
  const [globeSize, setGlobeSize] = React.useState(700);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setGlobeSize(320);
      } else if (width < 768) {
        setGlobeSize(450);
      } else if (width < 1024) {
        setGlobeSize(550);
      } else {
        setGlobeSize(700);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      
      // Configure the initial camera position to focus on France / Europe
      const width = window.innerWidth;
      const altitude = width < 768 ? 2.5 : 1.8; // Zoom out more on mobile
      globeEl.current.pointOfView({ lat: 46.2276, lng: 2.2137, altitude });
    }
  }, [globeSize]);

  return (
    <div className={`globe-wrapper ${heroMode ? 'globe-hero' : ''}`} style={{ width: '100%', height: `${globeSize}px`, cursor: 'grab', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Globe
        ref={globeEl}
        width={globeSize}
        height={globeSize}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)" 
        atmosphereColor="#c5a034"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
