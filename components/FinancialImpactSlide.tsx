
import React, { useState } from 'react';

const FinancialImpactSlide: React.FC = () => {
  const [admissions, setAdmissions] = useState(10);
  const costPerAdmission = 109000;
  const totalSavings = admissions * costPerAdmission;
  const ptsdUnits = Math.floor(totalSavings / 5000); // Assuming $5000 per intervention unit
  const prostheticUnits = Math.floor(totalSavings / 12000); // Assuming $12000 per high-end prosthetic

  return (
    <section className="min-h-screen py-24 px-6 bg-slate-50 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Budget Stewardship</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Message: From Avoidable Expense to Veteran Empowerment</h3>
          <p className="text-slate-600 text-lg">Save $109,000 per avoided hospitalization and reinvest in quality of life.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Interactive Simulator */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <h4 className="text-lg font-bold text-slate-800 mb-6">Savings Reinvestment Simulator</h4>
            
            <div className="mb-10">
              <label className="block text-sm font-semibold text-slate-500 mb-4 uppercase">
                Number of Prevented Admissions (Annual): <span className="text-blue-600 text-lg ml-2">{admissions}</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={admissions} 
                onChange={(e) => setAdmissions(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-bold">
                <span>1 PATIENT</span>
                <span>100 PATIENTS</span>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center mb-8 shadow-inner">
              <div className="text-sm text-slate-400 mb-1 font-semibold uppercase">Total Estimated Savings</div>
              <div className="text-4xl font-black text-emerald-400">
                ${totalSavings.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                <i className="fas fa-brain text-blue-600 mb-2"></i>
                <div className="text-2xl font-bold text-blue-900">{ptsdUnits}</div>
                <div className="text-[10px] font-bold text-blue-600 uppercase">PTSD Care Units</div>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                <i className="fas fa-walking text-emerald-600 mb-2"></i>
                <div className="text-2xl font-bold text-emerald-900">{prostheticUnits}</div>
                <div className="text-[10px] font-bold text-emerald-600 uppercase">Prosthetic Supports</div>
              </div>
            </div>
          </div>

          {/* Strategic Narrative */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h5 className="text-xl font-bold text-slate-800 mb-2">Eliminate Downstream Waste</h5>
              <p className="text-slate-600 text-sm">Our AI reduces false positives from standard NT-proBNP tests, cutting expensive and unnecessary echocardiogram orders.</p>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h5 className="text-xl font-bold text-slate-800 mb-2">Immediate ROI</h5>
              <p className="text-slate-600 text-sm">Low-cost early drug therapy initiated by AI detection prevents high-cost emergency room visits.</p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h5 className="text-xl font-bold text-slate-800 mb-2">Mission Alignment</h5>
              <p className="text-slate-600 text-sm">Funds saved are reinvested into VHA's primary mission: comprehensive veteran wellbeing and specialized support services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialImpactSlide;
