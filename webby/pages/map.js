import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import mapboxgl from 'mapbox-gl';
import { photoAlbums } from '../lib/photoAlbums';
import PhotoGallery from '../components/PhotoGallery';

// Set Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoibW9rYW0iLCJhIjoiY21jNHFtdGY0MDQxdTJqcXl1cDVnN2o4ayJ9.m4JwjLJThaj1rFwDZTIosg';

export default function PhotoMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0, 20],
      zoom: 2,
      attributionControl: false,
      customAttribution: false
    });

    // Disable map controls on mobile
    if (window.innerWidth < 768) {
      map.current.dragRotate.disable();
      map.current.touchZoomRotate.disableRotation();
    }

    map.current.on('load', () => {
      // Add markers for each photo album
      photoAlbums.forEach((album) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.cursor = 'pointer';
        el.style.backgroundColor = '#FB7233';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        el.style.transition = 'transform 0.2s ease';
        el.style.position = 'relative';

        // Add a small white dot in the center
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.top = '50%';
        dot.style.left = '50%';
        dot.style.transform = 'translate(-50%, -50%)';
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.backgroundColor = 'white';
        dot.style.borderRadius = '50%';
        el.appendChild(dot);

        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.2)';
        });

        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
        });

        el.addEventListener('click', () => {
          setSelectedAlbum(album);
        });

        const marker = new mapboxgl.Marker(el)
          .setLngLat(album.location)
          .addTo(map.current);

        markers.current.push(marker);
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="h-screen w-full relative">
      {/* Map container */}
      <div ref={mapContainer} className="h-full w-full" />
      
      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <Link 
          href="/"
          className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 font-serif"
        >
          ← back
        </Link>
      </div>

      {/* Album popup */}
      {selectedAlbum && (
        <div className="absolute top-20 left-4 right-4 md:left-auto md:right-4 md:w-80 z-10">
          <div className="bg-white rounded-lg shadow-xl p-4 font-serif">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedAlbum.title}
              </h3>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4">
              <img
                src={selectedAlbum.coverImage}
                alt={selectedAlbum.title}
                className="w-full h-32 object-cover rounded"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
            
            <button
              onClick={openGallery}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-200"
            >
              view album ({selectedAlbum.images.length} photos)
            </button>
          </div>
        </div>
      )}

      {/* Photo Gallery */}
      <PhotoGallery
        images={selectedAlbum?.images || []}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        title={selectedAlbum?.title || ''}
      />
    </div>
  );
} 