import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';

export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-footer Call to Action Card */}
        <div className="relative -mt-28 mb-16 bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-soft-lg overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-3">
                Mulai Kolaborasi
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
                Siap Mewujudkan Konstruksi Berkualitas Tinggi?
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Konsultasikan kebutuhan proyek gedung komersial, pabrik, gudang, maupun infrastruktur Anda bersama tim engineering ahli kami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <span>Minta Penawaran RAB</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-md transition-all duration-300"
              >
                <span>Hubungi Kantor Kami</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-nk.png" 
                alt="Nusantara Karya Konstruksi" 
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Mitra konstruksi dan rekayasa teknik terpercaya di Indonesia dengan komitmen mutu presisi, standar K3 ketat, dan ketepatan waktu proyek.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-medium text-slate-300">
                <ShieldCheck size={14} className="text-brand-400" />
                <span>ISO 9001 : 2015</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-medium text-slate-300">
                <Award size={14} className="text-brand-400" />
                <span>ISO 45001 (K3)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2.5">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'about', label: 'Tentang Kami' },
                { id: 'projects', label: 'Portofolio Project' },
                { id: 'contact', label: 'Hubungi Kami' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    <ChevronRight size={14} className="text-slate-600" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2.5">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('about')}
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors text-left"
                  >
                    <ChevronRight size={14} className="text-slate-600 shrink-0" />
                    <span className="line-clamp-1">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-2.5">
              Kantor Pusat
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {COMPANY_INFO.name}. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-400 cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-slate-400 cursor-pointer">Komitmen K3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
