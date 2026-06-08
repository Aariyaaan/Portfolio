import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-surface border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Let&apos;s Connect</span>
          <div className="w-6 h-[1px] bg-accent" />
        </div>
        
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 tracking-tight">Let&apos;s Create Something Memorable</h2>
        <p className="text-muted max-w-xl mx-auto text-sm md:text-base mb-12 leading-relaxed">
          Whether you want to commission a long-form travel blog post, hire an editor for nature photography, or grab a coffee to share perspectives — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:bhattaaryan7@gmail.com" 
            className="w-full sm:w-auto px-8 py-4 bg-accent text-bg font-bold rounded flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
          >
            <Mail size={18} /> Email Me Directly <ArrowUpRight size={16} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-bg border border-white/10 text-white rounded font-medium flex items-center justify-center gap-3 hover:bg-white/5 transition-colors"
          >
            <MessageSquare size={18} /> Follow My Ventures
          </a>
        </div>
      </div>
    </section>
  );
}
