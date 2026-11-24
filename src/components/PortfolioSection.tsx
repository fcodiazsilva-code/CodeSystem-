import React, { useState } from 'react';
import { ArrowUpRight, FlaskConical, CheckCircle2, ChevronRight } from 'lucide-react';
import {
  APP_CATEGORIES,
  PORTFOLIO_APPS,
  type AppCategory,
  type AppProduct,
} from '../data/codeSystemData';
import { GooglePlayPrismIcon, ResilientImage } from './BrandMark';

interface PortfolioSectionProps {
  onSelectApp: (app: AppProduct) => void;
}

export function PortfolioSection({ onSelectApp }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<AppCategory>('Todas');

  const filteredApps =
    activeCategory === 'Todas'
      ? PORTFOLIO_APPS
      : PORTFOLIO_APPS.filter((app) => app.category === activeCategory);

  const showExpansionCard = activeCategory === 'Todas';

  return (
    <section id="portafolio" className="py-20 sm:py-24 lg:py-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-[#06B6D4] tracking-wide mb-3">
              Portafolio de Productos Propios
            </p>
            <h2
              className="font-display font-bold text-white tracking-tight"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                textWrap: 'balance',
              }}
            >
              Nuestro Ecosistema de Aplicaciones
            </h2>
            <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
              Soluciones de software diseñadas, desarrolladas y operadas íntegramente por Code System para resolver
              desafíos reales de movilidad, educación interactiva y comunicación visual.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filtrar aplicaciones por categoría"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#0F172A]/80 border border-white/[0.08] self-start lg:self-end"
          >
            {APP_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white shadow-sm'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredApps.map((app) => (
            <article
              key={app.id}
              className="glass-surface glass-surface-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Visual Showcase Header */}
              <div className="relative aspect-[16/10] bg-[#0B1120] overflow-hidden border-b border-white/[0.06]">
                {app.galleryLayout === 'portrait' && app.galleryImages && app.galleryImages.length >= 3 ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B1220] via-[#090D16] to-[#0F172A] px-4 sm:px-6 pt-5 pb-12 flex items-center justify-center gap-3 sm:gap-4">
                    {[app.galleryImages[0], app.galleryImages[1], app.galleryImages[4]].map((shot, idx) => (
                      <div
                        key={shot.url}
                        className={`relative h-full aspect-[9/19.5] rounded-xl overflow-hidden border border-white/15 bg-[#090D16] shadow-2xl transition-transform duration-300 ${
                          idx === 1 ? 'scale-105 z-10 border-[#3B82F6]/40' : 'opacity-90 hidden sm:block'
                        }`}
                      >
                        <ResilientImage
                          src={shot.url}
                          alt={shot.caption}
                          title={shot.label}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                ) : app.galleryLayout === 'broadcast' && app.galleryImages && app.galleryImages.length >= 4 ? (
                  <div className="w-full h-full relative bg-[#090D16]">
                    <ResilientImage
                      src={app.galleryImages[0].url}
                      alt={app.galleryImages[0].caption}
                      title={app.galleryImages[0].label}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                    />
                    {/* Inset Vertical Totem Preview */}
                    <div className="hidden sm:block absolute top-3 right-3 h-[68%] aspect-[9/19.5] rounded-lg overflow-hidden border border-white/25 bg-[#090D16] shadow-2xl">
                      <ResilientImage
                        src={app.galleryImages[3].url}
                        alt={app.galleryImages[3].caption}
                        title={app.galleryImages[3].label}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <ResilientImage
                    src={app.imageUrl}
                    alt={app.imageAlt}
                    title={app.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/15 to-transparent"
                  aria-hidden="true"
                />

                {/* Official Google Play Upcoming Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090D16]/90 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-sm">
                    <GooglePlayPrismIcon className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">{app.platformStatus}</span>
                  </div>
                  {app.galleryImages && (
                    <span className="font-mono text-[11px] text-slate-200 bg-[#090D16]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {app.galleryImages.length} capturas reales
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Quiet Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-2">
                  <span className="text-[#06B6D4] font-medium">{app.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{app.sectorLabel}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight">{app.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-300">{app.tagline}</p>

                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{app.description}</p>

                {/* Key Capabilities List */}
                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                  {app.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Unboxed Stack Line + Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="font-mono text-xs text-[#94A3B8] leading-relaxed">
                    {app.stack.slice(0, 4).join(' · ')}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectApp(app)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6] hover:text-[#06B6D4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-md px-1 py-0.5"
                  >
                    <span>{app.galleryImages ? 'Ver ficha y galería' : 'Ver ficha técnica'}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* 4th Card: Expanding Ecosystem Lab Card */}
          {showExpansionCard && (
            <article className="relative rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-[#0F172A]/60 to-[#090D16] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              {/* Subtle laboratory grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 flex items-center justify-center text-[#06B6D4] mb-6">
                  <FlaskConical className="w-5 h-5" aria-hidden="true" />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-2">
                  <span className="font-mono text-[#06B6D4]">Laboratorio Code System</span>
                  <span aria-hidden="true">·</span>
                  <span>Próximos lanzamientos</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Ecosistema en Expansión — Y muchos más...
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-lg">
                  Nuestro equipo de ingeniería continúa desarrollando nuevas herramientas móviles, utilidades SaaS y
                  soluciones verticales listas para desplegar en Google Play Store.
                </p>

                <div className="mt-6 space-y-2.5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#06B6D4] shrink-0" aria-hidden="true" />
                    <span>Acceso anticipado al programa oficial de Beta Testers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#06B6D4] shrink-0" aria-hidden="true" />
                    <span>Pruebas cerradas en Google Play Console antes del lanzamiento público</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#06B6D4] shrink-0" aria-hidden="true" />
                    <span>Alianzas piloto para empresas y centros educativos</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#94A3B8]">
                  Programa Beta · Acceso Anticipado
                </span>
                <a
                  href="#lanzamiento"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                >
                  <span>Unirme como Beta Tester</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
