import React from 'react';
import {
  Atom,
  Globe,
  FileCode2,
  Cpu,
  Smartphone,
  Layers,
  Box,
  Database,
  Container,
  Cloud,
} from 'lucide-react';
import { TECH_STACK } from '../data/codeSystemData';

const TECH_ICONS = [Atom, Globe, FileCode2, Cpu, Smartphone, Layers, Box, Database, Container, Cloud];

export function TechStackSection() {
  return (
    <section id="tecnologia" className="py-20 sm:py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-[#06B6D4] tracking-wide mb-3">
            Arquitectura & Stack Tecnológico
          </p>
          <h2
            className="font-display font-bold text-white tracking-tight"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              textWrap: 'balance',
            }}
          >
            Tecnología moderna para productos que no se detienen.
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
            Seleccionamos herramientas probadas en producción para garantizar seguridad, tipado estricto, baja latencia
            y facilidad de mantenimiento a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TECH_STACK.map((tech, idx) => {
            const Icon = TECH_ICONS[idx] ?? Cpu;
            return (
              <div
                key={tech.name}
                className="glass-surface glass-surface-hover rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#06B6D4]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] text-[#94A3B8] truncate">{tech.layer}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{tech.name}</h3>
                </div>
                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">{tech.usage}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
