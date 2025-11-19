import { useState } from 'react'

const Consultation = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    budget_range: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    try {
      setStatus({ type: 'loading', msg: 'Submitting your request...' })
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preferred_date: form.preferred_date || null,
        }),
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      await res.json()
      setStatus({ type: 'success', msg: 'Thanks! We will reach out within 24 hours.' })
      setForm({ name: '', email: '', company: '', phone: '', preferred_date: '', preferred_time: '', budget_range: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <section id="consult" className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Custom, end‑to‑end advertising</h2>
            <p className="mt-3 text-blue-100">
              For full‑scale campaigns, we’ll build a plan around your goals. Submit the form and we’ll book a discovery call.
            </p>
            <ul className="mt-6 space-y-2 text-blue-100/90">
              <li>✓ Channel and budget planning</li>
              <li>✓ Creative strategy and production</li>
              <li>✓ Tracking, analytics and reporting</li>
              <li>✓ Continuous optimization</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
              <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Preferred date</label>
                  <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100 mb-1">Preferred time</label>
                  <input name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="e.g., 2-4pm ET" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-blue-100 mb-1">Budget range</label>
                  <input name="budget_range" value={form.budget_range} onChange={handleChange} placeholder="$3k-$10k/mo" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-blue-100 mb-1">What are you trying to achieve?</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">Request consultation</button>
                </div>
              </form>
              {status && (
                <div className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : status.type === 'success' ? 'text-green-400' : 'text-blue-300'}`}>
                  {status.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultation
