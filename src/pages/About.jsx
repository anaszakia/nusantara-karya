import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Eye, 
  Target, 
  CheckCircle2, 
  Clock, 
  Leaf, 
  HardHat,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, TIMELINE, VALUES, TEAM_MEMBERS } from '../data/mockData';

export default function About({ setActivePage }) {
  const getValueIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={26} className="text-brand-500" />;
      case 'CheckCircle2': return <CheckCircle2 size={26} className="text-brand-500" />;
      case 'Clock': return <Clock size={26} className="text-brand-500" />;
      case 'Leaf': return <Leaf size={26} className="text-brand-500" />;
      default: return <HardHat size={26} className="text-brand-500" />;
    }
  };

  const certifications = [
    { code: "ISO 9001:2015", title: "Sistem Manajemen Mutu Konstruksi Terakreditasi" },
    { code: "ISO 14001:2015", title: "Sistem Pengelolaan & Keberlanjutan Lingkungan" },
    { code: "ISO 45001:2018", title: "Sistem Manajemen Keselamatan & Kesehatan Kerja (K3)" },
    { code: "SBU LPJK Kualifikasi B", title: "Sertifikat Badan Usaha Konstruksi Gedung & Sipil PUPR" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800 text-center subtle-grid-bg overflow-hidden">
        {/* Background image for about page */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-4">
              Profil Perusahaan
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              Membangun Standar Baru Rekayasa & Konstruksi di <span className="gradient-orange-text">Nusantara</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Didirikan sejak tahun {COMPANY_INFO.establishedYear}, {COMPANY_INFO.name} telah membuktikan keunggulan mutu rekayasa teknik di ratusan proyek berskala nasional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Hero Image Strip */}
      <section className="bg-white dark:bg-slate-950 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", alt: "Pekerja konstruksi di lokasi proyek" },
              { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", alt: "Pembangunan struktur gedung" },
              { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80", alt: "Arsitektur modern" },
              { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80", alt: "Tim engineering di lapangan" },
            ].map((img, idx) => (
              <motion.div 
                key={idx} 
                className="h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Vision */}
            <motion.div 
              className="bg-surface-light dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-orange-sm">
                <Eye size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 sm:mb-3">Visi Kami</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Menjadi perusahaan jasa konstruksi dan rekayasa teknik terkemuka di Indonesia yang diakui atas inovasi digital BIM, integritas keselamatan kerja (K3), dan pembangunan berkelanjutan (Green Building).
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="bg-surface-light dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-orange-sm">
                <Target size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2 sm:mb-3">Misi Kami</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  "Memberikan hasil proyek tepat waktu, tepat mutu, dan transparan dalam pengelolaan anggaran.",
                  "Menerapkan teknologi konstruksi digital (BIM 5D) dan survei presisi di setiap fase pembangunan.",
                  "Menjaga komitmen Zero Accident melalui pengawasan ketat K3 & SOP berstandar internasional."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Nilai Utama
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Fondasi Integritas Setiap Konstruksi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALUES.map((v, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={idx}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 dark:bg-slate-800 flex items-center justify-center mb-4 sm:mb-5">
                  {getValueIcon(v.icon)}
                </div>
                <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white mb-1.5 sm:mb-2">{v.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Perjalanan Kami
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Rekam Jejak Dedikasi & Prestasi
            </h2>
          </div>

          <div className="relative border-l-2 border-brand-200 dark:border-slate-700 ml-4 sm:ml-32 space-y-8 sm:space-y-10">
            {TIMELINE.map((t, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-slate-900 shadow-orange-sm" />
                
                <span className="sm:absolute sm:-left-32 sm:top-1 font-heading font-extrabold text-brand-600 dark:text-brand-400 text-sm sm:text-base">
                  {t.year}
                </span>

                <div className="bg-surface-light dark:bg-slate-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-soft-sm">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1">{t.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS & LEGALITY */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
                Kredibilitas & Legalitas
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight mb-2 sm:mb-3">
                Sertifikasi Standar Nasional & Internasional
              </h2>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Kami beroperasi dengan legalitas SBU Kualifikasi Besar dari LPJK serta kepatuhan ISO demi keamanan investasi proyek Anda.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((c, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/20">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-white text-brand-700 text-[11px] sm:text-xs font-bold mb-1.5 sm:mb-2">
                    {c.code}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">{c.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP TEAM WITH REAL PHOTOS */}
      <section className="py-14 sm:py-20 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Dewan Direksi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Dipimpin oleh Praktisi Rekayasa Berpengalaman
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-surface-light dark:bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={idx}
              >
                <div className="h-48 sm:h-52 md:h-56 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-gradient-to-br', 'from-brand-500/15', 'via-orange-500/10', 'to-amber-500/20', 'dark:from-slate-800', 'dark:to-slate-850', 'flex', 'items-center', 'justify-center');
                      const fallback = document.createElement('div');
                      fallback.className = 'w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-amber-600 text-white text-2xl font-extrabold flex items-center justify-center shadow-orange-sm';
                      fallback.textContent = member.initials;
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg font-heading text-slate-900 dark:text-white">{member.name}</h3>
                  <span className="text-[11px] sm:text-xs font-bold text-brand-600 dark:text-brand-400 block mt-0.5 mb-1.5 sm:mb-2">{member.role}</span>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
