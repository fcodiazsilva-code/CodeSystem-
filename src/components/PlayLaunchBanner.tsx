import React, { useState } from 'react';
import { Bell, CheckCircle2, AlertCircle } from 'lucide-react';
import { GooglePlayPrismIcon } from './BrandMark';
import { OFFICIAL_EMAIL } from '../data/codeSystemData';

export function PlayLaunchBanner() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailPattern.test(trimmed)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setError(null);
    setSubmittedEmail(trimmed);
    setEmail('');
  };

  return (
    <section id="lanzamiento" className="py-16 sm:py-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#0F172A] via-[#0B1222] to-[#090D16] p-8 sm:p-10 lg:p-14">
          {/* Ambient radial accent */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-20 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, #06B6D4 0%, #3B82F6 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-200 mb-4">
                <GooglePlayPrismIcon className="w-5 h-5 shrink-0" />
                <span>Despliegue Oficial · Google Play Store</span>
              </div>

              <h2
                className="font-display font-bold text-white tracking-tight"
                style={{
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
                  textWrap: 'balance',
                }}
              >
                Sé el primero en probar nuestras aplicaciones en Google Play.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
                Estamos completando la fase de certificación y pruebas cerradas para <strong className="text-slate-200 font-medium">e-Parking</strong>,{' '}
                <strong className="text-slate-200 font-medium">LearnWorld 3D</strong> y{' '}
                <strong className="text-slate-200 font-medium">Vektor DOOH</strong>. Regístrate para recibir una
                notificación el día del lanzamiento y acceder al programa oficial de Beta Testers.
              </p>
            </div>

            <div className="lg:col-span-5">
              {submittedEmail ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-white">Registro confirmado en la lista de acceso anticipado</p>
                      <p className="mt-1 text-slate-300 leading-relaxed">
                        Notificaremos a <span className="font-mono text-white">{submittedEmail}</span> en cuanto las
                        aplicaciones estén disponibles en Google Play.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                        <a
                          href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
                            'Solicitud Beta Tester Google Play — Code System'
                          )}&body=${encodeURIComponent(
                            `Hola equipo de Code System,\n\nQuiero participar como Beta Tester en Google Play con mi cuenta: ${submittedEmail}\n\nSaludos.`
                          )}`}
                          className="font-medium text-[#06B6D4] hover:text-cyan-300 underline underline-offset-4"
                        >
                          Enviar confirmación directa al equipo
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmittedEmail(null)}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          Registrar otro correo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <label htmlFor="waitlist-email" className="block text-xs font-mono text-slate-300">
                    Notificarme del lanzamiento
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="waitlist-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="tu@empresa.com"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'waitlist-error' : undefined}
                      className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-[#090D16]/90 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                    >
                      <Bell className="w-4 h-4" aria-hidden="true" />
                      <span>Unirme a la lista</span>
                    </button>
                  </div>
                  {error ? (
                    <p id="waitlist-error" className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{error}</span>
                    </p>
                  ) : (
                    <p className="text-xs text-[#94A3B8]">
                      Sin spam. Solo avisos de publicación en Google Play y acceso Beta.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
