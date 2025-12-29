
import React from 'react';
import { ShieldCheck, Zap, Recycle, FileText } from 'lucide-react';
import { SITE_NAME, TAGLINE } from '../constants';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-700 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>Pilot Research Phase</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {SITE_NAME}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            {TAGLINE}
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Project Overview</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Bundelkhand Bio Power Private Limited presents an integrated pilot model designed to transform 
                  traditional Gaushalas into circular economy hubs. This model addresses the critical need for 
                  rural sustainability by integrating livestock welfare with multi-source renewable energy generation.
                </p>
                <p>
                  By utilizing non-milking bulls for mechanical energy and cow dung for Bio-CNG, the system ensures 
                  that animal welfare becomes economically viable and energy-independent.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Animal Welfare", desc: "Ethical bull utilization via treadmill systems." },
                { icon: Zap, title: "Energy Autonomy", desc: "Biogas, Bio-CNG, and Solar-Wind integration." },
                { icon: Recycle, title: "Circular Economy", desc: "Waste to bio-fertilizer and pyrolysis oil." },
                { icon: FileText, title: "Research Focus", desc: "Data-driven validation for future scalability." },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                  <item.icon className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Scope */}
      <section className="py-20 bg-slate-50 border-t border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Purpose of the Pilot Project</h2>
          <p className="text-slate-600 mb-10 leading-relaxed italic">
            "To demonstrate the technical feasibility and ecological impact of a zero-waste, gaushala-centered energy campus."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border-l-2 border-green-600 text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Technical Validation</h4>
              <p className="text-xs text-slate-500">Optimizing energy conversion from bovine mechanical movement.</p>
            </div>
            <div className="p-4 border-l-2 border-green-600 text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Resource Efficiency</h4>
              <p className="text-xs text-slate-500">Maximizing value from every kilogram of dung and agricultural waste.</p>
            </div>
            <div className="p-4 border-l-2 border-green-600 text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Policy Blueprint</h4>
              <p className="text-xs text-slate-500">Creating a replicable model for rural development stakeholders.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
