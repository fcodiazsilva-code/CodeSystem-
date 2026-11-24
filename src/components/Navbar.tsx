import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CodeSystemLogoMark } from './BrandMark';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#portafolio', label: 'Portafolio de Apps' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#tecnologia', label: 'Tecnología' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#090D16]/85 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-[#090D16]/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-md"
        >
          <CodeSystemLogoMark className="w-7 h-7 shrink-0" />
          <span>Code System</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-gradient-to-r after:from-[#3B82F6] after:to-[#06B6D4] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(59,130,246,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
          >
            Cotizar Proyecto
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-[#0F172A]/70 text-slate-200 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <nav
          aria-label="Navegación móvil"
          className="lg:hidden border-t border-white/[0.08] bg-[#090D16]/95 backdrop-blur-xl px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-lg"
            >
              Cotizar Proyecto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
