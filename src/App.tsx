/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { PlayLaunchBanner } from './components/PlayLaunchBanner';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer, type LegalDocType } from './components/Footer';
import { AppDetailModal, LegalModal } from './components/Modals';
import { type AppProduct } from './data/codeSystemData';

export default function App() {
  const [selectedApp, setSelectedApp] = useState<AppProduct | null>(null);
  const [legalDoc, setLegalDoc] = useState<LegalDocType | null>(null);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <PortfolioSection onSelectApp={setSelectedApp} />
        <PlayLaunchBanner />
        <ServicesSection />
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer onOpenLegal={setLegalDoc} />

      <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
