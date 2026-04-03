import React from 'react';
import { motion } from 'motion/react';
import { 
  Dna, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  Database, 
  BrainCircuit,
  FlaskConical,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Globe,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop" 
            alt="Laboratory Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Welcome To ResistAI India</h4>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
                One Stop Solution for <br />
                <span className="text-blue-400">AMR Surveillance</span>
              </h1>
              <p className="text-slate-300 font-medium leading-relaxed text-lg mb-12 max-w-xl">
                We support clinicians to gain access to vibrant Indian genomic data, providing accurate and timely resistance predictions. Our exhaustive portfolio of testing services will meet your most complex requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/dashboard"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/50 flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                >
                  Access Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-black hover:bg-white/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative flex items-center justify-center"
            >
              {/* Circular Diagram Visual */}
              <div className="relative w-full aspect-square max-w-[500px]">
                {/* Outer rotating dashed border */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full animate-[spin_60s_linear_infinite]" />
                
                {/* Inner static border */}
                <div className="absolute inset-12 border border-white/10 rounded-full" />
                
                {/* Central Node */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)] border-4 border-blue-600 flex flex-col items-center justify-center z-20 cursor-pointer"
                >
                  <Dna className="w-16 h-16 text-blue-900 mb-1" />
                  <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">ResistAI</span>
                </motion.div>

                {/* Satellite Nodes */}
                {[
                  { icon: Microscope, label: "Testing", color: "bg-blue-600", pos: "top-0 left-1/2 -translate-x-1/2" },
                  { icon: BrainCircuit, label: "AI Prediction", color: "bg-indigo-600", pos: "top-1/4 right-0" },
                  { icon: Activity, label: "Surveillance", color: "bg-green-600", pos: "bottom-1/4 right-0" },
                  { icon: Database, label: "Big Data", color: "bg-purple-600", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                  { icon: ShieldCheck, label: "Accredited", color: "bg-blue-900", pos: "bottom-1/4 left-0" },
                  { icon: FlaskConical, label: "R & D", color: "bg-slate-900", pos: "top-1/4 left-0" },
                ].map((node, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 200; // Adjust based on container size
                  const x = Math.cos(angle - Math.PI/2) * radius;
                  const y = Math.sin(angle - Math.PI/2) * radius;

                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      style={{ 
                        left: `calc(50% + ${x}px)`, 
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="absolute flex flex-col items-center gap-2 z-10"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/10 backdrop-blur-md transition-all cursor-pointer",
                          node.color
                        )}
                      >
                        <node.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white whitespace-nowrap">{node.label}</span>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting Lines (Visual only) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-full h-0.5 bg-white rotate-45" />
                  <div className="w-full h-0.5 bg-white -rotate-45" />
                  <div className="w-0.5 h-full bg-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Our Capabilities</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Comprehensive Testing & Analysis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Genomic Testing", 
                icon: Microscope, 
                desc: "High-throughput sequencing and analysis of clinical isolates to identify resistance markers.",
                color: "blue"
              },
              { 
                title: "AI Predictions", 
                icon: BrainCircuit, 
                desc: "Advanced machine learning models trained on Indian hospital data for accurate MIC predictions.",
                color: "indigo"
              },
              { 
                title: "Surveillance", 
                icon: Activity, 
                desc: "Real-time monitoring of AMR trends across major Indian cities and healthcare facilities.",
                color: "green"
              },
              { 
                title: "Consultancy", 
                icon: ShieldAlert, 
                desc: "Expert guidance on infection control and antibiotic stewardship programs.",
                color: "red"
              },
              { 
                title: "Data Management", 
                icon: Database, 
                desc: "Secure, cloud-based infrastructure for managing large-scale genomic datasets.",
                color: "purple"
              },
              { 
                title: "R & D", 
                icon: FlaskConical, 
                desc: "Continuous research into emerging pathogens and novel resistance mechanisms.",
                color: "slate"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group"
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:scale-110",
                  `bg-${service.color}-600`
                )}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/services" className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest hover:gap-4 transition-all">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" 
                  alt="Scientist at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20 max-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-widest">NABL Accredited</div>
                </div>
                <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                  Our laboratory is fully accredited by NABL for genomic analysis and clinical testing.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6">About Us</h4>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                ResistAI is a trusted & time-tested partner for leading healthcare providers.
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                ResistAI is an independent and accredited organization, serving Indian hospitals, research institutes, and government bodies. We aim to provide accurate and reliable testing, inspection, and consultancy services at affordable costs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Our Mission</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    To provide accurate, timely, and actionable genomic insights to combat the global threat of AMR.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Our Vision</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    To be the global leader in AI-driven pathogen surveillance and resistance prediction.
                  </p>
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center gap-3 text-blue-900 font-black uppercase tracking-widest text-xs hover:gap-5 transition-all"
              >
                Learn More About Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Stay Updated</h4>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Latest News & Developments</h2>
            </div>
            <Link 
              to="/gallery"
              className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest hover:gap-4 transition-all"
            >
              View All News
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "ResistAI designated as National Reference Lab for AMR", 
                date: "March 28, 2024", 
                category: "Achievement",
                img: "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "New AI Model achieves 96% accuracy in E. coli resistance prediction", 
                date: "March 15, 2024", 
                category: "Innovation",
                img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Expansion of surveillance network to 50 new tertiary care centers", 
                date: "Feb 22, 2024", 
                category: "Network",
                img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((news, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-blue-900 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {news.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{news.date}</div>
                  <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                    {news.title}
                  </h3>
                  <button className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest hover:gap-4 transition-all">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Trusted Partners</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder logos */}
            {['AIIMS', 'ICMR', 'WHO', 'Apollo', 'Fortis', 'Max Healthcare'].map((client, i) => (
              <div key={i} className="text-2xl font-black text-slate-900 tracking-tighter">{client}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
