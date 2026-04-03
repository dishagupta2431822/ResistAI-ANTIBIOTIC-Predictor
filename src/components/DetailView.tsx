import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Dna, 
  Activity, 
  FlaskConical, 
  Info, 
  User, 
  AlertTriangle, 
  ShieldCheck, 
  LayoutDashboard,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  Download,
  Share2,
  Printer,
  Globe
} from 'lucide-react';
import { cn } from '../lib/utils';
import Markdown from 'react-markdown';
import { BacterialIsolate, PredictionResult, RuleBasedPrediction } from '../types';
import { ResistanceRadarChart } from './ResistanceRadarChart';
import { GeneNetwork } from './GeneNetwork';
import { GENE_NETWORK_DATA } from '../lib/mockData';

interface DetailViewProps {
  isolate: BacterialIsolate;
  prediction: PredictionResult | null;
  rulePredictions: RuleBasedPrediction[];
  onBack: () => void;
  loading: boolean;
}

export function DetailView({ isolate, prediction, rulePredictions, onBack, loading }: DetailViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8 pb-20"
    >
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
        >
          <div className="p-2 bg-white rounded-xl border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Dashboard
        </button>
        <div className="flex gap-3">
          <button className="p-2 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
            <Download className="w-5 h-5 text-slate-500" />
          </button>
          <button className="p-2 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
            <Share2 className="w-5 h-5 text-slate-500" />
          </button>
          <button className="p-2 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
            <Printer className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Main Isolate Overview: "About Us" Style */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-2/5 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1583912267550-d44d7a125820?q=80&w=2070&auto=format&fit=crop" 
            alt="Bacteria Species" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
          {/* Success Staircase Overlay (Simplified) */}
          <div className="absolute inset-0 flex items-end p-12 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-blue-400" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Success Through Data</span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                Accurate <br />
                <span className="text-blue-400">Genomic Insights</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 p-12 space-y-10">
          <div>
            <h4 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Isolate Analysis Report</h4>
            <h1 className="text-5xl font-black text-blue-900 mb-6 tracking-tight italic leading-none">
              {isolate.species}
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed text-sm max-w-2xl">
              ResistAI is a trusted & time-tested partner for leading healthcare providers across India. This report provides prompt, accurate & reliable genomic testing results at affordable computational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black text-blue-900 uppercase tracking-widest">Our Mission</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                To protect and provide safety to public, by fostering and maintaining confidence in the pathogen resistance profile of clinical isolates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black text-blue-900 uppercase tracking-widest">Our Vision</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                To sustain position as one of most valuable genomic surveillance platforms through our high class performance and accuracy.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 grid grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Isolate ID</span>
              <p className="text-sm font-black text-blue-900">{isolate.id}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Collection</span>
              <p className="text-sm font-black text-blue-900">{isolate.metadata.collectionDate}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</span>
              <p className="text-sm font-black text-blue-900">{isolate.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Rules & Radar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-2 border-blue-900 overflow-hidden">
            <div className="bg-blue-900 p-6 text-white">
              <h3 className="text-lg font-black flex items-center gap-3 uppercase tracking-widest">
                <ShieldCheck className="w-6 h-6" />
                Latest Findings
              </h3>
            </div>
            <div className="p-8 space-y-0 divide-y divide-slate-100">
              {rulePredictions.map((p, idx) => (
                <div key={idx} className="py-4 flex items-start gap-4 group">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-blue-900 uppercase tracking-widest text-xs">{p.antibiotic}</span>
                      <span className={cn(
                        "text-[9px] font-black uppercase px-2 py-0.5 rounded",
                        p.result === 'Resistant' ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                      )}>
                        {p.result}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{p.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
              Resistance Profile
            </h3>
            <div className="h-[300px]">
              <ResistanceRadarChart predictions={rulePredictions} />
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="lg:col-span-7 space-y-8">
          {loading ? (
            <div className="bg-white p-20 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center justify-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <BrainCircuit className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">AI Technical Analysis</h3>
              <p className="text-slate-500 font-medium animate-pulse">Processing genomic markers and clinical history...</p>
            </div>
          ) : prediction && (
            <>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                  <BrainCircuit className="w-6 h-6 text-blue-600" />
                  AI Technical Analysis
                </h3>
                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 prose prose-slate max-w-none">
                  <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                    <Markdown>{prediction.analysis}</Markdown>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Treatment Strategies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prediction.suggestedTreatments.map((treatment, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-green-50/50 rounded-2xl border border-green-100 hover:bg-green-50 transition-all">
                      <div className="mt-1">
                        <ArrowRight className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-sm text-green-900 font-bold leading-snug">{treatment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <Info className="w-6 h-6 text-slate-400" />
              Gene Interaction Network
            </h3>
            <div className="h-[400px] bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
              <GeneNetwork nodes={GENE_NETWORK_DATA.nodes} links={GENE_NETWORK_DATA.links} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
