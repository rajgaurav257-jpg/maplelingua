import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import './GlobePreloader.css';

const GlobePreloader = ({ onComplete }) => {
  const globeRef = useRef();
  const [coords, setCoords] = useState({ lat: 20, lng: 0 }); // Default
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // 1. Fetch Location by IP
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.latitude && data.longitude) {
          setCoords({ lat: data.latitude, lng: data.longitude });
        }
      })
      .catch(err => console.error("Location fetch failed:", err));

    // 2. Initial Setup
    const globe = globeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 4.0; // Faster spin
      globe.pointOfView({ lat: 20, lng: 0, altitude: 1.8 }, 0);
    }

    // 3. Stage 1 Lifecycle: Wait, then Zoom (Faster)
    const timer = setTimeout(() => {
      if (globe) {
        setIsZoomed(true);
        // Cinematic Zoom-In: Faster (1.5s)
        globe.pointOfView(
          { lat: coords.lat, lng: coords.lng, altitude: 0.1 }, 
          1500 
        );
        
        // Hand-off to Stage 2: Faster
        setTimeout(onComplete, 1800); 
      }
    }, 1500); // Shorter wait before zoom

    return () => clearTimeout(timer);
  }, [onComplete, coords.lat, coords.lng]);

  return (
    <div className={`globe-preloader ${isZoomed ? 'zooming' : ''}`}>
      <div className="globe-overlay" />
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showAtmosphere={true}
        atmosphereColor="#ffffff"
        atmosphereAltitude={0.15}
      />
      <div className="location-ping">
        <div className="ping-text">LOCATING ACCESS POINT...</div>
      </div>
    </div>
  );
};

export default GlobePreloader;
