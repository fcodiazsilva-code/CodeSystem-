import React from 'react';
import { Smartphone, Server, Box, Compass, ArrowRight } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/codeSystemData';

const PILLAR_ICONS = [Smartphone, Server, Box, Compass];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-24 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-[#06B6D4] tracking-wide mb-3">
              Capacidades B2B & Ingeniería a Medida
            </p>
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                textWrap: 'balance',
              }}
            >
              Construimos software de misión crítica para tu organización.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-md leading-relaxed">
            Además de nuestros productos propios, acompañamos a empresas e instituciones en el ciclo completo de
            diseño, desarrollo y escalamiento tecnológico.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] ?? Smartphone;
            return (
              <article
                key={pillar.index}
                className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-sm font-semibold text-[#06B6D4]">
                      {pillar.index}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-slate-300">{pillar.subtitle}</p>

                  <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
                  {pillar.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#06B6D4] font-mono select-none" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Service CTA Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0F172A]/40 px-6 py-5">
          <p className="text-sm text-slate-300">
            ¿Necesitas un equipo dedicado para lanzar tu app móvil o modernizar un sistema operativo?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] hover:text-[#06B6D4] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Solicitar evaluación técnica</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
