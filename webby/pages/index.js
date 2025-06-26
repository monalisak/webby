import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import NavBar from '../components/NavBar'
import WorldClockBar from '../components/WorldClockBar'

const khaki = 'bg-[#f0e6d2] dark:bg-[#b2a177]'; // custom khaki
const siteBg = 'bg-gray-50 dark:bg-gray-900'; // original site background
const lightKhaki = 'bg-[#f7f3ea] dark:bg-[#d6cdb2]'; // lighter than khaki

const sections = []

const MapboxMap = dynamic(() => import('../components/MapboxMap'), { ssr: false })

export default function Home() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [gardenOpen, setGardenOpen] = useState(false)
  const gardenRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream text-forest font-sans">
      <NavBar />
      <WorldClockBar />
      <main className="w-full p-0 m-0">
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden" style={{ height: 'calc(100vh - 80px)', minHeight: 300 }}>
          <img
            src="/garden-sketch.jpg"
            alt="Hand-drawn garden sketch"
            className="w-full h-full object-cover"
            style={{ minHeight: 300, height: '100%' }}
          />
          <div className="absolute inset-0 bg-cream opacity-60 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight mb-1" style={{ color: '#283618', fontWeight: 700, fontFamily: 'Poppins, Helvetica, Arial, system-ui, sans-serif' }}>
              Mona's Digital Garden
            </h1>
            <div className="text-sm font-sans mt-3" style={{ color: '#6b7280', fontWeight: 400, fontFamily: 'Poppins, Helvetica, Arial, system-ui, sans-serif' }}>
              idea from: <a href="https://github.com/MaggieAppleton/digital-gardeners" style={{ color: '#6b7280', fontWeight: 400 }} className="underline hover:text-[#7c3aed]" target="_blank" rel="noopener noreferrer">@https://github.com/MaggieAppleton/digital-gardeners</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 