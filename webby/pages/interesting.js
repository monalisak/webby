import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import NavBar from '../components/NavBar'

const khaki = '#f0e6d2';
const darkBlue = '#232946';

export default function Interesting() {
  return (
    <div className="min-h-screen bg-cream text-forest font-sans">
      <NavBar />
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-olive text-center">Stuff I Like</h1>
        <div className="text-lg text-[#555] font-serif mb-8">Curated links, ideas, and things I find fascinating.</div>
        <div className="bg-white rounded-xl shadow p-8 font-serif text-lg text-[#888]">Stuff I like content coming soon.</div>
      </main>
    </div>
  )
} 