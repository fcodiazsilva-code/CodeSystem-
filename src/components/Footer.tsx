import React from 'react';
import { Mail } from 'lucide-react';
import { CodeSystemLogoMark } from './BrandMark';
import { OFFICIAL_EMAIL } from '../data/codeSystemData';

export type LegalDocType = 'privacy' | 'terms';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const displayYear = currentYear >= 2026 ? currentYear : 2026;

  return (
    <footer className="border-t border-white/[0.08] bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight"
            >
              <CodeSystemLogoMark className="w-7 h-7 shrink-0" />
              <span>Code System</span>
            </a>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Ingeniería de software, aplicaciones móviles y ecosistemas digitales escalables para empresas y usuarios en
              todo el mundo.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#06B6D4] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#3B82F6]" aria-hidden="true" />
                <span className="font-mono">{OFFICIAL_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono text-slate-300">Navegación</h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-white transition-colors">
                  Portafolio de Apps
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios B2B
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-white transition-colors">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Apps & Legal */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono text-slate-300">Ecosistema & Cumplimiento</h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#portafolio" className="hover:text-white transition-colors">
                  e-Parking · LearnWorld 3D · Vektor DOOH
                </a>
              </li>
              <li>
                <a href="#lanzamiento" className="hover:text-white transition-colors">
                  Lista de lanzamiento Google Play
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidad (Google Play)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Términos de Uso
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {displayYear} Code System. Todos los derechos reservados.</p>
          <p>
            Webmaster & Soporte Oficial:{' '}
            <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-slate-300 hover:text-white font-mono">
              {OFFICIAL_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
