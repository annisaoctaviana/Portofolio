import { useRef, useEffect, useState } from 'react'
import { education } from '../data'

const colorMap: Record<string, { bg: string; badge: string }> = {
  rose:    { bg: '#FFF0F0', badge: '#FFB3B3' },
  sun:     { bg: '#FFFBEA', badge: '#FFE68A' },
  mint:    { bg: '#F0FBF2', badge: '#A8EDBA' },
  sky:     { bg: '#EFF6FF', badge: '#BFDBFE' },
  lavender:{ bg: '#F5F0FF', badge: '#DDD6FE' },
  peach:   { bg: '#FFF5EC', badge: '#FECBA1' },
}

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[edu.color] ?? colorMap['sky']

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`card-happy p-6 flex flex-col h-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ background: c.bg, transitionDelay: `${index * 130}ms` }}
    >
      {/* Emoji icon */}
      <div
        className="w-14 h-14 rounded-2xl border-2 border-ink/20 flex items-center justify-center text-2xl mb-4 shadow-[3px_3px_0_#1a1a2e20]"
        style={{ background: c.badge }}
      >
        {edu.emoji}
      </div>

      {/* Period badge */}
      <span
        className="self-start font-mono text-xs font-semibold px-3 py-1 rounded-full border-2 border-ink/15 mb-3"
        style={{ background: c.badge }}
      >
        {edu.period}
      </span>

      <h3 className="font-display font-bold text-lg text-ink leading-tight mb-1">{edu.degree}</h3>

      <div className="flex items-center gap-1.5 mb-3">
        <span className="font-body font-semibold text-sm text-ink/70">{edu.school}</span>
        <span className="text-ink/30">·</span>
        <span className="font-body text-sm text-ink/45">{edu.location}</span>
      </div>

      <p className="font-body text-sm text-ink/55 leading-relaxed mb-4 flex-1">{edu.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {edu.highlights.map((tag) => (
          <span
            key={tag}
            className="font-body font-semibold text-xs px-2.5 py-1 rounded-full bg-white/80 border border-ink/15 text-ink/65"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden" style={{ background: '#FFF5E0' }}>
      {/* Wavy top */}
      {/* <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '40px' }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#FFFBF0">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div> */}

      <div className="absolute top-10 left-12 text-5xl float-3 pointer-events-none select-none">📚</div>
      <div className="absolute bottom-16 right-16 text-4xl float-2 pointer-events-none select-none">🏅</div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky/20 border-2 border-sky/50 rounded-full px-4 py-1 font-body font-semibold text-sm text-ink/60 mb-4">
            How I got here 🎓
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-ink mb-4">
            My <span className="text-rose italic">Education</span>
          </h2>
          <p className="font-body text-ink/55 text-lg max-w-md mx-auto">
            Always learning, always growing — here's the formal stuff and beyond!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <EducationCard key={edu.degree} edu={edu} index={i} />
          ))}
        </div>

        {/* Fun extra learning note */}
        {/* <div className="mt-8 card-happy bg-white p-5 flex flex-wrap items-center gap-3 max-w-3xl mx-auto">
          <span className="text-2xl">🌱</span>
          <span className="font-body font-bold text-sm text-ink/60">Currently learning:</span>
          {['React Native', '', 'WebGL / Shaders', 'Swift UI'].map((item) => (
            <span key={item} className="font-body text-sm text-ink/60 bg-mint/20 border border-mint/30 rounded-full px-3 py-1">
              {item}
            </span>
          ))}
        </div> */}
      </div>

      {/* Wavy bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '40px' }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#FFFBF0">
          <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,25 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div> */}
    </section>
  )
}
