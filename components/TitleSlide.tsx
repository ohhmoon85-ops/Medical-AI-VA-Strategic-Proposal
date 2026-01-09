
import React from 'react';

const TitleSlide: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          <path d="M0 60 Q 30 30, 60 60 T 100 60" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1,1" />
        </svg>
      </div>
      
      <div className="max-w-4xl z-10">
        <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
          Tailored Strategy for U.S. Veterans Affairs
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          The Future of Veteran Cardiac Care:<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">AI-Assisted ECG Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
          Transitioning from reactive to proactive care for VHA stakeholders through precision diagnostic technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center space-x-2 text-slate-400 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <i className="fas fa-microchip text-blue-400"></i>
            <span>AiTiALVSD</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <i className="fas fa-stethoscope text-emerald-400"></i>
            <span>VistA/Cerner Integrated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSlide;
