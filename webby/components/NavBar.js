import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const router = useRouter();

  // Handle click outside to close mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
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

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const navItems = [
    { href: '/blog', label: 'Essays' },
    { href: '/notes', label: 'Notes' },
    { href: '/photos', label: 'Photos' },
    { href: '/music', label: 'Music' },
    { href: '/interesting', label: 'Stuff I Like' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="px-4 sm:px-8 py-4 sm:py-6 border-b border-olive bg-cream relative z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="focus:outline-none cursor-pointer">
            <span className="text-2xl sm:text-3xl font-bold text-olive mr-2">✶M</span>
          </Link>
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
        <div className="hidden md:flex space-x-6 text-sm text-forest font-medium items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-olive cursor-pointer py-2 ${
                router.pathname === item.href ? 'text-olive' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-x-0 top-[57px] bg-cream border-b border-olive shadow-lg z-50"
        >
          <div className="px-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full text-left px-4 py-3 text-forest hover:text-olive cursor-pointer ${
                  router.pathname === item.href ? 'text-olive' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 