import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dna, 
  Microscope, 
  Activity, 
  ShieldAlert, 
  ChevronRight, 
  Search, 
  Database, 
  BrainCircuit,
  AlertTriangle,
  CheckCircle2,
  Info,
  ArrowRight,
  FlaskConical,
  Plus,
  FileSpreadsheet,
  LayoutDashboard,
  User,
  ShieldCheck,
  History,
  LogOut,
  Mail,
  Globe,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import Markdown from 'react-markdown';
import { MOCK_ISOLATES, GENE_NETWORK_DATA } from './lib/mockData';
import { predictResistance } from './lib/gemini';
import { runRuleBasedEngine } from './lib/ruleEngine';
import { BacterialIsolate, PredictionResult, RuleBasedPrediction } from './types';
import { GeneNetwork } from './components/GeneNetwork';
import { ResistanceChart } from './components/ResistanceChart';
import { ResistanceRadarChart } from './components/ResistanceRadarChart';
import { IsolateForm } from './components/IsolateForm';
import { DatasetExplorer } from './components/DatasetExplorer';
import { SplashScreen } from './components/SplashScreen';
import { LoginPage } from './components/LoginPage';
import { DetailView } from './components/DetailView';
import { MethodologyView } from './components/MethodologyView';
import { AIChatBot } from './components/AIChatBot';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ViewMode = 'dashboard' | 'entry' | 'explorer' | 'details' | 'methodology';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Accreditations } from './pages/Accreditations';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { EBrochures } from './pages/EBrochures';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [isolates, setIsolates] = useState<BacterialIsolate[]>(MOCK_ISOLATES);
  const [selectedIsolate, setSelectedIsolate] = useState<BacterialIsolate | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [rulePredictions, setRulePredictions] = useState<RuleBasedPrediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIsolates = isolates.filter(iso => 
    iso.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    iso.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
    iso.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePredict = async (isolate: BacterialIsolate) => {
    setLoading(true);
    setSelectedIsolate(isolate);
    setViewMode('details');
    
    const rules = runRuleBasedEngine(isolate);
    setRulePredictions(rules);

    try {
      const result = await predictResistance(isolate);
      setPrediction(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewIsolate = (isolate: BacterialIsolate) => {
    setIsolates([isolate, ...isolates]);
    handlePredict(isolate);
  };

  const handleDataParsed = (newIsolates: BacterialIsolate[]) => {
    setIsolates([...newIsolates, ...isolates]);
    setViewMode('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setViewMode('dashboard');
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const DashboardContent = () => {
    if (!isAuthenticated) {
      return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
    }

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Navigation (Internal) */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 custom-scrollbar">
          {[
            { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
            { id: 'entry', label: 'New Entry', icon: Plus },
            { id: 'explorer', label: 'Dataset', icon: FileSpreadsheet },
            { id: 'methodology', label: 'AI Model', icon: BrainCircuit },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setViewMode(item.id as ViewMode)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                viewMode === item.id 
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-slate-500 border border-slate-200 hover:border-blue-900 hover:text-blue-900"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'details' && selectedIsolate ? (
            <DetailView 
              key="details"
              isolate={selectedIsolate}
              prediction={prediction}
              rulePredictions={rulePredictions}
              onBack={() => setViewMode('dashboard')}
              loading={loading}
            />
          ) : viewMode === 'entry' ? (
            <motion.div 
              key="entry"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <IsolateForm 
                onSubmit={handleNewIsolate} 
                onBack={() => setViewMode('dashboard')}
              />
            </motion.div>
          ) : viewMode === 'explorer' ? (
            <motion.div 
              key="explorer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DatasetExplorer 
                onDataParsed={handleDataParsed} 
                onBack={() => setViewMode('dashboard')}
              />
            </motion.div>
          ) : viewMode === 'methodology' ? (
            <motion.div 
              key="methodology"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <MethodologyView 
                onBack={() => setViewMode('dashboard')}
              />
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar: Isolate List */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                  <div className="bg-blue-900 p-6 text-white">
                    <h2 className="text-lg font-black flex items-center gap-2 uppercase tracking-widest">
                      <Database className="w-5 h-5" />
                      Surveillance Data
                    </h2>
                    <p className="text-[10px] text-blue-300 font-bold mt-1 uppercase tracking-widest">Real-time Indian Pathogen Database</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="relative mb-6">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search by city or species..."
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="space-y-0 divide-y divide-slate-100 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {filteredIsolates.map((isolate) => (
                        <button
                          key={isolate.id}
                          onClick={() => handlePredict(isolate)}
                          className={cn(
                            "w-full text-left p-4 transition-all group hover:bg-slate-50",
                            selectedIsolate?.id === isolate.id ? "bg-blue-50" : "bg-white"
                          )}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">{isolate.id}</span>
                            <span className="text-[10px] font-black text-slate-400">{isolate.metadata.collectionDate}</span>
                          </div>
                          <h3 className="font-black text-slate-900 group-hover:text-blue-900 transition-colors italic">
                            {isolate.species}
                          </h3>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-[10px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-widest">
                              <MapPin className="w-3 h-3" />
                              {isolate.location}
                            </p>
                            <span className="text-[9px] font-black bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">
                              {isolate.source}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                  <div className="relative z-10">
                    <h3 className="font-black text-blue-900 mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                      <BrainCircuit className="w-5 h-5" />
                      AI Methodology
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Our "One Stop Solution" for AMR prediction uses 94% accurate genomic modeling for Indian tertiary care settings.
                    </p>
                    <button 
                      onClick={() => setViewMode('methodology')}
                      className="mt-6 w-full bg-blue-900 text-white py-3 rounded-xl text-[10px] font-black transition-all hover:bg-blue-800 uppercase tracking-[0.2em] shadow-lg shadow-blue-200"
                    >
                      View Our Methodology
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content Area: Hero Style */}
              <div className="lg:col-span-8">
                <motion.div 
                  key="dashboard-empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative flex flex-col lg:flex-row"
                >
                  <div className="lg:w-1/2 p-12 flex flex-col justify-center relative z-10">
                    <h4 className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Welcome To ResistAI India</h4>
                    <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-6 tracking-tight leading-[1.1]">
                      One Stop Solution for <br />
                      <span className="text-slate-900">AMR Surveillance</span>
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm mb-10 max-w-md">
                      We support clinicians to gain access to vibrant Indian genomic data, providing accurate and timely resistance predictions. Our exhaustive portfolio of testing services will meet your most complex requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setViewMode('entry')}
                        className="bg-blue-900 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 flex items-center gap-3 uppercase tracking-widest text-[10px]"
                      >
                        <Plus className="w-4 h-4" />
                        New Patient Entry
                      </button>
                      <button 
                        onClick={() => setViewMode('explorer')}
                        className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-xl font-black hover:bg-blue-50 transition-all flex items-center gap-3 uppercase tracking-widest text-[10px]"
                      >
                        <FileSpreadsheet className="w-4 h-4" />
                        View Our Services
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-1/2 relative bg-slate-50 flex items-center justify-center p-12">
                    {/* Circular Diagram Visual */}
                    <div className="relative w-full aspect-square max-w-[400px]">
                      <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-[spin_60s_linear_infinite]" />
                      <div className="absolute inset-4 border border-slate-200 rounded-full" />
                      
                      {/* Central Node */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-blue-900 flex items-center justify-center z-20">
                        <Dna className="w-12 h-12 text-blue-900" />
                      </div>

                      {/* Satellite Nodes */}
                      {[
                        { icon: Microscope, label: "Genomics", color: "bg-blue-600", pos: "top-0 left-1/2 -translate-x-1/2" },
                        { icon: Activity, label: "Real-time", color: "bg-indigo-600", pos: "top-1/4 right-0" },
                        { icon: ShieldCheck, label: "Verified", color: "bg-green-600", pos: "bottom-1/4 right-0" },
                        { icon: Database, label: "Big Data", color: "bg-purple-600", pos: "bottom-0 left-1/2 -translate-x-1/2" },
                        { icon: BrainCircuit, label: "AI Model", color: "bg-blue-900", pos: "bottom-1/4 left-0" },
                        { icon: FlaskConical, label: "Testing", color: "bg-slate-900", pos: "top-1/4 left-0" },
                      ].map((node, i) => (
                        <div key={i} className={cn("absolute w-16 h-16 flex flex-col items-center gap-1 z-10", node.pos)}>
                          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white", node.color)}>
                            <node.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500 bg-white px-1 rounded">{node.label}</span>
                        </div>
                      ))}

                      {/* Connecting Lines (Visual only) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-0.5 bg-slate-300 rotate-45" />
                        <div className="w-full h-0.5 bg-slate-300 -rotate-45" />
                        <div className="w-0.5 h-full bg-slate-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/e-brochures" element={<EBrochures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <AIChatBot isolates={isolates} />
      </Layout>
    </BrowserRouter>
  );
}
