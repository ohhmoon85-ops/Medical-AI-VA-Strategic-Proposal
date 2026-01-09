
import React from 'react';

const WorkflowSlide: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-slate-900 text-white flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Operational Efficiency</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Message: 10-Second Insight vs. Hours of Waiting</h3>
          <p className="text-slate-400 text-lg">Reimagining the ER and Clinic workflow for the modern veteran.</p>
        </div>

        <div className="space-y-12">
          {/* Traditional Workflow */}
          <div className="relative border border-red-500/20 bg-red-500/5 p-8 rounded-2xl">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">BEFORE: CONVENTIONAL</div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="text-center w-full md:w-1/4">
                <div className="text-2xl font-bold text-red-400">Patient Arrival</div>
                <div className="text-xs text-slate-500">Chest Pain/Vague Dyspnea</div>
              </div>
              <div className="text-slate-600 hidden md:block"><i className="fas fa-chevron-right"></i></div>
              <div className="text-center w-full md:w-1/4 p-4 border border-red-500/30 rounded-lg bg-red-500/10">
                <div className="text-lg font-bold">Blood Draw</div>
                <div className="text-xs text-red-400">Invasive & Painful</div>
              </div>
              <div className="text-slate-600 hidden md:block"><i className="fas fa-chevron-right"></i></div>
              <div className="text-center w-full md:w-1/4 p-4 border border-red-500/30 rounded-lg bg-red-500/10">
                <div className="text-lg font-bold">Lab Wait</div>
                <div className="text-2xl font-extrabold text-red-500">1~3 Hours</div>
              </div>
              <div className="text-slate-600 hidden md:block"><i className="fas fa-chevron-right"></i></div>
              <div className="text-center w-full md:w-1/4">
                <div className="text-lg font-bold">Diagnosis</div>
                <div className="text-xs text-slate-500">Resource Bottleneck</div>
              </div>
            </div>
          </div>

          {/* AI Workflow */}
          <div className="relative border border-emerald-500/30 bg-emerald-500/5 p-8 rounded-2xl">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 text-xs font-bold rounded">AFTER: AI-ENABLED</div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
               <div className="text-center w-full md:w-1/4">
                <div className="text-2xl font-bold text-emerald-400">Patient Arrival</div>
                <div className="text-xs text-slate-500">Standard ECG Entry</div>
              </div>
              <div className="text-slate-600 hidden md:block"><i className="fas fa-chevron-right"></i></div>
              <div className="text-center w-full md:w-2/4 p-6 border-2 border-emerald-400 rounded-xl bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <div className="flex items-center justify-center space-x-4">
                  <i className="fas fa-bolt text-3xl text-yellow-400"></i>
                  <div>
                    <div className="text-xl font-bold">AI Signal Analysis</div>
                    <div className="text-3xl font-black text-emerald-400 tracking-tighter">10 SECONDS</div>
                  </div>
                </div>
              </div>
              <div className="text-slate-600 hidden md:block"><i className="fas fa-chevron-right"></i></div>
              <div className="text-center w-full md:w-1/4">
                <div className="text-lg font-bold text-emerald-400">Rapid Triage</div>
                <div className="text-xs text-slate-500">Immediate Clinical Path</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h5 className="font-bold text-blue-400 mb-2">Physician Point</h5>
            <p className="text-sm text-slate-400">Immediate 'Rule-out' confidence. Spend time with patients, not waiting for lab tickers.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h5 className="font-bold text-emerald-400 mb-2">Management Point</h5>
            <p className="text-sm text-slate-400">Drastically increase bed turnover. Solve ER overcrowding without hiring more staff.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h5 className="font-bold text-amber-400 mb-2">Veteran Point</h5>
            <p className="text-sm text-slate-400">Painless, non-invasive experience. Reduced anxiety through instant feedback.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSlide;
