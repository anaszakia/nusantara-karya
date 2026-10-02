import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight, 
  HardHat, 
  ShieldCheck,
  Sun,
  Moon,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activePage, setActivePage, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'projects', label: 'Portofolio Project' },
    { id: 'contact', label: 'Hubungi Kami' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-soft-md border-b border-slate-100 dark:border-slate-800 py-3' 
        : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-4'
    }`}>
      {/* Top micro banner */}
      <div className="hidden md:block bg-brand-50 dark:bg-slate-850 border-b border-brand-100/60 dark:border-slate-800 py-1.5 text-xs text-slate-600 dark:text-slate-400 -mt-4 mb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium text-brand-700 dark:text-brand-400">
            <ShieldCheck size={15} className="text-brand-600 dark:text-brand-400" />
            <span>Sertifikasi ISO 9001:2015 & ISO 45001:2018 (K3) Resmi</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
            <span>Hotline: <strong className="text-slate-800 dark:text-slate-200 font-semibold">{COMPANY_INFO.phone}</strong></span>
            <span>Email: <strong className="text-slate-800 dark:text-slate-200 font-semibold">{COMPANY_INFO.email}</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left"
          >
            <img 
              src="/logo-nk.png" 
              alt="Nusantara Karya Konstruksi" 
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-500 rounded-full shadow-orange-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher, Dark Mode Toggle & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher Pill (Triggers Google Translate Entire Page) */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 sm:p-1 rounded-full border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => changeLanguage('id')}
                className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'id'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Terjemahkan seluruh halaman ke Bahasa Indonesia"
              >
                <span>🇮🇩 ID</span>
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Translate entire page to English with Google Translate"
              >
                <span>🇬🇧 EN</span>
              </button>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme Mode"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Desktop CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-orange-sm hover:shadow-orange-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <PhoneCall size={14} />
              <span>Konsultasi Proyek</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-50 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-soft-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
              {/* Mobile Language & Mode bar */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Bahasa / Language:</span>
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                  <button
                    onClick={() => changeLanguage('id')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'id' ? 'bg-brand-500 text-white' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🇮🇩 ID
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'en' ? 'bg-brand-500 text-white' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-left transition-colors ${
                    activePage === item.id 
                      ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-bold' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} className={activePage === item.id ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'} />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-500 text-white font-semibold text-sm shadow-orange-sm"
                >
                  <PhoneCall size={18} />
                  <span>Chat WhatsApp Tim Ahli</span>
                </a>
                <p className="text-xs text-center text-slate-500 dark:text-slate-400">{COMPANY_INFO.workingHours}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
