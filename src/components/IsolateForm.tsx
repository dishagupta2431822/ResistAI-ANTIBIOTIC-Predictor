import React, { useState } from 'react';
import { BacterialIsolate, PatientDemographics } from '../types';
import { User, FlaskConical, MapPin, Calendar, PlusCircle, Trash2, ArrowLeft, Database } from 'lucide-react';
import { cn } from '../lib/utils';

interface IsolateFormProps {
  onSubmit: (isolate: BacterialIsolate) => void;
  onBack: () => void;
}

export const IsolateForm: React.FC<IsolateFormProps> = ({ onSubmit, onBack }) => {
  const [species, setSpecies] = useState('');
  const [source, setSource] = useState<'Clinical' | 'Environmental'>('Clinical');
  const [location, setLocation] = useState('');
  const [genes, setGenes] = useState<string[]>([]);
  const [currentGene, setCurrentGene] = useState('');
  const [patient, setPatient] = useState<PatientDemographics>({
    age: 30,
    gender: 'Male',
    comorbidities: []
  });

  const handleAddGene = () => {
    if (currentGene && !genes.includes(currentGene)) {
      setGenes([...genes, currentGene]);
      setCurrentGene('');
    }
  };

  const handleRemoveGene = (gene: string) => {
    setGenes(genes.filter(g => g !== gene));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIsolate: BacterialIsolate = {
      id: `USR-${Math.random().toString(36).substr(2, 9)}`,
      species,
      source,
      location,
      resistanceGenes: genes,
      susceptibility: [],
      patient: source === 'Clinical' ? patient : undefined,
      metadata: {
        collectionDate: new Date().toISOString().split('T')[0],
        sequencingMethod: 'Manual Entry'
      }
    };
    onSubmit(newIsolate);
  };

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

      <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
        <div className="bg-blue-900 p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h4 className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Surveillance Network</h4>
            <h3 className="text-4xl font-black tracking-tight leading-none uppercase italic">
              New Pathogen <br />
              <span className="text-blue-400">Registration</span>
            </h3>
            <p className="mt-6 text-blue-100/60 text-xs font-medium max-w-md leading-relaxed">
              Register a new clinical or environmental isolate into the ResistAI India database. All data is processed through our validated genomic pipeline.
            </p>
          </div>
        </div>

        <div className="p-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bacterial Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
                  <FlaskConical className="w-5 h-5 text-blue-900" />
                </div>
                <h4 className="text-lg font-black text-blue-900 uppercase tracking-widest">Isolate Details</h4>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bacterial Species</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Klebsiella pneumoniae"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sample Source</label>
                    <select 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all"
                      value={source}
                      onChange={(e) => setSource(e.target.value as any)}
                    >
                      <option value="Clinical">Clinical</option>
                      <option value="Environmental">Environmental</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="e.g. Mumbai, India"
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Info (if clinical) */}
            <div className={cn("space-y-8 transition-opacity duration-500", source !== 'Clinical' && "opacity-30 pointer-events-none")}>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
                  <User className="w-5 h-5 text-blue-900" />
                </div>
                <h4 className="text-lg font-black text-blue-900 uppercase tracking-widest">Patient Profile</h4>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Age</label>
                    <input 
                      type="number" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all"
                      value={patient.age}
                      onChange={(e) => setPatient({...patient, age: parseInt(e.target.value)})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gender</label>
                    <select 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all"
                      value={patient.gender}
                      onChange={(e) => setPatient({...patient, gender: e.target.value as any})}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Comorbidities</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Diabetes, Hypertension"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300"
                    onChange={(e) => setPatient({...patient, comorbidities: e.target.value.split(',').map(s => s.trim())})}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resistance Genes */}
          <div className="space-y-8 pt-12 border-t border-slate-100">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
                <Database className="w-5 h-5 text-blue-900" />
              </div>
              <h4 className="text-lg font-black text-blue-900 uppercase tracking-widest">Genomic Markers</h4>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="e.g. blaNDM-1"
                  className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-blue-900 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300"
                  value={currentGene}
                  onChange={(e) => setCurrentGene(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddGene())}
                />
                <button 
                  type="button"
                  onClick={handleAddGene}
                  className="bg-blue-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
                >
                  Add Gene
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {genes.map(gene => (
                  <span key={gene} className="bg-blue-50 text-blue-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100 flex items-center gap-3">
                    {gene}
                    <button type="button" onClick={() => handleRemoveGene(gene)}>
                      <Trash2 className="w-3.5 h-3.5 text-blue-400 hover:text-red-500 transition-colors" />
                    </button>
                  </span>
                ))}
                {genes.length === 0 && (
                  <p className="text-xs text-slate-400 font-medium italic">No genomic markers added yet.</p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-12">
            <button 
              type="submit"
              className="w-full bg-blue-900 text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 group"
            >
              Analyze & Register Isolate
              <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
