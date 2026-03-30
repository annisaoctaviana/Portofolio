import { useState, useRef, useEffect } from 'react'
import { personalInfo } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setStatus('sending')
  //   setTimeout(() => setStatus('done'), 1800)
  // }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  setStatus('sending')

  try {
    const res = await fetch('https://formspree.io/f/mlgobeaj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('done')
      setForm({ name: '', email: '', message: '' })
    } else {
      throw new Error('Failed')
    }
  } catch (err) {
    console.error(err)
    setStatus('idle')
  }
}

  const inputCls = `w-full border-2 border-ink/20 rounded-xl px-4 py-3 font-body text-sm text-ink bg-white placeholder-ink/30 focus:outline-none focus:border-rose transition-colors`

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#FFF5E0' }}>
      <div className="absolute top-20 right-20 text-5xl float-2 pointer-events-none select-none">💌</div>
      <div className="absolute bottom-20 left-10 text-4xl float-1 pointer-events-none select-none">☕</div>

      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="text-center mb-16">
          <span className="inline-block bg-sky/20 border-2 border-sky/40 rounded-full px-4 py-1 font-body font-semibold text-sm text-ink/60 mb-4">
            Don't be shy! 😊
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-ink mb-4">
            Let's <span className="text-rose italic">Connect!</span> 🤝
          </h2>
          <p className="font-body text-ink/55 text-lg max-w-md mx-auto">
            Got a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left info */}
          <div className="space-y-4">
            {[
              { emoji: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, bg: '#FFF3B0' },
              { emoji: '📍', label: 'Location', value: personalInfo.location, href: null, bg: '#D4F7DC' },
              { emoji: '🟢', label: 'Status', value: personalInfo.availability, href: null, bg: '#D0E8FF' },
            ].map((item) => (
              <div key={item.label} className="card-happy flex items-center gap-4 px-6 py-4" style={{ background: item.bg }}>
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="font-body font-semibold text-xs text-ink/40 uppercase tracking-wider">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="font-body font-semibold text-ink hover:text-rose transition-colors">{item.value}</a>
                    : <div className="font-body font-semibold text-ink">{item.value}</div>}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="card-happy bg-cream-2 p-5">
              <p className="font-body font-bold text-sm text-ink/50 mb-3">Find me on the internet 🌐</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'GitHub 🐙', href: personalInfo.socials.github },
                  { name: 'LinkedIn 💼', href: personalInfo.socials.linkedin },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="btn-happy bg-white text-ink text-xs font-body px-4 py-2">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="card-happy bg-white p-8">
            {status === 'done' ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="text-6xl mb-4 pop-in">🎉</div>
                <h3 className="font-display font-bold text-2xl text-ink mb-2">Message sent!</h3>
                <p className="font-body text-ink/55">I'll get back to you real soon — promise! 🤞</p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
                  className="btn-happy bg-sun text-ink px-5 py-2 text-sm font-body mt-6">
                  Send another 📬
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body font-semibold text-xs text-ink/50 uppercase tracking-wider block mb-1.5">Your Name</label>
                  <input type="text" required placeholder="Jane Smith" value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className={inputCls} />
                </div>
                <div>
                  <label className="font-body font-semibold text-xs text-ink/50 uppercase tracking-wider block mb-1.5">Email</label>
                  <input type="email" required placeholder="jane@email.com" value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className={inputCls} />
                </div>
                <div>
                  <label className="font-body font-semibold text-xs text-ink/50 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project, idea, or just say hi! 😄"
                    value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  className="btn-happy bg-rose text-white w-full py-3 font-body text-base justify-center disabled:opacity-60">
                  {status === 'sending'
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block" style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                    : 'Send Message 🚀'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
