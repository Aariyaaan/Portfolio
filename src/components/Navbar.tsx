import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Creative Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-bg/90 backdrop-blur-md border-b border-white/5 z-50 flex items-center justify-between px-6 md:px-16">
      <a href="#home" className="font-display font-bold text-2xl tracking-wide text-accent">AB</a>
      
      <div className="hidden md:flex gap-8">
        {links.map(l => (
          <a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-accent transition-colors">
            {l.name}
          </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-100">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-surface border-b border-white/5 p-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-muted hover:text-accent font-medium">
              {l.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
