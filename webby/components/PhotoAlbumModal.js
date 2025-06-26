import { useState, useEffect } from 'react';

export default function PhotoAlbumModal({ images, isOpen, onClose, title }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (lightboxImg) setLightboxImg(null);
        else onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxImg, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center" onClick={onClose}>
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 z-10"
        >
          ×
        </button>
        {/* Title */}
        <div className="mb-4 text-xl font-bold text-center text-[#232323]">{title}</div>
        {/* Grid of images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div key={i} className="bg-gray-100 rounded overflow-hidden cursor-pointer hover:shadow-lg flex items-center justify-center" onClick={() => setLightboxImg(img)}>
              <img
                src={img}
                alt={`Photo ${i + 1}`}
                className="w-full h-auto object-contain max-h-72"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {lightboxImg && (
          <div className="fixed inset-0 z-60 bg-black bg-opacity-90 flex items-center justify-center" onClick={() => setLightboxImg(null)}>
            <img src={lightboxImg} alt="Large view" className="max-w-full max-h-[90vh] rounded shadow-lg" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-8 right-8 text-3xl text-white hover:text-gray-300 z-70"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 