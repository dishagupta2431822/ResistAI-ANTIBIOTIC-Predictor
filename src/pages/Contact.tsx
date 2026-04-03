import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Globe,
  MessageSquare,
  Building2
} from 'lucide-react';

export const Contact: React.FC = () => {
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
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Contact Us</h4>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Get in Touch with <br />
              <span className="text-blue-400">Our Experts</span>
            </h1>
            <p className="text-blue-100/80 font-medium leading-relaxed text-lg">
              Have questions about our testing services or AI predictions? Our team is here to help you with any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Corporate Office</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Location</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        1474, HSIIDC Industrial Estate, Rai, Dist. Sonipat, Haryana — 131029, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Call Us</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        +91-800-RESIST-AI <br />
                        +91-130-4092202
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Email</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        contact@resistai.in <br />
                        support@resistai.in
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Working Hours</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Monday — Saturday: 9:00 AM — 6:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Need Urgent Help?</h3>
                <p className="text-slate-400 text-sm font-medium mb-8">
                  Our AI consultant is available 24/7 to answer basic questions about AMR and our services.
                </p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black hover:bg-blue-500 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                  <MessageSquare className="w-4 h-4" />
                  Chat with Consultant
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                      <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium appearance-none">
                        <option>General Inquiry</option>
                        <option>Testing Services</option>
                        <option>AI Predictions</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 transition-all font-medium resize-none"
                    />
                  </div>
                  <button className="w-full bg-blue-900 text-white py-5 rounded-xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-slate-400 font-black uppercase tracking-widest flex flex-col items-center gap-4">
            <Globe className="w-12 h-12" />
            Interactive Map Placeholder
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-900 rounded-full border-2 border-white shadow-lg" />
      </section>

      {/* Regional Labs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Our Network</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Regional Laboratories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "New Delhi", address: "Lab 1: Bharat Test House Pvt. Ltd., Azadpur, New Delhi", phone: "+91-11-47540649" },
              { city: "Sonipat", address: "Lab 2: Bharat Test House Pvt. Ltd., HSIIDC Industrial Estate, Rai", phone: "+91-130-4092202" },
              { city: "Guangzhou", address: "Office: Room 1011, HEDY building, No. 286 Science street, Guangzhou", phone: "+86-20-82000867" }
            ].map((lab, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <Building2 className="w-8 h-8 text-blue-600 mb-6" />
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{lab.city}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{lab.address}</p>
                <div className="text-[10px] font-black text-blue-900 uppercase tracking-widest">{lab.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
