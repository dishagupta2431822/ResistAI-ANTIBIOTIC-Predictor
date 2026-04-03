import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Dna, 
  Activity, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Database, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isAuthenticated, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/accreditations', label: 'Accreditations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/e-brochures', label: 'E-Brochures' },
    { path: '/contact', label: 'Contact Us' },
  ];

  if (isAuthenticated) {
    navItems.push({ path: '/dashboard', label: 'Dashboard' });
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Activity className="w-3 h-3" />
              Surveillance Hotline: +91-800-RESIST-AI
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              contact@resistai.in
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-300 transition-colors">Careers</a>
            <div className="flex gap-3 ml-4 border-l border-white/20 pl-4">
              <Globe className="w-3 h-3 cursor-pointer hover:text-blue-300" />
              <ShieldCheck className="w-3 h-3 cursor-pointer hover:text-blue-300" />
              <Database className="w-3 h-3 cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-900 p-3 rounded-xl shadow-lg">
              <Dna className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-blue-900 leading-none">ResistAI</h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">“Our data evidences our quality”</p>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-black uppercase tracking-widest transition-all relative py-2",
                  location.pathname === item.path 
                    ? "text-blue-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900" 
                    : "text-slate-500 hover:text-blue-900"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {!isAuthenticated ? (
              <Link 
                to="/dashboard"
                className="bg-blue-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-200"
              >
                Login
              </Link>
            ) : (
              <button 
                onClick={() => {
                  onLogout();
                  navigate('/');
                }}
                className="ml-4 p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block text-sm font-black uppercase tracking-widest py-2",
                  location.pathname === item.path ? "text-blue-900" : "text-slate-500"
                )}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <button 
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                  navigate('/');
                }}
                className="block w-full text-left text-sm font-black uppercase tracking-widest py-2 text-red-600"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Dna className="w-6 h-6 text-white" />
                </div>
                <span className="font-black text-xl text-slate-900 tracking-tight">ResistAI India</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                ResistAI is a trusted & time-tested partner for leading manufacturers & brands across the globe. We provide accurate & reliable testing, inspection & consultancy services at affordable costs.
              </p>
            </div>
            <div>
              <h4 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Our Services</Link></li>
                <li><Link to="/accreditations" className="hover:text-blue-600 transition-colors">Accreditations</Link></li>
                <li><Link to="/gallery" className="hover:text-blue-600 transition-colors">Gallery</Link></li>
                <li><Link to="/e-brochures" className="hover:text-blue-600 transition-colors">E-Brochures</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>contact@resistai.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>+91-800-RESIST-AI</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-400 font-medium">© 2026 ResistAI Systems. For research use only.</p>
            <div className="flex gap-8 text-[10px] text-slate-400 font-black uppercase tracking-widest">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
