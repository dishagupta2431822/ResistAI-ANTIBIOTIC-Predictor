import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  History, 
  Users, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">About Us</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Pioneering AI-Driven <br />
              <span className="text-blue-400">Pathogen Surveillance</span>
            </h1>
            <p className="text-blue-100/80 font-medium leading-relaxed text-lg">
              ResistAI is a leading testing, inspection, and calibration company dedicated to providing high-quality genomic analysis and resistance prediction services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                BTH is committed to accurate, reliable, and consistent results for testing & calibration services and training services. To protect and provide safety to the public by fostering and maintaining confidence in the product QUALITY.
              </p>
              <ul className="space-y-4">
                {[
                  "Accurate & reliable testing services",
                  "Consistent results for calibration",
                  "Fostering public safety",
                  "Maintaining product quality confidence"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-widest">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-blue-900 rounded-[3rem] text-white shadow-2xl shadow-blue-200"
            >
              <div className="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-blue-100 font-medium leading-relaxed mb-8">
                To sustain position as one of most valuable group of testing & calibration laboratories through our high class performance. To Create Awareness in the minds of people by imparting quality consciousness.
              </p>
              <ul className="space-y-4">
                {[
                  "High class performance in testing",
                  "Valuable group of laboratories",
                  "Imparting quality consciousness",
                  "Global leadership in AMR analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-blue-200 uppercase tracking-widest">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6">Our Journey</h4>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                A Legacy of Excellence in <br />
                Genomic Diagnostics
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                BTH is a trusted & time-tested partner for leading manufacturers & brands across the globe. BTH is an independent and accredited organization, serving Industries, Importers Govt. & Non- Govt. institutions. BTH aims to provide accurate & reliable testing, inspection & consultancy services at affordable costs and to motivate and educate various stake holders including manufacturers and users for selling and procuring the products as per National & International standards.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-blue-900">25+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Experience</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-blue-900">1000+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Clients</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "Expert Scientists", value: "150+" },
                { icon: Award, label: "Accreditations", value: "12+" },
                { icon: History, label: "Projects Completed", value: "50k+" },
                { icon: ShieldCheck, label: "Quality Rating", value: "99.9%" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Our Leadership</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Minds Behind ResistAI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Anand Balasubramanian", role: "Chief Scientific Officer", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop" },
              { name: "Prakash Kumar", role: "Director of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "SK Dora", role: "Head of AI Research", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 shadow-xl relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
