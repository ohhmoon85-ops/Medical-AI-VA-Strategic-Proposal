
import React from 'react';

const IcebergSlide: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-slate-50 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">The Hidden Threat</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Message: Early Detection is Not an Option, It's a Necessity</h3>
          <p className="text-slate-600 text-lg">Heart Failure symptoms are vague, leading to a dangerous 'Funnel Effect' in the veteran population.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Iceberg Visualization */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
            <div className="relative w-full h-64 flex justify-center">
              {/* Iceberg Drawing */}
              <div className="w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[100px] border-b-blue-200 absolute top-10 z-10"></div>
              <div className="w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-t-[140px] border-t-blue-800 absolute top-[110px]"></div>
              <div className="absolute top-[100px] w-full h-1 bg-slate-400 z-20"></div>
              
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-700 whitespace-nowrap">Symptomatic Patients (Limited)</div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
                <span className="text-3xl font-extrabold">~50%</span><br/>
                <span className="text-sm">Undiagnosed & High Risk</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-slate-500 text-center italic">
              "50% of heart failure patients are only discovered after serious progression."
            </p>
          </div>

          {/* Stakeholder Points */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-1 flex items-center">
                <i className="fas fa-user-md mr-2"></i> Clinical (Physicians)
              </h4>
              <p className="text-sm text-blue-700">Detect hidden LVEF dysfunction before overt symptoms occur. Move from 'wait-and-see' to 'intercept'.</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-800 mb-1 flex items-center">
                <i className="fas fa-chart-line mr-2"></i> Financial (Executives)
              </h4>
              <p className="text-sm text-emerald-700">Eliminate massive 'Late Diagnosis Costs'. The Iceberg represents billions in unmanaged liabilities.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-800 mb-1 flex items-center">
                <i className="fas fa-satellite mr-2"></i> Operational (Remote CBOCs)
              </h4>
              <p className="text-sm text-amber-700">Specialist-level screening at rural community clinics. Equal care regardless of geography.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcebergSlide;
