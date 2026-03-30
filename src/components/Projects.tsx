import { useRef, useEffect, useState } from 'react'
import { projects } from '../data'

const cardBg = {
  electric: '#FFF3B0',
  acid:     '#D4F7DC',
  neon:     '#D0E8FF',
  coral:    '#FFE0D4',
}
const accentColor = {
  electric: '#FFD93D',
  acid:     '#6BCB77',
  neon:     '#4D96FF',
  coral:    '#FF9A3C',
}
const projectEmoji = ['🎯', '📊', '🌿', '🎵']

// function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
//   const ref = useRef<HTMLDivElement>(null)
//   const [visible, setVisible] = useState(false)
//   const bg = cardBg[project.color]
//   const accent = accentColor[project.color]

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])

//   return (
//     <div ref={ref}
//       className={`card-happy overflow-hidden h-full flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//       style={{ background: bg, transitionDelay: `${index * 120}ms` }}>

//       {/* Visual header */}
//       <div className="relative h-44 flex items-center justify-center overflow-hidden border-b-2 border-ink/10" style={{ background: `${accent}30` }}>
//         <div className="text-6xl" style={{ animation: `floatSlow ${3.5 + index * 0.5}s ease-in-out infinite` }}>{projectEmoji[index]}</div>

//         {/* Corner badges */}
//         <div className="absolute top-3 left-3">
//           <span className="font-mono text-xs font-semibold bg-white/80 border border-ink/10 rounded-full px-2 py-0.5 text-ink/60">{project.year}</span>
//         </div>
//         {project.featured && (
//           <div className="absolute top-3 right-3">
//             <span className="font-body font-bold text-xs bg-rose text-white rounded-full px-3 py-0.5">⭐ Featured</span>
//           </div>
//         )}
//         <div className="absolute bottom-3 right-3">
//           <span className="font-body font-semibold text-xs rounded-full px-3 py-1 border-2 border-ink/20 bg-white/70">{project.category}</span>
//         </div>
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="font-display font-bold text-xl text-ink mb-2">{project.title}</h3>
//         <p className="font-body text-sm text-ink/60 leading-relaxed mb-4 flex-1">{project.description}</p>

//         <div className="flex flex-wrap gap-1.5 mb-5">
//           {project.tags.map((tag) => (
//             <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/70 border border-ink/15 text-ink/60">{tag}</span>
//           ))}
//         </div>

//         <a href={project.link}
//           className="btn-happy self-start text-sm font-body px-5 py-2"
//           style={{ background: accent, color: '#1a1a2e' }}>
//           View Project →
//         </a>
//       </div>
//     </div>
//   )
// }

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const bg = cardBg[project.color]
  const accent = accentColor[project.color]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const hasImages = project.images && project.images.length > 0

  return (
    <>
      <div
        ref={ref}
        className={`card-happy overflow-hidden h-full flex flex-col transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ background: bg, transitionDelay: `${index * 120}ms` }}
      >
        {/* Visual header */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden border-b-2 border-ink/10 cursor-pointer"
          style={{ background: `${accent}30` }}
          onClick={() => {
            if (hasImages) {
              setOpen(true)
              setActiveIndex(0)
            }
          }}
        >
          {hasImages ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className="text-6xl"
              style={{
                animation: `floatSlow ${3.5 + index * 0.5}s ease-in-out infinite`,
              }}
            >
              {projectEmoji[index]}
            </div>
          )}

          {/* Corner badges */}
          <div className="absolute top-3 left-3">
            <span className="font-mono text-xs font-semibold bg-white/80 border border-ink/10 rounded-full px-2 py-0.5 text-ink/60">
              {project.year}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="font-body font-bold text-xs bg-rose text-white rounded-full px-3 py-0.5">
                ⭐ Featured
              </span>
            </div>
          )}

          <div className="absolute bottom-3 right-3">
            <span className="font-body font-semibold text-xs rounded-full px-3 py-1 border-2 border-ink/20 bg-white/70">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-ink mb-2">
            {project.title}
          </h3>

          <p className="font-body text-sm text-ink/60 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/70 border border-ink/15 text-ink/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            className="btn-happy self-start text-sm font-body px-5 py-2"
            style={{ background: accent, color: '#1a1a2e' }}
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Modal */}
    {open && hasImages && (
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={() => setOpen(false)} // 👈 outside click
      >
        <div
          className="bg-white rounded-xl max-w-4xl w-full p-4 relative"
          onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 border-b pb-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <button
              className="text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Main image */}
          <img
            src={project.images[activeIndex]}
            className="w-full max-h-[70vh] object-contain rounded-lg mb-4"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  i === activeIndex ? 'border-black' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-5xl float-1 pointer-events-none select-none">🎪</div>
      <div className="absolute bottom-20 right-16 text-4xl float-3 pointer-events-none select-none">🌟</div>

      {/* Wavy top border */}
      {/* <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '40px' }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#FFFBF0">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div> */}

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-rose/15 border-2 border-rose/40 rounded-full px-4 py-1 font-body font-semibold text-sm text-ink/60 mb-4">
            Things I've built 🔨
          </span>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-ink mb-4">
            Selected <span className="text-rose italic">Work</span>
          </h2>
          <p className="font-body text-ink/55 text-lg max-w-md mx-auto">
            A handful of projects I'm really proud of — each one taught me something new!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-happy bg-cream text-ink px-7 py-3 font-body inline-flex">
            Want to see more? Let's talk! ☕
          </a>
        </div>
      </div>

      {/* Wavy bottom border */}
      {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '40px' }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#FFFBF0">
          <path d="M0,20 C360,0 720,40 1080,20 C1260,10 1380,25 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div> */}
    </section>
  )
}
