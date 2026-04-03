import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Dna, BrainCircuit, ShieldCheck, Microscope } from 'lucide-react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[100] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579154273821-397779083321?q=80&w=2070&auto=format&fit=crop" 
          alt="Laboratory Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-500/20 relative z-10">
          <Dna className="w-24 h-24 text-white animate-pulse" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-8 border-2 border-blue-500/20 rounded-full border-dashed"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h1 className="text-4xl font-black text-white tracking-tight mb-2">
          ResistAI <span className="text-blue-500">India</span>
        </h1>
        <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">
          Advanced AMR Surveillance Systems
        </p>
      </motion.div>

      <div className="absolute bottom-12 flex gap-8">
        {[
          { icon: BrainCircuit, label: "AI Analysis" },
          { icon: ShieldCheck, label: "Rule Engine" },
          { icon: Microscope, label: "Genomics" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + idx * 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <item.icon className="w-5 h-5 text-blue-400" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-600"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
      />
    </div>
  );
}
