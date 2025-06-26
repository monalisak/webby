import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Notes() {
  return (
    <div className="min-h-screen bg-cream text-forest font-sans">
      <NavBar />
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-olive text-center">Notes</h1>
        <div className="text-lg text-[#555] font-serif mb-8">Loose, unopinionated notes on things I don't entirely understand yet.</div>
        <div className="bg-white rounded-xl shadow p-8 font-serif text-lg text-[#888]">Notes content coming soon.</div>
      </main>
    </div>
  );
} 