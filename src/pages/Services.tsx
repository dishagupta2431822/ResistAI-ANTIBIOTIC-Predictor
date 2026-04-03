import React from 'react';
import { motion } from 'motion/react';
import { 
  Microscope, 
  BrainCircuit, 
  Activity, 
  ShieldAlert, 
  Database, 
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Zap,
  Lock,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Services: React.FC = () => {
  const services = [
    {
      id: "testing",
      title: "Genomic Testing",
      icon: Microscope,
      desc: "Comprehensive testing of clinical isolates using next-generation sequencing to identify resistance genes and mutations.",
      features: [
        "Whole Genome Sequencing (WGS)",
        "Targeted Gene Panels",
        "Species Identification",
        "Strain Typing"
      ],
      img: "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "calibration",
      title: "AI Calibration",
      icon: BrainCircuit,
      desc: "Calibration of diagnostic equipment and software using our proprietary AI models trained on vast Indian datasets.",
      features: [
        "MIC Prediction Calibration",
        "Automated AST Interpretation",
        "Machine Learning Model Tuning",
        "Validation Services"
      ],
      img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "surveillance",
      title: "AMR Surveillance",
      icon: Activity,
      desc: "Real-time surveillance of antimicrobial resistance patterns across healthcare facilities to inform policy and treatment.",
      features: [
        "Regional Trend Analysis",
        "Outbreak Detection",
        "Resistance Mapping",
        "Policy Support"
      ],
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "consultancy",
      title: "Expert Consultancy",
      icon: ShieldAlert,
      desc: "Specialized consultancy services for hospitals and labs to implement effective antibiotic stewardship programs.",
      features: [
        "Stewardship Implementation",
        "Infection Control Audits",
        "Lab Workflow Optimization",
        "Training & Education"
      ],
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop" 
            alt="Lab background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Our Services</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              One Stop Solution for <br />
              <span className="text-blue-400">Genomic Intelligence</span>
            </h1>
            <p className="text-slate-300 font-medium leading-relaxed text-lg">
              We provide a comprehensive range of services from basic testing to advanced AI-driven analysis, ensuring you have the data you need to combat AMR effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {services.map((service, i) => (
            <div key={service.id} className={cn(
              "flex flex-col lg:flex-row gap-20 items-center",
              i % 2 !== 0 && "lg:flex-row-reverse"
            )}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">{service.title}</h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 flex items-center gap-3 uppercase tracking-widest text-[10px]">
                  Request Service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The ResistAI Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Rapid Results", icon: Zap, desc: "Get genomic analysis and resistance predictions in hours, not days." },
              { title: "Secure Data", icon: Lock, desc: "Your genomic data is protected by enterprise-grade security and encryption." },
              { title: "Deep Insights", icon: Search, desc: "Go beyond basic AST with detailed genomic marker interpretation." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
