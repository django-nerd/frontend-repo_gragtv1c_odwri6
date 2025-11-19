const About = () => {
  return (
    <section id="about" className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Linwi Production llc</h2>
            <p className="mt-4 text-blue-100 leading-relaxed">
              We are an advertising consultancy focused on measurable growth. From strategy to creative to
              execution, we help brands reach the right audiences and turn attention into results.
            </p>
            <p className="mt-3 text-blue-100/90">
              Our team blends media buying expertise with performance‑first creative. Whether you’re testing
              channels for the first time or scaling an established program, we tailor packages and
              consulting to your goals and budget.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                <div className="text-3xl font-extrabold text-white">10x</div>
                <div className="mt-1 text-blue-200/80 text-sm">Creative iterations</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                <div className="text-3xl font-extrabold text-white">0→1</div>
                <div className="mt-1 text-blue-200/80 text-sm">Go‑to‑market support</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                <div className="text-3xl font-extrabold text-white">Full‑stack</div>
                <div className="mt-1 text-blue-200/80 text-sm">Strategy to reporting</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                <div className="text-3xl font-extrabold text-white">1–10k/mo</div>
                <div className="mt-1 text-blue-200/80 text-sm">Budget guidance</div>
              </div>
            </div>
            <p className="mt-6 text-blue-100/90">
              Prefer a quick intro? Book a free 15‑minute call and we’ll suggest the right starting point.
            </p>
            <a href="#consult" onClick={(e)=>{e.preventDefault(); document.getElementById('consult')?.scrollIntoView({behavior:'smooth'})}} className="inline-block mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
