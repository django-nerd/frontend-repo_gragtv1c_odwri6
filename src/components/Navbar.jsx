import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="text-white font-semibold text-lg">Linwi Production llc</div>
          <nav className="hidden md:flex items-center gap-6 text-blue-100">
            <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
            <button onClick={() => scrollTo('packages')} className="hover:text-white transition">Packages</button>
            <button onClick={() => scrollTo('consult')} className="hover:text-white transition">Consultation</button>
            <a href="#contact" onClick={e=>{e.preventDefault(); scrollTo('consult')}} className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 transition">Book a Call</a>
          </nav>
          <button onClick={()=>setOpen(!open)} className="md:hidden text-blue-100 hover:text-white">
            <span className="sr-only">Menu</span>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-slate-900/80">
            <button onClick={() => scrollTo('about')} className="block w-full text-left text-blue-100 hover:text-white">About</button>
            <button onClick={() => scrollTo('packages')} className="block w-full text-left text-blue-100 hover:text-white">Packages</button>
            <button onClick={() => scrollTo('consult')} className="block w-full text-left text-blue-100 hover:text-white">Consultation</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
