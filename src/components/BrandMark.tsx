import React, { useState } from 'react';
import { Layers } from 'lucide-react';

export function CodeSystemLogoMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        stroke="url(#cs-logo-grad)"
        strokeWidth="1.75"
        fill="#0F172A"
      />
      <path
        d="M12.5 11L7.5 16L12.5 21"
        stroke="#3B82F6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 11L24.5 16L19.5 21"
        stroke="#06B6D4"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 9.5L14.8 22.5"
        stroke="#F8FAFC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="cs-logo-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GooglePlayPrismIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.61 1.814L13.793 12 3.61 22.186a1.48 1.48 0 0 1-.61-1.2V3.014c0-.487.232-.937.61-1.2z"
        fill="#06B6D4"
      />
      <path
        d="M17.168 8.625L13.793 12l3.375 3.375 3.812-2.164c.88-.5.88-1.922 0-2.422l-3.812-2.164z"
        fill="#FBBF24"
      />
      <path
        d="M3.61 22.186L13.793 12l3.375 3.375-12.165 6.906c-.525.298-1.088.203-1.393-.095z"
        fill="#EF4444"
      />
      <path
        d="M3.61 1.814c.305-.298.868-.393 1.393-.095l12.165 6.906L13.793 12 3.61 1.814z"
        fill="#10B981"
      />
    </svg>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ResilientImage({ src, alt, title, className = '' }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#090D16] text-slate-400 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-11 h-11 rounded-xl border border-white/10 bg-[#090D16] flex items-center justify-center mb-3 text-[#3B82F6]">
          <Layers className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium text-slate-200">{title}</span>
        <span className="text-xs text-slate-500 mt-1">Code System Product</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
