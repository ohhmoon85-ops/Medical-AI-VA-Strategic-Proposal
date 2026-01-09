
import React from 'react';

const IntegrationSlide: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-slate-900 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Zero CapEx Deployment</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Message: Seamless Logic on Existing Hardware</h3>
          <p className="text-slate-400 text-lg">No new boxes. No new screens. Just smarter data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Integration Diagram */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 mb-2">
                    <span className="text-white text-xs font-bold">GE</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase">Existing ECG</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 mb-2">
                    <span className="text-white text-xs font-bold">PHILIPS</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase">Existing ECG</span>
                </div>
              </div>
              <div className="animate-pulse"><i className="fas fa-arrow-down text-blue-400 text-2xl"></i></div>
              <div className="w-full h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                <span className="text-white font-bold tracking-widest">MEDICAL AI CLOUD / ON-PREM</span>
              </div>
              <div className="animate-pulse"><i className="fas fa-arrow-down text-emerald-400 text-2xl"></i></div>
              <div className="text-center w-full">
                <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-600 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">VistA / Cerner EMR</span>
                  <i className="fas fa-check-circle text-emerald-400"></i>
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase mt-3 block tracking-wider">Direct Results Injection</span>
              </div>
            </div>
          </div>

          {/* Report Simulation */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="border-b-2 border-slate-200 pb-4 mb-6 flex justify-between items-end">
              <div>
                <h4 className="font-black text-2xl text-slate-800">ECG REPORT</h4>
                <p className="text-[10px] text-slate-500">Standard 12-Lead Analysis</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-800">Patient: VET-8829</p>
                <p className="text-[8px] text-slate-400 font-bold">Date: 2026-07-15</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-8 opacity-40">
              <div className="h-1 bg-slate-200 w-full"></div>
              <div className="h-1 bg-slate-200 w-3/4"></div>
              <div className="h-1 bg-slate-200 w-full"></div>
              <div className="h-32 bg-slate-100 rounded flex items-center justify-center border border-slate-200 italic text-slate-400 text-xs font-medium">Standard ECG Waveforms</div>
            </div>

            <div className="p-6 bg-blue-50 border-2 border-blue-500 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">AI ANALYTICS ENABLED</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-blue-800 uppercase mb-1 tracking-wider">AiTiALVSD Score:</div>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-black text-blue-600">86.2</span>
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded">HIGH RISK</span>
                  </div>
                </div>
                <div className="text-xs text-blue-900 leading-relaxed bg-white/70 p-3 rounded border border-blue-200 font-medium">
                  <i className="fas fa-exclamation-triangle text-blue-600 mr-2"></i>
                  AI detected high probability of LVSD (HFrEF, LVEF ≤ 40%).<br/>
                  <span className="font-bold underline text-blue-800">Clinical recommendation: Schedule stat echocardiogram.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSlide;
