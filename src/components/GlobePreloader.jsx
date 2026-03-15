import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

export default function GlobePreloader({ heroMode = true }) {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      
      // Configure the initial camera position to focus on France / Europe
      // Altitude 1.8 gives a good zoom level for the hero section
      globeEl.current.pointOfView({ lat: 46.2276, lng: 2.2137, altitude: 1.8 });
    }
  }, []);

  return (
    <div className={`globe-wrapper ${heroMode ? 'globe-hero' : ''}`} style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_4096.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)" // Transparent background
        atmosphereColor="#c5a034" // Matches the brand's gold accent
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
