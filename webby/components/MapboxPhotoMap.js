import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9rYW0iLCJhIjoiY21jNHFtdGY0MDQxdTJqcXl1cDVnN2o4ayJ9.m4JwjLJThaj1rFwDZTIosg';

export default function MapboxPhotoMap({ albumLocations, selectedCity, onSelectCity, mapStyle, pinColorWithPhotos = '#3ec6c6', pinColorNoPhotos = '#b2a177' }) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle || 'mapbox://styles/mokam/cmcdh9ths04jz01smfwxv0lh9',
      center: [10, 30],
      zoom: 1.3,
      projection: 'mercator', // flat map
      attributionControl: false,
    });
    mapRef.current = map;

    // Add pin-style markers
    markersRef.current = albumLocations.map(loc => {
      const el = document.createElement('div');
      el.className = 'album-marker';
      el.style.width = '28px';
      el.style.height = '28px';
      el.style.background = 'none';
      el.style.cursor = 'pointer';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      const pinColor = loc.hasPhotos ? pinColorWithPhotos : pinColorNoPhotos;
      el.innerHTML = `
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.25 12 7.25 12s7.25-6.75 7.25-12c0-4.42-3.58-8-8-8zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" fill="${pinColor}" stroke="#fff" stroke-width="1.5"/>
        </svg>
      `;
      el.title = loc.label;
      el.addEventListener('click', () => loc.hasPhotos && onSelectCity(loc.city));
      return new mapboxgl.Marker(el).setLngLat(loc.coords).addTo(map);
    });
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      map.remove();
    };
    // eslint-disable-next-line
  }, [albumLocations, onSelectCity, selectedCity, mapStyle, pinColorWithPhotos, pinColorNoPhotos]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div
        ref={mapContainer}
        style={{
          width: '100vw',
          maxWidth: '1600px',
          height: '60vh',
          minHeight: '350px',
          margin: '2rem 0',
          borderRadius: '1.5rem',
          boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
          background: '#000',
          display: 'block',
        }}
      />
    </div>
  );
} 