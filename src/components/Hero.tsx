import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
      </div>

      <div className="text-center max-w-3xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs uppercase tracking-widest mb-6"
        >
          <Compass size={14} className="animate-spin" style={{ animationDuration: '6s' }} /> Open for Creative Projects & Writing Gigs
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl leading-none tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="gradient-text">Aryan Bhatta</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display italic text-lg md:text-2xl text-muted font-light mb-8"
        >
          — Capturing landscapes through lenses, and human stories through words.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-muted/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m a blog creator, explorer, and photography enthusiast based in Nepal. I focus on immersive storytelling, public relations, and exploring visual landscapes while keeping things simple.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3.5 bg-accent text-bg font-bold rounded text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-accent/10 flex items-center gap-2">
            Explore Creative Portfolio <ArrowRight size={16} />
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-transparent text-white font-medium border border-white/10 rounded text-sm hover:bg-white/5 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
