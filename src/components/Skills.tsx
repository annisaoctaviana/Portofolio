import { useRef, useEffect, useState } from 'react'
import { skills } from '../data'

const palette = {
  electric: { bg: '#FFF3B0', accent: '#FFD93D', emoji: '⚡' },
  acid:     { bg: '#D4F7DC', accent: '#6BCB77', emoji: '🎨' },
  neon:     { bg: '#D0E8FF', accent: '#4D96FF', emoji: '🛠️' },
  coral:    { bg: '#FFE0D4', accent: '#FF9A3C', emoji: '✨' },
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const p = palette[skill.color]

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`card-happy p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ background: p.bg, transitionDelay: `${index * 100}ms` }}>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl float-1">{p.emoji}</span>
        <h3 className="font-display font-bold text-xl text-ink">{skill.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span key={item} className="font-body font-semibold text-sm px-3 py-1.5 rounded-full border-2 border-ink/20 bg-white/60 hover:scale-105 hover:border-ink transition-all duration-150 cursor-default">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 h-1.5 rounded-full overflow-hidden bg-ink/10">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: visible ? '100%' : '0%', background: p.accent, transitionDelay: `${index * 100 + 400}ms` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: '#FFF5E0' }}>
      <div className="absolute -top-20 right-20 text-6xl float-2 pointer-events-none select-none">🌈</div>
      <div className="absolute bottom-10 left-10 text-4xl float-3 pointer-events-none select-none">💫</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-lavender/30 border-2 border-lavender rounded-full px-4 py-1 font-body font-semibold text-sm text-ink/60 text-white mb-4">
            My Superpowers 🦸
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-ink mb-4">
            What I do <span className="text-rose italic">best</span>
          </h2>
          <p className="font-body text-ink/55 text-lg max-w-md mx-auto">
            A toolkit built over 4+ years of making cool things on the internet!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => <SkillCard key={skill.category} skill={skill} index={i} />)}
        </div>

        {/* Bonus row */}
        <div className="mt-6 card-happy bg-cream-2 p-5 flex flex-wrap items-center gap-3">
          <span className="font-body font-bold text-sm text-ink/50 mr-2">Also love:</span>
          {['Accessibility ♿', 'Performance ⚡', 'Responsive Design 📱', 'Team Collaboration 🤝', 'Code Reviews 🔍', 'Agile 🏃'].map((item) => (
            <span key={item} className="font-body text-sm text-ink/60 bg-white border border-ink/10 rounded-full px-3 py-1">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
