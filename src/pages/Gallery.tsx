import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Image as ImageIcon, 
  Video, 
  Newspaper, 
  ChevronRight, 
  Play,
  Maximize2,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

type GalleryTab = 'developments' | 'photos' | 'videos';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('photos');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const developments = [
    { title: "BTHPL becomes the first laboratory for testing of RDC", date: "Jan 2024", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" },
    { title: "BTHPL has been designated as Conformity Assessment Body", date: "Dec 2023", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop" },
    { title: "BTHPL has been recognized by BIS for testing of Indian Languages", date: "Nov 2023", img: "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop" }
  ];

  const photos = [
    "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532187875605-1ef1c0172d94?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop"
  ];

  const videos = [
    { title: "Laboratory Tour 2024", duration: "5:30", img: "https://images.unsplash.com/photo-1579154273100-3334f590497f?q=80&w=2070&auto=format&fit=crop" },
    { title: "AI Model Explanation", duration: "3:45", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" },
    { title: "AMR Awareness Campaign", duration: "2:15", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop" }
  ];

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
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Gallery</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Visualizing Our <br />
              <span className="text-blue-400">Impact & Innovation</span>
            </h1>
            <p className="text-blue-100/80 font-medium leading-relaxed text-lg">
              Explore our laboratory facilities, recent developments, and educational content through our visual gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-12">
            {[
              { id: 'developments', label: 'Developments', icon: Newspaper },
              { id: 'photos', label: 'Photos', icon: ImageIcon },
              { id: 'videos', label: 'Videos', icon: Video }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as GalleryTab)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === tab.id 
                    ? "bg-blue-900 text-white shadow-lg shadow-blue-200" 
                    : "text-slate-500 hover:text-blue-900 hover:bg-slate-50"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-24 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === 'developments' && (
              <motion.div 
                key="developments"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {developments.map((dev, i) => (
                  <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={dev.img} 
                        alt={dev.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">{dev.date}</div>
                      <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">{dev.title}</h3>
                      <button className="flex items-center gap-2 text-[10px] font-black text-blue-900 uppercase tracking-widest hover:gap-4 transition-all">
                        Read Full Story
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'photos' && (
              <motion.div 
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {photos.map((photo, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square rounded-[2rem] overflow-hidden shadow-lg cursor-pointer relative group"
                    onClick={() => setSelectedMedia(photo)}
                  >
                    <img 
                      src={photo} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div 
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {videos.map((video, i) => (
                  <div key={i} className="group">
                    <div 
                      className="aspect-video rounded-[2rem] overflow-hidden shadow-xl relative cursor-pointer mb-6"
                      onClick={() => setSelectedMedia(video.img)}
                    >
                      <img 
                        src={video.img} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-blue-900 fill-blue-900 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight">{video.title}</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ResistAI Official Channel</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedMedia(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-7xl w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedMedia} 
                alt="Lightbox" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
