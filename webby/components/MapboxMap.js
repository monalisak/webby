import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9rYW0iLCJhIjoiY21jNHFtdGY0MDQxdTJqcXl1cDVnN2o4ayJ9.m4JwjLJThaj1rFwDZTIosg';

export default function MapboxMap({ mapStyle = 'mapbox://styles/mapbox/satellite-v9' }) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const animationRef = useRef();
  const rotating = useRef(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [0, 0],
      zoom: 1.2,
      projection: 'globe',
      attributionControl: false,
    });
    mapRef.current = map;

    map.on('style.load', () => {
      map.setFog({});
    });

    // Animation function
    let lastTime = performance.now();
    function animateGlobe(time) {
      if (!mapRef.current || !rotating.current) return;
      const speed = 0.01; // degrees per ms (slower for smoothness)
      const dt = time - lastTime;
      lastTime = time;
      const center = map.getCenter();
      map.setCenter([center.lng + speed * dt, center.lat]);
      animationRef.current = requestAnimationFrame(animateGlobe);
    }
    rotating.current = true;
    animationRef.current = requestAnimationFrame(animateGlobe);

    // Stop rotation on user interaction
    const stopRotation = () => {
      if (rotating.current) {
        rotating.current = false;
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      }
    };
    map.on('mousedown', stopRotation);
    map.on('touchstart', stopRotation);
    map.on('wheel', stopRotation);
    map.on('move', stopRotation);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      map.remove();
    };
  }, [mapStyle]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '70vw',
        height: '70vh',
        borderRadius: '50%',
        margin: '2rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
        background: '#000',
      }}
    />
  );
} 