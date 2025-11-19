import { useState } from 'react'

const PACKAGES = [
  {
    id: 'starter-social',
    name: 'Starter Social',
    price: 299,
    features: ['Account Audit', '3 Ad Variations', 'Basic Targeting', '2-Week Run'],
    best: false,
  },
  {
    id: 'growth-ads',
    name: 'Growth Ads',
    price: 699,
    features: ['Creative Kit', '5 Ad Variations', 'Audience Build', 'A/B Testing', '4-Week Run'],
    best: true,
  },
  {
    id: 'search-boost',
    name: 'Search Boost',
    price: 499,
    features: ['Keyword Plan', '3 Ad Groups', 'Conversion Setup', '2-Week Optimization'],
    best: false,
  },
]

const Packages = ({ onSelect }) => {
  const [selected, setSelected] = useState(null)

  const handleBuy = (pkg) => {
    setSelected(pkg.id)
    onSelect?.(pkg)
    const el = document.getElementById('checkout')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="packages" className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready-made packages</h2>
          <p className="mt-3 text-blue-100">Fast, affordable options to kick off your ads in days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div key={p.id} className={`rounded-2xl border ${p.best ? 'border-blue-500/40 bg-blue-950/30' : 'border-white/10 bg-slate-900/40'} p-6 backdrop-blur shadow-lg`}>
              {p.best && <div className="inline-block mb-3 px-2 py-0.5 rounded bg-blue-600 text-white text-xs">Most popular</div>}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-3xl font-extrabold text-white">${p.price}</p>
              <ul className="mt-4 space-y-2 text-blue-100">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-400">✓</span> {f}</li>
                ))}
              </ul>
              <button onClick={() => handleBuy(p)} className={`mt-6 w-full px-4 py-2 rounded-lg font-semibold transition ${selected === p.id ? 'bg-green-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                {selected === p.id ? 'Selected' : 'Choose package'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
