import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Download, 
  FileSpreadsheet, 
  FileCode,
  ArrowRight
} from 'lucide-react';

export const EBrochures: React.FC = () => {
  const brochures = [
    { title: "Corporate Profile 2024", size: "4.2 MB", type: "PDF" },
    { title: "Genomic Testing Services", size: "2.8 MB", type: "PDF" },
    { title: "AI Model Methodology", size: "5.1 MB", type: "PDF" },
    { title: "AMR Surveillance Report", size: "8.4 MB", type: "PDF" },
    { title: "Laboratory Accreditation", size: "1.5 MB", type: "PDF" },
    { title: "Service Price List", size: "0.9 MB", type: "PDF" }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FileText className="absolute -top-20 -right-20 w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">E-Brochures</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Download Our <br />
              <span className="text-blue-400">Resources & Guides</span>
            </h1>
            <p className="text-blue-100/80 font-medium leading-relaxed text-lg">
              Access our complete library of corporate brochures, service guides, and technical reports in digital format.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((brochure, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{brochure.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
                  <span className="flex items-center gap-1">
                    <FileSpreadsheet className="w-3 h-3" />
                    {brochure.type}
                  </span>
                  <span>{brochure.size}</span>
                </div>
                <button className="w-full bg-white text-blue-900 border border-slate-200 py-4 rounded-xl font-black hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                  <Download className="w-4 h-4" />
                  Download Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Print Copy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileCode className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Need a Physical Copy?</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            If you require printed versions of our brochures or technical documentation, please contact our support team with your mailing address.
          </p>
          <button className="bg-blue-900 text-white px-10 py-5 rounded-xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 mx-auto uppercase tracking-widest text-[10px]">
            Request Print Copy
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
