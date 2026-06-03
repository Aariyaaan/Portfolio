import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-muted2 border-t border-white/5 bg-surface">
        © {new Date().getFullYear()} Aryan Bhatta. Built with React & Tailwind.
      </footer>
    </div>
  )
}
