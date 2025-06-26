import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [gardenOpen, setGardenOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const gardenRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const router = useRouter();

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (gardenRef.current && !gardenRef.current.contains(event.target)) {
        setGardenOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setGardenOpen(false);
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const handleNavigation = (href) => {
    router.push(href);
    setGardenOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="px-4 sm:px-8 py-4 sm:py-6 border-b border-olive bg-cream relative z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => handleNavigation('/')}
            className="focus:outline-none cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl font-bold text-olive mr-2">✶M</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-forest hover:text-olive cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-sm text-forest font-medium items-center">
          {/* Garden Dropdown */}
          <div className="relative" ref={gardenRef}>
            <button
              className="hover:text-olive flex items-center gap-1 focus:outline-none cursor-pointer"
              onClick={() => setGardenOpen(!gardenOpen)}
              aria-haspopup="true"
              aria-expanded={gardenOpen}
              type="button"
            >
              The Garden
              <svg className={`w-4 h-4 transition-transform ${gardenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {gardenOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-cream rounded-lg shadow-lg border border-olive z-50">
                <button onClick={() => handleNavigation('/blog')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition cursor-pointer">Essays</button>
                <button onClick={() => handleNavigation('/notes')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition cursor-pointer">Notes</button>
                <button onClick={() => handleNavigation('/photos')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition cursor-pointer">Photos</button>
                <button onClick={() => handleNavigation('/music')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition cursor-pointer">Music</button>
                <button onClick={() => handleNavigation('/interesting')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition cursor-pointer">Stuff I Like</button>
              </div>
            )}
          </div>
          <button onClick={() => handleNavigation('/about')} className="hover:text-olive cursor-pointer">About</button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-x-0 top-[57px] bg-cream border-b border-olive shadow-lg z-50"
        >
          <div className="px-2 py-3">
            <button
              className="w-full text-left px-4 py-2 text-forest hover:text-olive flex items-center justify-between cursor-pointer"
              onClick={() => setGardenOpen(!gardenOpen)}
            >
              The Garden
              <svg className={`w-4 h-4 transition-transform ${gardenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {gardenOpen && (
              <div className="pl-4 py-2 space-y-2">
                <button onClick={() => handleNavigation('/blog')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition rounded cursor-pointer">Essays</button>
                <button onClick={() => handleNavigation('/notes')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition rounded cursor-pointer">Notes</button>
                <button onClick={() => handleNavigation('/photos')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition rounded cursor-pointer">Photos</button>
                <button onClick={() => handleNavigation('/music')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition rounded cursor-pointer">Music</button>
                <button onClick={() => handleNavigation('/interesting')} className="w-full text-left px-4 py-2 hover:bg-olive hover:text-white transition rounded cursor-pointer">Stuff I Like</button>
              </div>
            )}
            <button onClick={() => handleNavigation('/about')} className="w-full text-left px-4 py-2 text-forest hover:text-olive cursor-pointer">About</button>
          </div>
        </div>
      )}
    </nav>
  );
} 