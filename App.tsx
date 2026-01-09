
import React, { useState } from 'react';
import TitleSlide from './components/TitleSlide';
import IcebergSlide from './components/IcebergSlide';
import WorkflowSlide from './components/WorkflowSlide';
import ClinicalEvidenceSlide from './components/ClinicalEvidenceSlide';
import IntegrationSlide from './components/IntegrationSlide';
import FinancialImpactSlide from './components/FinancialImpactSlide';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">M</div>
          <span className="text-white font-bold tracking-tight">MEDICAL AI</span>
        </div>
        <div className="hidden md:block text-slate-400 text-sm">VA Strategic Sales Proposal | 2026</div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all">
          Schedule Deep Dive
        </button>
      </header>

      <main className="flex-grow pt-16">
        <TitleSlide />
        <IcebergSlide />
        <WorkflowSlide />
        <ClinicalEvidenceSlide />
        <IntegrationSlide />
        <FinancialImpactSlide />
      </main>

      <Footer />
    </div>
  );
};

export default App;
