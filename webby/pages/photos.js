import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import PhotoAlbumModal from '../components/PhotoAlbumModal'

const khaki = '#f0e6d2';
const darkBlue = '#232946';

const photoLocations = [
  // Locations with photos (teal blue)
  { city: 'london', label: 'London', coords: [-0.1276, 51.5074], hasPhotos: true },
  { city: 'istanbul', label: 'Istanbul', coords: [28.9784, 41.0082], hasPhotos: true },
  { city: 'madrid', label: 'Madrid', coords: [-3.7038, 40.4168], hasPhotos: true },
  { city: 'barcelona', label: 'Barcelona', coords: [2.1734, 41.3851], hasPhotos: true },
  { city: 'mallorca', label: 'Mallorca', coords: [2.7350, 39.6953], hasPhotos: true },
  { city: 'valencia', label: 'Valencia', coords: [-0.3763, 39.4699], hasPhotos: true },
  { city: 'amsterdam', label: 'Amsterdam', coords: [4.9041, 52.3676], hasPhotos: true },
  { city: 'moscow', label: 'Moscow', coords: [37.6173, 55.7558], hasPhotos: true },
  { city: 'new york', label: 'New York', coords: [-74.006, 40.7128], hasPhotos: true },
  { city: 'palestine', label: 'Palestine', coords: [35.2332, 31.9522], hasPhotos: true },
  { city: 'oman', label: 'Oman', coords: [58.5453, 23.5859], hasPhotos: true },
  // Locations without photos (gray)
  { city: 'helsinki', label: 'Helsinki', coords: [24.9384, 60.1699], hasPhotos: false },
  { city: 'stockholm', label: 'Stockholm', coords: [18.0686, 59.3293], hasPhotos: false },
  { city: 'sochi', label: 'Sochi', coords: [39.7303, 43.6028], hasPhotos: false },
  { city: 'langkawi', label: 'Langkawi', coords: [99.7319, 6.3529], hasPhotos: false },
  { city: 'hanoi', label: 'Hanoi', coords: [105.8542, 21.0285], hasPhotos: false },
  { city: 'bali', label: 'Bali', coords: [115.1889, -8.4095], hasPhotos: false },
  { city: 'hongkong', label: 'Hong Kong', coords: [114.1694, 22.3193], hasPhotos: false },
  { city: 'chennai', label: 'Chennai', coords: [80.2707, 13.0827], hasPhotos: false },
  { city: 'thehague', label: 'The Hague', coords: [4.3007, 52.0705], hasPhotos: false },
  { city: 'maastricht', label: 'Maastricht', coords: [5.6909, 50.8514], hasPhotos: false },
  { city: 'paris', label: 'Paris', coords: [2.3522, 48.8566], hasPhotos: false },
  { city: 'rome', label: 'Rome', coords: [12.4964, 41.9028], hasPhotos: false },
  { city: 'venice', label: 'Venice', coords: [12.3155, 45.4408], hasPhotos: false },
  { city: 'krakow', label: 'Krakow', coords: [19.9445, 50.0647], hasPhotos: false },
  { city: 'lisbon', label: 'Lisbon', coords: [-9.1393, 38.7223], hasPhotos: false },
  { city: 'tignes', label: 'Tignes', coords: [6.9247, 45.4692], hasPhotos: false },
  { city: 'berlin', label: 'Berlin', coords: [13.4050, 52.5200], hasPhotos: false },
  { city: 'budapest', label: 'Budapest', coords: [19.0402, 47.4979], hasPhotos: false },
  { city: 'prague', label: 'Prague', coords: [14.4378, 50.0755], hasPhotos: false },
  { city: 'manila', label: 'Manila', coords: [120.9842, 14.5995], hasPhotos: false },
  { city: 'estonia', label: 'Estonia', coords: [25.0136, 58.5953], hasPhotos: false },
  { city: 'antwerp', label: 'Antwerp', coords: [4.4028, 51.2194], hasPhotos: false },
  { city: 'levi', label: 'Levi', coords: [24.8072, 67.8057], hasPhotos: false },
];

const MapboxPhotoMap = dynamic(() => import('../components/MapboxPhotoMap'), { ssr: false });
// const PhotoGallery = dynamic(() => import('../components/PhotoGallery'), { ssr: false });

function getImagesForCity(city) {
  // This function should return an array of image URLs for the given city.
  // In the original client-side approach, you would hardcode or fetch the filenames.
  // For now, let's assume all images are named File1.JPG, File2.JPG, ..., File28.JPG for demo.
  // In production, you might fetch this list from an API or keep a manifest file.
  const maxImages = 30;
  const images = [];
  for (let i = 1; i <= maxImages; i++) {
    images.push(`/albums/${city}/File${i}.JPG`);
  }
  return images;
}

export default function Photos() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [images, setImages] = useState([]);

  const handleButtonClick = (loc) => {
    if (loc.hasPhotos) {
      setSelectedCity(loc.city);
      setImages(getImagesForCity(loc.city));
    }
  };

  return (
    <div className="min-h-screen bg-cream text-forest font-sans">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-olive">Photos</h1>
        <div className="w-full max-w-full mx-auto mb-8">
          <MapboxPhotoMap
            albumLocations={photoLocations}
            selectedCity={selectedCity}
            onSelectCity={(city) => {
              setSelectedCity(city);
              setImages(getImagesForCity(city));
            }}
            mapStyle="mapbox://styles/mokam/cmcdh9ths04jz01smfwxv0lh9"
            pinColorWithPhotos="#DDA15E"
            pinColorNoPhotos="#606C38"
          />
        </div>
        <PhotoAlbumModal
          images={images}
          isOpen={!!selectedCity}
          onClose={() => setSelectedCity(null)}
          title={selectedCity ? photoLocations.find(l => l.city === selectedCity)?.label : ''}
        />
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {photoLocations.map(loc => (
            <button
              key={loc.city}
              className={`px-3 py-1 rounded-full text-xs font-sans border font-bold transition focus:outline-none ${loc.hasPhotos ? 'bg-ochre text-forest border-ochre hover:bg-burnt' : 'bg-olive text-gray-400 border-olive cursor-not-allowed'}`}
              onClick={() => handleButtonClick(loc)}
              title={loc.hasPhotos ? `View ${loc.label} album` : 'No photos yet!'}
              disabled={!loc.hasPhotos}
            >
              {loc.label}
            </button>
          ))}
        </div>
        <div className="text-base mt-6 italic text-forest">upload in progress</div>
      </main>
    </div>
  )
} 