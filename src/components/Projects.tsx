export default function Projects() {
  const customWorks = [
    {
      title: "Echoes of the Wild",
      type: "Photography Showcase",
      desc: "An ongoing photo journal capturing hidden ecosystems, lighting patterns, and geographic variations along mountain trails.",
      tags: ["Nature Journal", "Visual Media", "Lightroom"],
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "The Code-Curious Thinker",
      type: "Tech Blog Feature",
      desc: "A cluster of dynamic blog essays simplifying front-end systems, automation hacks, and standard site structures for non-technical creators.",
      tags: ["Creative Prose", "Coding Basics", "UI Insights"],
      image: "https://images.unsplash.com/photo-1516116211223-5c359a36298a?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Perspectives",
      type: "Digital Portfolio Space",
      desc: "This responsive presentation hub engineered to map personal life updates, writing, and creative ventures gracefully over a single deck.",
      tags: ["Tailwind CSS", "Vite", "Node Structure"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Curated Content Portfolio</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-12">Creative Works &amp; Ventures</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customWorks.map((w, idx) => (
            <div key={idx} className="group rounded overflow-hidden bg-surface border border-white/5 flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden relative bg-black/40">
                <img src={w.image} alt={w.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" />
                <div className="absolute top-4 left-4 bg-bg/80 border border-white/10 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded text-accent">
                  {w.type}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-white group-hover:text-accent transition-colors">{w.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-6">{w.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {w.tags.map(t => (
                    <span key={t} className="text-[11px] px-2.5 py-0.5 bg-bg border border-white/5 rounded text-muted2">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
