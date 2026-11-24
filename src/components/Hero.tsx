import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Layers, Cpu, MonitorPlay } from 'lucide-react';
import { ResilientImage } from './BrandMark';

const HERO_PILLARS = [
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    detail: 'Android nativo y multiplataforma optimizado para Google Play',
  },
  {
    icon: Layers,
    title: 'Plataformas SaaS & Cloud',
    detail: 'Arquitecturas web multi-tenant de alta disponibilidad',
  },
  {
    icon: Cpu,
    title: 'Control Inteligente & IoT',
    detail: 'Telemetría en tiempo real e integración con hardware',
  },
  {
    icon: MonitorPlay,
    title: 'Experiencias 3D & DOOH',
    detail: 'Entornos interactivos y redes de cartelería digital',
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Subtle architectural background glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full opacity-25 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(6,182,212,0.22) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Launch Notice Kicker */}
            <div className="mb-6">
              <a
                href="#lanzamiento"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-[#06B6D4] hover:text-cyan-300 transition-colors border-b border-[#06B6D4]/30 pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded-sm"
              >
                <span aria-hidden="true">🚀</span>
                <span>Nuevas aplicaciones próximamente en Google Play</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.08]"
              style={{
                fontSize: 'clamp(2.25rem, 3.8vw, 3.65rem)',
                textWrap: 'balance',
              }}
            >
              Ingeniería de software que transforma ideas en{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                ecosistemas digitales.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
              En Code System diseñamos, desarrollamos y escalamos aplicaciones móviles, plataformas SaaS y sistemas de
              control inteligente para empresas y usuarios de todo el mundo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-[0_0_28px_rgba(59,130,246,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              >
                <span>Explorar Portafolio</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </motion.div>

          {/* Right Architectural Showcase Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="glass-surface rounded-2xl p-2.5 sm:p-3 w-full flex flex-col justify-between shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="relative rounded-xl overflow-hidden bg-[#0B1120] aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[260px]">
                <ResilientImage
                  src="/src/assets/images/hero_ecosystem_showcase_1795524362374.jpg"
                  alt="Ecosistema multi-dispositivo de Code System con consola web empresarial y aplicación móvil"
                  title="Code System Multi-Device Ecosystem"
                  className="w-full h-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D16]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="pt-3 px-2 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#94A3B8]">
                <span className="font-mono text-slate-300">Ecosistema Web + Móvil + Hardware</span>
                <span>Arquitectura propia · Despliegue global</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Capability Strip Below Split */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-surface rounded-xl px-5 py-4 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
