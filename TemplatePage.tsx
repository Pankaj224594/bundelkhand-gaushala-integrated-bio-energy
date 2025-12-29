
import React from 'react';
import { PageBlueprint } from '../types';
import ResearchSection from '../components/ResearchSection';

interface TemplatePageProps {
  data: PageBlueprint;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ data }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="bg-slate-100 py-16 px-6 border-b">
        <div className="max-w-4xl mx-auto">
          <span className="text-green-700 font-bold text-xs tracking-widest uppercase mb-4 block">
            Project Module
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{data.title}</h1>
          <div className="flex flex-wrap gap-4 items-center">
             <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-slate-600 flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Purpose: {data.purpose}
             </div>
             <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-slate-600 flex items-center">
                <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                Tone: {data.tone}
             </div>
          </div>
        </div>
      </header>

      <div>
        {data.sections.map((section, idx) => (
          <ResearchSection key={idx} content={section} index={idx} />
        ))}
      </div>
      
      {/* Disclaimer / Call to Policy */}
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-slate-400">
            For technical datasheets or academic references regarding {data.title}, please contact our research wing.
          </p>
          <button className="px-6 py-2 border border-slate-700 hover:bg-slate-800 text-xs font-bold uppercase tracking-widest transition-colors">
            Inquire Collaboration
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
