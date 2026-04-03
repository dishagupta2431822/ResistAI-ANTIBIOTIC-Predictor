import React, { useState } from 'react';
import Papa from 'papaparse';
import { Upload, FileText, AlertCircle, CheckCircle2, ArrowLeft, Database, FileSpreadsheet } from 'lucide-react';
import { BacterialIsolate } from '../types';

interface DatasetExplorerProps {
  onDataParsed: (isolates: BacterialIsolate[]) => void;
  onBack: () => void;
}

export const DatasetExplorer: React.FC<DatasetExplorerProps> = ({ onDataParsed, onBack }) => {
  const [parsing, setParsing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setParsing(true);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          // Simplified parsing logic for demo purposes
          const isolates: BacterialIsolate[] = results.data.map((row: any, index) => ({
            id: row.id || `CSV-${index}`,
            species: row.species || 'Unknown',
            source: row.source || 'Clinical',
            location: row.location || 'Unknown',
            resistanceGenes: row.genes ? row.genes.split(',').map((g: string) => g.trim()) : [],
            susceptibility: [],
            metadata: {
              collectionDate: row.date || new Date().toISOString().split('T')[0],
              sequencingMethod: 'CSV Import'
            }
          }));
          onDataParsed(isolates);
          setParsing(false);
        } catch (err) {
          setError('Failed to parse CSV structure. Ensure headers match expected format.');
          setParsing(false);
        }
      },
      error: (err) => {
        setError(`Error parsing file: ${err.message}`);
        setParsing(false);
      }
    });
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

      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200">
            <FileSpreadsheet className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Dataset Explorer</h3>
            <p className="text-slate-500 font-medium">Upload and parse AMR datasets (CSV) directly in your browser</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-4">Supported Formats</h4>
              <ul className="space-y-3">
                {[
                  "Mendeley Data AMR Repositories",
                  "Kaggle Bacterial Resistance Datasets",
                  "Custom CSV with 'species', 'genes' headers",
                  "ICMR Surveillance Export Formats"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-5 h-5 text-indigo-600" />
                <h4 className="font-black text-indigo-900 uppercase tracking-wider text-xs">Privacy Note</h4>
              </div>
              <p className="text-xs text-indigo-700 leading-relaxed font-medium">
                All parsing happens locally in your browser. No data is uploaded to our servers during the explorer phase.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <label className="relative flex flex-col items-center justify-center w-full h-64 border-4 border-dashed border-slate-200 rounded-[2rem] hover:border-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="p-4 bg-slate-50 rounded-2xl mb-4 group-hover:bg-indigo-100 transition-all">
                  <Upload className="w-10 h-10 text-slate-400 group-hover:text-indigo-600" />
                </div>
                <p className="text-lg font-black text-slate-900 mb-1">
                  Click to upload CSV
                </p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">or drag and drop</p>
              </div>
              <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} disabled={parsing} />
            </label>

            {parsing && (
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-indigo-600 font-black uppercase tracking-widest animate-pulse">
                <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                Parsing dataset...
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-sm text-red-600 font-bold">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {!parsing && !error && (
              <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center gap-3 text-sm text-green-600 font-bold">
                <CheckCircle2 className="w-5 h-5" />
                System Ready for Import
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
