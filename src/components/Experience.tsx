import { useRef, useEffect, useState } from 'react'
import { experiences } from '../data'

const colorMap: Record<string, { bg: string; badge: string; dot: string }> = {
  rose:    { bg: '#FFF0F0', badge: '#FFB3B3', dot: '#FF6B6B' },
  sun:     { bg: '#FFFBEA', badge: '#FFE68A', dot: '#FFD93D' },
  mint:    { bg: '#F0FBF2', badge: '#A8EDBA', dot: '#6BCB77' },
  sky:     { bg: '#EFF6FF', badge: '#BFDBFE', dot: '#4D96FF' },
  lavender:{ bg: '#F5F0FF', badge: '#DDD6FE', dot: '#C77DFF' },
  peach:   { bg: '#FFF5EC', badge: '#FECBA1', dot: '#FF9A3C' },
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[exp.color] ?? colorMap['sun']

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
      className={`relative flex gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center text-xl flex-shrink-0 shadow-[3px_3px_0_#1a1a2e]"
          style={{ background: c.badge }}
        >
          {exp.emoji}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-3 border-l-2 border-dashed border-ink/20" />
        )}
      </div>

      {/* Card */}
      <div
        className="card-happy p-6 flex-1 mb-6"
        style={{ background: c.bg }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">{exp.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-body font-semibold text-sm text-ink/70">{exp.company}</span>
              <span className="text-ink/30">·</span>
              <span className="font-body text-sm text-ink/50">{exp.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="font-mono text-xs font-semibold px-3 py-1 rounded-full border-2 border-ink/20"
              style={{ background: c.badge }}
            >
              {exp.period}
            </span>
            <span className="font-body text-xs text-ink/40 font-semibold">{exp.type}</span>
          </div>
        </div>

        <p className="font-body text-sm text-ink/60 leading-relaxed mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((tag) => (
            <span
              key={tag}
              className="font-body font-semibold text-xs px-3 py-1 rounded-full bg-white/80 border border-ink/15 text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-10 right-16 text-5xl float-2 pointer-events-none select-none">💼</div>
      <div className="absolute bottom-20 left-10 text-4xl float-1 pointer-events-none select-none">⚡</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-peach/30 border-2 border-peach rounded-full px-4 py-1 font-body font-semibold text-sm text-ink/60 mb-4">
            Where I've worked 💼
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-ink mb-4">
            My <span className="text-rose italic">Experience</span>
          </h2>
          <p className="font-body text-ink/55 text-lg max-w-md mx-auto">
            4+ years of building things people actually use and enjoy!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
