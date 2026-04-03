import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Download, 
  ExternalLink,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Accreditations: React.FC = () => {
  const certificates = [
    { id: "nabl", title: "NABL ISO 15189:2012", issuer: "National Accreditation Board for Testing and Calibration Laboratories", date: "2024-2026", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" },
    { id: "iso9001", title: "ISO 9001:2015", issuer: "International Organization for Standardization", date: "2023-2025", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop" },
    { id: "who", title: "WHO Prequalification", issuer: "World Health Organization", date: "2024-2027", img: "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop" },
    { id: "cap", title: "CAP Accreditation", issuer: "College of American Pathologists", date: "2023-2025", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Award className="absolute -top-20 -right-20 w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Accreditations</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Our Commitment to <br />
              <span className="text-blue-400">Quality & Standards</span>
            </h1>
            <p className="text-blue-100/80 font-medium leading-relaxed text-lg">
              ResistAI maintains the highest standards of quality and accuracy, backed by national and international accreditations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certificates.map((cert, i) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all flex flex-col lg:flex-row gap-10 items-center"
              >
                <div className="w-full lg:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-blue-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{cert.title}</h3>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
                    <FileCheck className="w-4 h-4" />
                    Valid Until: {cert.date}
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest hover:gap-4 transition-all">
                    View Certificate Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Quality Policy</h4>
              <h2 className="text-4xl font-black text-white mb-8 tracking-tight leading-tight">
                Our Footprint Evidences <br />
                Our Quality
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-10">
                ResistAI is committed to providing accurate and reliable genomic analysis services that meet the highest international standards. Our quality policy is built on the pillars of continuous improvement, technological innovation, and absolute data integrity.
              </p>
              <div className="space-y-6">
                {[
                  "Continuous monitoring of analytical performance",
                  "Regular participation in external quality assessment programs",
                  "Strict adherence to ISO 15189 and ISO 9001 standards",
                  "Comprehensive training and competency assessment for all staff"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
                <div className="text-6xl font-black text-blue-400 mb-6 tracking-tighter">99.9%</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Accuracy Guarantee</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">
                  We stand by our results. Our multi-layered validation process ensures that every prediction and analysis is verified by both AI and human experts.
                </p>
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-black hover:bg-blue-50 transition-all flex items-center gap-3 uppercase tracking-widest text-[10px]">
                  Learn More About Our Process
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
