import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BrainCircuit, ShieldCheck, Microscope, Database, Activity } from 'lucide-react';

interface MethodologyViewProps {
  onBack: () => void;
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({ onBack }) => {
  return (
    <div className="space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
      >
        <div className="p-2 bg-white rounded-xl border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </div>
        Back to Dashboard
      </button>

      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Our Technical Framework</h4>
            <h2 className="text-4xl font-black text-blue-900 tracking-tight leading-none">
              Glimpse of Our <br />
              <span className="text-slate-900">Key Methodologies</span>
            </h2>
          </div>
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Genomics</button>
            <button className="px-6 py-2.5 text-slate-500 hover:bg-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">AI Model</button>
            <button className="px-6 py-2.5 text-slate-500 hover:bg-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Validation</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              num: "01", 
              title: "Data Sourcing", 
              desc: "We aggregate genomic data from tertiary care hospitals across India, including AIIMS, CMC Vellore, and PGI Chandigarh.",
              icon: Database,
              img: "https://images.unsplash.com/photo-1511174511195-4674a008a423?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              num: "02", 
              title: "Feature Extraction", 
              desc: "Our pipeline identifies 4,500+ resistance-conferring mutations and horizontal gene transfer events using k-mer analysis.",
              icon: Microscope,
              img: "https://images.unsplash.com/photo-1532187863486-abf9d3c3223d?q=80&w=2070&auto=format&fit=crop"
            },
            { 
              num: "03", 
              title: "Validation", 
              desc: "Predictions are cross-validated against phenotypic AST results (VITEK-2) with a categorical agreement of 94.2%.",
              icon: ShieldCheck,
              img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs font-black shadow-xl">
                  {item.num}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-900 group-hover:border-blue-900 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-black text-blue-900 mb-4 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <button className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More..
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-blue-900 rounded-[2.5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">Latest Technical News</h3>
              <ul className="space-y-3">
                {[
                  "ResistAI has initiated a National Skills Training Program for AMR genomic data analysis.",
                  "Our platform has been approved by CDSCO for clinical decision support in tertiary care.",
                  "Recognized by ICMR as India's largest digital surveillance facility for ESKAPE pathogens.",
                  "Designated as a Conformity Assessment Body (CAB) for digital health standards in 2026."
                ].map((news, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-medium text-blue-100">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {news}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-blue-900 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-blue-50 transition-all">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
