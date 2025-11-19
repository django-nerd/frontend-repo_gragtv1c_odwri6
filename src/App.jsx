import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Checkout from './components/Checkout'
import Consultation from './components/Consultation'

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Packages onSelect={(pkg) => setSelectedPackage(pkg)} />
        <Checkout selected={selectedPackage} />
        <Consultation />
        <footer className="border-t border-white/10 py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-200/80">
            <p>© {new Date().getFullYear()} Linwi Production llc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/test" className="hover:text-white">System Status</a>
              <a href="#consult" onClick={(e)=>{e.preventDefault(); document.getElementById('consult')?.scrollIntoView({behavior:'smooth'})}} className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 transition">Book a Call</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
