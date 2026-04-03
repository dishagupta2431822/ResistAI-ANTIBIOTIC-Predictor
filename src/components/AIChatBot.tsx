import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2, Minimize2, Maximize2, Trash2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

import { BacterialIsolate } from '../types';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

interface AIChatBotProps {
  isolates: BacterialIsolate[];
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ isolates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm the ResistAI Consultant. How can I assist you with antimicrobial resistance analysis or pathogen predictions today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const recentIsolates = isolates.slice(0, 5).map(iso => ({
        id: iso.id,
        species: iso.species,
        location: iso.location,
        genes: iso.resistanceGenes.join(', ')
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat(userMessage).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are a specialized AI consultant for ResistAI India, a leading antimicrobial resistance (AMR) surveillance platform. Your goal is to help clinicians, researchers, and lab technicians interpret genomic data, predict resistance patterns, and provide insights into pathogen behavior. 

Current Context:
Here are the most recent pathogens registered in our database:
${JSON.stringify(recentIsolates, null, 2)}

Be professional, technical, and precise. If asked about specific predictions, explain that you use genomic markers and machine learning models trained on Indian hospital data. Always maintain a corporate, scientific tone.`,
        }
      });

      const modelText = response.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, {
        role: 'model',
        text: modelText,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "I encountered an error connecting to the analysis engine. Please try again later.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => sendMessage(input);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '600px',
              width: '400px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden mb-4 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-900 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wider">ResistAI Consultant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-blue-200 font-bold uppercase">AI Engine Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setMessages([{
                      role: 'model',
                      text: "Hello! I'm the ResistAI Consultant. How can I assist you with antimicrobial resistance analysis or pathogen predictions today?",
                      timestamp: new Date()
                    }]);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                  title="Clear Chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                  {messages.length === 1 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        "Predict E. coli resistance",
                        "Latest AMR trends in India",
                        "Interpret genomic markers",
                        "Consult on treatment"
                      ].map((text, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(text)}
                          className="text-[10px] font-black uppercase tracking-widest p-3 bg-white border border-slate-200 rounded-xl text-blue-900 hover:bg-blue-50 transition-all text-left"
                        >
                          {text}
                        </button>
                      ))}
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex flex-col max-w-[85%]",
                        m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                      )}
                    >
                      <div 
                        className={cn(
                          "p-4 rounded-2xl text-sm leading-relaxed relative",
                          m.role === 'user' 
                            ? "bg-blue-900 text-white rounded-tr-none shadow-lg" 
                            : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"
                        )}
                      >
                        {m.role === 'model' && (
                          <div className="absolute -top-2 -left-2 bg-blue-900 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border-2 border-white">
                            Consultant
                          </div>
                        )}
                        <div className="prose prose-sm prose-slate max-w-none">
                          <ReactMarkdown>{m.text}</ReactMarkdown>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1.5 font-bold uppercase tracking-widest">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Analyzing...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about resistance patterns..."
                      className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-6 pr-14 text-sm font-medium focus:ring-2 focus:ring-blue-900/20 transition-all placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 p-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 disabled:opacity-50 disabled:hover:bg-blue-900 transition-all shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-400 mt-3 text-center font-bold uppercase tracking-widest">
                    Powered by ResistAI Genomic Intelligence Engine
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500",
          isOpen ? "bg-slate-900 rotate-90" : "bg-blue-900"
        )}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageSquare className="w-8 h-8 text-white" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};
