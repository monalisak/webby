import Link from 'next/link';
import { useState, useRef } from 'react';

export default function NavBar() {
  const [gardenOpen, setGardenOpen] = useState(false);
  const gardenRef = useRef(null);

  // Optionally, add click outside logic for closing dropdown

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-olive bg-cream relative z-50">
      <div className="flex items-center">
        <Link href="/" className="focus:outline-none">
          <span className="text-3xl font-bold text-olive mr-2 cursor-pointer">✶M</span>
        </Link>
      </div>
      <div className="flex space-x-8 text-sm text-forest font-medium items-center">
        {/* Garden Dropdown */}
        <div className="relative" ref={gardenRef}>
          <button
            className="hover:text-olive flex items-center gap-1 focus:outline-none"
            onClick={() => setGardenOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={gardenOpen}
            type="button"
          >
            The Garden
            <svg className={`w-4 h-4 transition-transform ${gardenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {gardenOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-cream rounded-lg shadow-lg border border-olive z-50">
              <Link href="/blog" className="block px-4 py-2 hover:bg-olive hover:text-white transition">Essays</Link>
              <Link href="/notes" className="block px-4 py-2 hover:bg-olive hover:text-white transition">Notes</Link>
              <Link href="/photos" className="block px-4 py-2 hover:bg-olive hover:text-white transition">Photos</Link>
              <Link href="/music" className="block px-4 py-2 hover:bg-olive hover:text-white transition">Music</Link>
              <Link href="/interesting" className="block px-4 py-2 hover:bg-olive hover:text-white transition">Stuff I Like</Link>
            </div>
          )}
        </div>
        <Link href="#" className="hover:text-olive">About</Link>
      </div>
    </nav>
  );
} 