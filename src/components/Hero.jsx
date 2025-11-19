const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(99,102,241,0.25),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Advertising that actually moves the needle
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Book a strategy call or pick a ready‑to‑go package. Either way, you’ll get performance‑driven media that grows your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#consult" onClick={(e)=>{e.preventDefault(); document.getElementById('consult')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
              Book a free consultation
            </a>
            <a href="#packages" onClick={(e)=>{e.preventDefault(); document.getElementById('packages')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">
              Explore packages
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-blue-200/80 text-sm">
            <div>Paid Social</div>
            <div>Paid Search</div>
            <div>Campaign Strategy</div>
            <div>Analytics Setup</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
