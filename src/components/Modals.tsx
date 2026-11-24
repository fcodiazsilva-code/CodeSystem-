import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { type AppProduct, OFFICIAL_EMAIL } from '../data/codeSystemData';
import { GooglePlayPrismIcon, ResilientImage } from './BrandMark';
import { type LegalDocType } from './Footer';

interface AppDetailModalProps {
  app: AppProduct | null;
  onClose: () => void;
}

export function AppDetailModal({ app, onClose }: AppDetailModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [app?.id]);

  useEffect(() => {
    if (!app) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (app.galleryImages && app.galleryImages.length > 1) {
        if (e.key === 'ArrowRight') {
          setActiveSlide((prev) => (prev + 1) % app.galleryImages!.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveSlide((prev) => (prev - 1 + app.galleryImages!.length) % app.galleryImages!.length);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [app, onClose]);

  if (!app) return null;

  const gallery = app.galleryImages;
  const currentShot = gallery && gallery.length > 0 ? gallery[activeSlide] ?? gallery[0] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#090D16] border-b border-white/[0.08]">
          {currentShot && gallery ? (
            <div className="p-5 sm:p-6 flex flex-col items-center gap-4">
              <div className="relative w-full flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length)}
                  aria-label="Captura anterior"
                  className="w-10 h-10 rounded-lg bg-[#0F172A] border border-white/15 text-slate-200 hover:text-white hover:border-[#3B82F6] flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div
                  className={`rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl ${
                    currentShot.orientation === 'landscape'
                      ? 'w-full max-w-xl aspect-video'
                      : 'h-[340px] sm:h-[400px] aspect-[9/19.5]'
                  }`}
                >
                  <ResilientImage
                    src={currentShot.url}
                    alt={currentShot.caption}
                    title={currentShot.label}
                    className="w-full h-full object-contain bg-[#090D16]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % gallery.length)}
                  aria-label="Siguiente captura"
                  className="w-10 h-10 rounded-lg bg-[#0F172A] border border-white/15 text-slate-200 hover:text-white hover:border-[#3B82F6] flex items-center justify-center transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center max-w-lg">
                <p className="text-sm font-semibold text-white">
                  {currentShot.label}{' '}
                  <span className="font-mono text-xs text-[#06B6D4] ml-1.5">
                    {activeSlide + 1} / {gallery.length}
                  </span>
                </p>
                <p className="mt-1 text-xs text-[#94A3B8]">{currentShot.caption}</p>
              </div>

              {/* Thumbnail strip */}
              <div className="w-full flex items-center gap-2 overflow-x-auto pb-1 justify-start sm:justify-center">
                {gallery.map((shot, idx) => (
                  <button
                    key={shot.url}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Ver ${shot.label}`}
                    className={`${
                      shot.orientation === 'landscape' ? 'h-10 w-16' : 'h-14 w-8'
                    } rounded-md overflow-hidden border transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                      idx === activeSlide
                        ? 'border-[#06B6D4] ring-1 ring-[#06B6D4] opacity-100 scale-105'
                        : 'border-white/10 opacity-55 hover:opacity-90'
                    }`}
                  >
                    <ResilientImage
                      src={shot.url}
                      alt={shot.label}
                      title={shot.label}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="aspect-[16/9]">
              <ResilientImage
                src={app.imageUrl}
                alt={app.imageAlt}
                title={app.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha técnica"
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#090D16]/85 border border-white/15 text-slate-200 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="text-xs font-mono text-[#06B6D4]">
                {app.category} · {app.sectorLabel}
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#090D16] border border-white/10 text-xs text-white">
                <GooglePlayPrismIcon className="w-3.5 h-3.5" />
                <span>{app.platformStatus}</span>
              </span>
            </div>

            <h3 id="app-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white">
              {app.name}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] leading-relaxed">{app.description}</p>
          </div>

          <div className="border-t border-white/[0.08] pt-5">
            <h4 className="text-xs font-mono text-slate-300 mb-3">Capacidades funcionales</h4>
            <ul className="space-y-2.5">
              {app.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#090D16]/70 p-4 space-y-2">
            <h4 className="text-xs font-mono text-[#06B6D4]">Arquitectura & Stack</h4>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{app.architectureSummary}</p>
            <p className="font-mono text-xs text-slate-300 pt-1">{app.stack.join(' · ')}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <a
              href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
                `Información / Demo de ${app.name} — Code System`
              )}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all whitespace-nowrap shrink-0"
            >
              <span>Solicitar demo o acceso Beta</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LegalModalProps {
  doc: LegalDocType | null;
  onClose: () => void;
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!doc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [doc, onClose]);

  if (!doc) return null;

  const isPrivacy = doc === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#06B6D4]" aria-hidden="true" />
            <h3 id="legal-modal-title" className="font-display text-xl font-bold text-white">
              {isPrivacy ? 'Política de Privacidad — Code System' : 'Términos de Uso — Code System'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar documento legal"
            className="w-9 h-9 rounded-lg bg-[#090D16] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isPrivacy ? (
          <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
            <p>
              Esta Política de Privacidad describe cómo <strong className="text-white">Code System</strong> recopila,
              utiliza y protege la información en su sitio web corporativo y en sus aplicaciones distribuidas a través
              de Google Play Store (incluyendo <strong className="text-slate-200">e-Parking</strong>,{' '}
              <strong className="text-slate-200">LearnWorld 3D</strong> y{' '}
              <strong className="text-slate-200">Vektor DOOH</strong>).
            </p>
            <div>
              <h4 className="font-semibold text-white mb-1">1. Datos recopilados</h4>
              <p>
                Solo recopilamos la información estrictamente necesaria proporcionada voluntariamente mediante
                formularios de contacto, listas de acceso Beta (correo electrónico, nombre y empresa) o datos técnicos
                anónimos de diagnóstico en nuestras aplicaciones para garantizar estabilidad y seguridad.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">2. Uso y protección de la información</h4>
              <p>
                Los datos nunca se venden ni ceden a terceros con fines publicitarios. Se emplean únicamente para
                responder cotizaciones, habilitar acceso anticipado a versiones de prueba en Google Play y prestar
                soporte técnico.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">3. Derechos y contacto de privacidad</h4>
              <p>
                Puedes solicitar acceso, rectificación o eliminación de tus datos personales escribiendo directamente a{' '}
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="font-mono text-[#06B6D4] underline underline-offset-4">
                  {OFFICIAL_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
            <p>
              El acceso y uso del portal corporativo de <strong className="text-white">Code System</strong> y la
              información de sus productos de software están sujetos a los presentes Términos de Uso.
            </p>
            <div>
              <h4 className="font-semibold text-white mb-1">1. Propiedad intelectual</h4>
              <p>
                Las marcas, nombres comerciales, código fuente, diseños e interfaces de e-Parking, LearnWorld 3D, Vektor
                DOOH y Code System pertenecen exclusivamente a Code System.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">2. Disponibilidad en Google Play</h4>
              <p>
                Las aplicaciones indicadas como «Próximamente en Google Play» se encuentran en fase de despliegue o
                pruebas cerradas. Sus funcionalidades definitivas pueden evolucionar previo a su publicación oficial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">3. Consultas comerciales</h4>
              <p>
                Para licenciamiento, soporte o contratación de servicios de desarrollo a medida, contáctanos en{' '}
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="font-mono text-[#06B6D4] underline underline-offset-4">
                  {OFFICIAL_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        )}

        <div className="pt-2 flex justify-end border-t border-white/[0.08]">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-blue-500 rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
