import { Sparkles, Users, BookOpen, Camera } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Camera size={20} />, title: "Photography", desc: "Chasing pristine natural landscapes, deep wildlife views, and lighting concepts." },
    { icon: <BookOpen size={20} />, title: "Blog Creation", desc: "Authoring deep experiential feature essays about travel, philosophy, and basic science." },
    { icon: <Users size={20} />, title: "Social Intelligence", desc: "Exceptional listener with natural client collaboration and clear communications skills." },
    { icon: <Sparkles size={20} />, title: "Tech Tinkering", desc: "Understanding web architectures, light scripting, and foundational modern environments." },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-surface relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Profile Image & Graphics */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -inset-4 border border-accent/20 rounded max-w-[320px] w-full aspect-[3/4] translate-x-4 translate-y-4 hidden sm:block" />
          <div className="relative rounded overflow-hidden max-w-[320px] w-full aspect-[3/4] border border-white/10 shadow-2xl bg-bg">
            <img 
              src="https://avatars.githubusercontent.com/u/179784723?v=4" 
              alt="Aryan Bhatta" 
              className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Biography text */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Human Behind The Work</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">About Aryan Bhatta</h2>
          
          <p className="text-muted leading-relaxed mb-6">
            I am a content architect and natural explorer. My worldview is defined by a deep curiosity about environments, a love for documenting things, and sharing knowledge. Rather than traditional engineering code loops, I am heavily driven by high-impact copywriting, communication design, and deep human networking.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Whether framing the peak of a high-altitude hike inside a dynamic camera viewport or crafting an informative feature piece about a new environment, I build cohesive, impactful stories across every channel I explore.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="p-4 rounded bg-bg border border-white/5 hover:border-accent/20 transition-all">
                <div className="text-accent mb-2">{h.icon}</div>
                <h4 className="font-semibold text-white mb-1 text-sm">{h.title}</h4>
                <p className="text-xs text-muted2 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
