
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-xl">M</div>
            <span className="font-black text-2xl tracking-tighter">MEDICAL AI</span>
          </div>
          <p className="text-slate-400 text-sm max-w-xs font-light">
            Empowering the U.S. Veterans Affairs through world-class AI diagnostic excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h6 className="font-bold text-blue-400 mb-4 uppercase text-xs tracking-widest">Global Offices</h6>
            <ul className="space-y-2 text-slate-300">
              <li>Washington D.C.</li>
              <li>Seoul, South Korea</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-emerald-400 mb-4 uppercase text-xs tracking-widest">Connect</h6>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Request Pilot</a></li>
              <li><a href="#" className="hover:text-white transition-colors underline decoration-blue-500/50">Download Clinical Whitepaper</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
        Copyright © 2026 Medical AI Co., Ltd. | Confidential Proposal for VHA Stakeholders
      </div>
    </footer>
  );
};

export default Footer;
