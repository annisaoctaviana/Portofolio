import { marqueeItems, personalInfo } from '../data'
import myPhoto from '../assets/profile.jpg'


const floatingShapes = [
  { emoji: '⭐', class: 'float-1', style: { top: '12%', left: '8%', fontSize: '2rem' } },
  { emoji: '🎨', class: 'float-2', style: { top: '20%', right: '10%', fontSize: '2.2rem' } },
  { emoji: '✦',  class: 'float-3', style: { top: '65%', left: '5%',  fontSize: '1.8rem', color: '#FF6B6B' } },
  { emoji: '💡', class: 'float-1', style: { bottom: '22%', right: '7%', fontSize: '2rem' } },
  { emoji: '🚀', class: 'float-2', style: { top: '45%', left: '3%', fontSize: '1.6rem' } },
  { emoji: '✨', class: 'float-3', style: { bottom: '35%', right: '12%', fontSize: '1.4rem' } },
]

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      {/* Soft BG blobs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-sun/30 blob-morph pointer-events-none" style={{ filter: 'blur(60px)' }} />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-rose/20 blob-morph-2 pointer-events-none" style={{ filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint/20 pointer-events-none" style={{ filter: 'blur(70px)', borderRadius: '50%' }} />

      {/* Floating decorations */}
      {floatingShapes.map((s, i) => (
        <span key={i} className={`absolute pointer-events-none select-none ${s.class}`} style={s.style}>{s.emoji}</span>
      ))}

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-mint/20 border-2 border-mint rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-mint rounded-full" style={{ animation: 'pulse 2s infinite' }} />
              <span className="font-body font-semibold text-xs text-ink/70 tracking-wide">{personalInfo.availability} ✌️</span>
            </div>

            <h1 className="font-display font-bold leading-[1.05] mb-6">
              <span className="block text-4xl sm:text-5xl text-ink mb-2">
                Hey, I'm <span className="wave-hand">👋</span>
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-rose italic">
                {personalInfo.name}
              </span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Frontend Dev', 'UI/UX Designer', 'Web Creator'].map((tag, i) => (
                <span key={tag} className="font-body font-semibold text-sm px-4 py-1.5 rounded-full border-2 border-ink"
                  style={{ background: ['#FFD93D', '#FFB3B3', '#B3F0BC'][i] }}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-body text-base sm:text-lg text-ink/60 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-happy bg-rose text-white px-6 py-3 font-body text-sm sm:text-base">
                See my work 🎨
              </a>
              <a href="#contact" className="btn-happy bg-sun text-ink px-6 py-3 font-body text-sm sm:text-base">
                Let's chat ☕
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              {[
                { value: '3+', label: 'Years', emoji: '📅' },
                { value: '20+', label: 'Projects', emoji: '🛠️' },
              ].map((s) => (
                <div key={s.label} className="card-happy bg-cream-2 px-5 py-3 text-center">
                  <div className="text-xl mb-0.5">{s.emoji}</div>
                  <div className="font-display font-bold text-2xl text-ink">{s.value}</div>
                  <div className="font-body text-xs text-ink/50 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Compact Avatar */}
          <div className="relative w-72 h-72 flex-shrink-0">
            {/* Spinning ring - tighter */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-sun spin-slow" />
            
            {/* Main avatar - less padding */}
            <div className="absolute inset-6 rounded-full border-4 border-ink shadow-[6px_6px_0_#1a1a2e] overflow-hidden float-2">
              <img src={myPhoto} alt="Profile" className="w-full h-50 object-cover" />
            </div>

            {/* Orbit badges - closer to circle */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 card-happy bg-sun px-3 py-1.5 text-xs font-body font-bold float-1 whitespace-nowrap">React ⚛️</div>
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 card-happy bg-mint px-3 py-1.5 text-xs font-body font-bold float-2 whitespace-nowrap">Figma 🎨</div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 card-happy bg-lavender/60 px-3 py-1.5 text-xs font-body font-bold float-3 whitespace-nowrap">TypeScript 💙</div>
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 card-happy bg-rose/30 px-3 py-1.5 text-xs font-body font-bold float-1 whitespace-nowrap">Laravel 🚀</div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-16 border-y-2 border-ink/10 py-4 overflow-hidden bg-sun/10">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-3">
              <span className="font-body font-bold text-sm text-ink/50 tracking-wide uppercase">{item}</span>
              <span className="text-rose text-base">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
