import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { OFFICIAL_EMAIL } from '../data/codeSystemData';

const PROJECT_TYPES = [
  'App Móvil',
  'Sistema a Medida',
  'Alianza Comercial',
  'Soporte',
  'Otro',
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType;
  message: string;
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: 'App Móvil',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback selection if clipboard API is restricted
      setCopied(false);
    }
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = `[Code System] ${data.projectType} — ${data.name}${data.company ? ` (${data.company})` : ''}`;
    const body = [
      `Nombre: ${data.name}`,
      `Correo: ${data.email}`,
      `Empresa: ${data.company || 'No especificada'}`,
      `Tipo de proyecto: ${data.projectType}`,
      '',
      'Mensaje:',
      data.message,
    ].join('\n');

    return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (form.message.trim().length < 10) {
      setError('Cuéntanos brevemente sobre tu proyecto o consulta (mínimo 10 caracteres).');
      return;
    }

    setError(null);
    setSubmittedData({ ...form });
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-xs font-mono text-[#06B6D4] tracking-wide mb-3">
                Contacto & Cotizaciones
              </p>
              <h2
                className="font-display font-bold text-white tracking-tight"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                Conversemos sobre tu próximo ecosistema digital.
              </h2>
              <p className="mt-4 text-base text-[#94A3B8] leading-relaxed">
                Atendemos requerimientos de desarrollo a medida, licenciamiento de nuestras aplicaciones propias, soporte
                técnico y alianzas estratégicas.
              </p>

              {/* Official Webmaster Email Block */}
              <div className="mt-8 glass-surface rounded-2xl p-6">
                <p className="text-xs font-mono text-[#94A3B8] mb-2">
                  Correo oficial de ingeniería y webmaster
                </p>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-display font-semibold text-white hover:text-[#06B6D4] transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-md"
                >
                  <Mail className="w-5 h-5 text-[#3B82F6] shrink-0" aria-hidden="true" />
                  <span>{OFFICIAL_EMAIL}</span>
                </a>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.11] border border-white/10 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                        <span>Correo copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent('Consulta de Proyecto — Code System')}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#06B6D4] hover:text-cyan-300 border border-[#06B6D4]/25 hover:border-[#06B6D4]/50 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Abrir cliente de correo</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Process Milestones */}
            <div className="border-t border-white/[0.08] pt-6 space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">01.</span>
                <span>Revisión técnica del alcance y objetivos del producto.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">02.</span>
                <span>Propuesta de arquitectura, cronograma y presupuesto claro.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">03.</span>
                <span>Entregas iterativas con acceso a entornos de prueba continuos.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="glass-surface rounded-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="space-y-6"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Solicitud lista para enviar a Code System
                      </h3>
                      <p className="mt-1.5 text-sm text-[#94A3B8] leading-relaxed">
                        Hemos preparado tu consulta de <strong className="text-slate-200">{submittedData.projectType}</strong>{' '}
                        dirigida directamente a <span className="font-mono text-white">{OFFICIAL_EMAIL}</span>.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#090D16]/70 p-4 text-xs sm:text-sm space-y-1.5 text-slate-300">
                    <p>
                      <span className="text-[#94A3B8]">Remitente:</span> {submittedData.name} ({submittedData.email})
                    </p>
                    {submittedData.company && (
                      <p>
                        <span className="text-[#94A3B8]">Empresa:</span> {submittedData.company}
                      </p>
                    )}
                    <p>
                      <span className="text-[#94A3B8]">Categoría:</span> {submittedData.projectType}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Enviar ahora a {OFFICIAL_EMAIL}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm({
                          name: '',
                          email: '',
                          company: '',
                          projectType: 'App Móvil',
                          message: '',
                        });
                      }}
                      className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      Redactar nueva consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-2">
                        Nombre completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (error) setError(null);
                        }}
                        placeholder="Ej. Andrea Mendoza"
                        className="w-full px-4 py-3 rounded-lg bg-[#090D16]/85 border border-white/12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-2">
                        Correo electrónico
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (error) setError(null);
                        }}
                        placeholder="nombre@empresa.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#090D16]/85 border border-white/12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-medium text-slate-300 mb-2">
                        Empresa u organización
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Opcional"
                        className="w-full px-4 py-3 rounded-lg bg-[#090D16]/85 border border-white/12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-type" className="block text-xs font-medium text-slate-300 mb-2">
                        Tipo de proyecto
                      </label>
                      <select
                        id="contact-type"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value as ProjectType })}
                        className="w-full px-4 py-3 rounded-lg bg-[#090D16]/85 border border-white/12 text-sm text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#0F172A] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-2">
                      Detalles del proyecto o consulta
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (error) setError(null);
                      }}
                      placeholder="Describe brevemente los objetivos, plataformas requeridas (Android, Web, IoT) y plazos estimados..."
                      className="w-full px-4 py-3 rounded-lg bg-[#090D16]/85 border border-white/12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="flex items-center gap-2 text-xs text-rose-400">
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{error}</span>
                    </p>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#94A3B8]">
                      Destino directo: <span className="font-mono text-slate-300">{OFFICIAL_EMAIL}</span>
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:brightness-110 rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(59,130,246,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Enviar Consulta</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
