
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { group: 'White', auroc: 0.912 },
  { group: 'Black', auroc: 0.908 },
  { group: 'Hispanic', auroc: 0.905 },
  { group: 'Asian', auroc: 0.915 },
  { group: 'Elderly (65+)', auroc: 0.909 },
];

const ClinicalEvidenceSlide: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Scientific Rigor</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Message: Equitable Care Through Unbiased AI</h3>
          <p className="text-slate-600 text-lg">Consistent AUROC 0.905+ across diverse veteran demographics.</p>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0.85, 0.95]} hide />
                <YAxis dataKey="group" type="category" width={100} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-slate-900 text-white p-3 rounded shadow-lg text-sm">
                          <p className="font-bold">{payload[0].payload.group}</p>
                          <p className="text-blue-400">AUROC: {payload[0].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="auroc" radius={[0, 4, 4, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#10b981'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center border-t border-slate-200 pt-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Why this matters to the VA:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-slate-700 font-medium">Equitable Diagnostics: No performance drop for minority groups.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-slate-700 font-medium">Validated by Mayo Clinic & UCLA: Peer-reviewed reliability.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-slate-700 font-medium">High NPV (0.982): Exceptional for 'Rule-out' in primary care.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
                <div className="text-5xl font-black text-blue-600 mb-1">0.919</div>
                <div className="text-sm font-bold text-slate-500">Pivotal Study AUROC</div>
                <div className="mt-4 px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">vs 0.720 (Standard Blood Test)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalEvidenceSlide;
