import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import { getSortedPostsData } from '../lib/posts'
import NavBar from '../components/NavBar'

const khaki = '#f0e6d2';
const darkBlue = '#232946';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-cream text-forest font-sans">
      <NavBar />
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-olive text-center">Essays</h1>
        <div className="text-lg text-[#555] font-serif mb-8">Opinionated, longform narrative writing with an agenda.</div>
        <div className="bg-white rounded-xl shadow p-8 font-serif text-lg text-[#888]">Essay content coming soon.</div>
      </main>
    </div>
  )
} 