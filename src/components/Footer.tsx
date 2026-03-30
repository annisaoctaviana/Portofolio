import { personalInfo } from '../data'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 py-8 bg-cream-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display font-bold text-xl text-ink flex items-center gap-2">
          <span className="w-7 h-7 bg-sun rounded-full border-2 border-ink flex items-center justify-center text-xs">✦</span>
          Annisa<span className="text-rose">.</span>
        </a>
        <p className="font-body text-sm text-ink/40">
          Made with ❤️ & lots of ☕ in {personalInfo.location} · © {new Date().getFullYear()}
        </p>
        <a href="#" className="font-body text-sm text-ink/40 hover:text-rose transition-colors">Back to top ↑</a>
      </div>
    </footer>
  )
}
