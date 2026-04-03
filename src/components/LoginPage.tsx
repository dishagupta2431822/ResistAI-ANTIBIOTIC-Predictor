import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dna, Mail, Lock, ArrowRight, ShieldCheck, Globe, Database } from 'lucide-react';

export function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Image */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical Research" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <h2 className="text-3xl font-black text-white mb-4 leading-tight">
              Empowering India's <br />
              <span className="text-blue-400">AMR Surveillance</span>
            </h2>
            <p className="text-blue-100 font-medium leading-relaxed">
              Advanced genomic analysis and real-time tracking for a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-200 mb-6">
              <Dna className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">ResistAI</h1>
            <p className="text-slate-500 font-medium text-sm mt-2">India AMR Surveillance Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  required
                  placeholder="name@hospital.gov.in"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-3 gap-4">
            {[
              { icon: Globe, label: "National" },
              { icon: Database, label: "Secure" },
              { icon: ShieldCheck, label: "Verified" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <item.icon className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
