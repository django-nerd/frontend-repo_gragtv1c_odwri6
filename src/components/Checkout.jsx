import { useState } from 'react'

const Checkout = ({ selected }) => {
  const [form, setForm] = useState({
    buyer_name: '',
    buyer_email: '',
    company: '',
    notes: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!selected) {
      setStatus({ type: 'error', msg: 'Please choose a package above first.' })
      return
    }
    try {
      setStatus({ type: 'loading', msg: 'Processing order...' })
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          package_id: selected.id,
          package_name: selected.name,
          price: selected.price,
          buyer_name: form.buyer_name,
          buyer_email: form.buyer_email,
          company: form.company,
          notes: form.notes,
        }),
      })
      if (!res.ok) throw new Error('Failed to create order')
      const data = await res.json()
      setStatus({ type: 'success', msg: 'Order received! We emailed you a confirmation.' })
      setForm({ buyer_name: '', buyer_email: '', company: '', notes: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <section id="checkout" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
          <h3 className="text-2xl font-bold text-white">Checkout</h3>
          <p className="text-blue-100 mt-1">Fill your details and we’ll get your package started.</p>
          <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100 mb-1">Full name</label>
              <input name="buyer_name" value={form.buyer_name} onChange={handleChange} required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100 mb-1">Email</label>
              <input type="email" name="buyer_email" value={form.buyer_email} onChange={handleChange} required className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100 mb-1">Company (optional)</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100 mb-1">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="w-full rounded-lg bg-white/10 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Anything we should know?" />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">Place order</button>
            </div>
          </form>
          {status && (
            <div className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : status.type === 'success' ? 'text-green-400' : 'text-blue-300'}`}>
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Checkout
