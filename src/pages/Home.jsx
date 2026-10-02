import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Hammer, 
  CheckCircle2, 
  Compass, 
  Boxes, 
  Factory, 
  Star, 
  ChevronRight, 
  PhoneCall, 
  Calculator, 
  Play,
  Layers,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, SERVICES, PROJECTS, TESTIMONIALS, CLIENT_LOGOS } from '../data/mockData';

export default function Home({ setActivePage, onSelectProject }) {
  // Mini Estimator State
  const [projectType, setProjectType] = useState('gedung');
  const [areaSize, setAreaSize] = useState(1000);
  const [floors, setFloors] = useState(3);
  const [qualityLevel, setQualityLevel] = useState('standar');

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser requires interaction
        });
      }
    }
  }, []);

  const calculateEstimate = () => {
    let baseRate = 4500000;
    if (projectType === 'industri') baseRate = 3800000;
    if (projectType === 'infrastruktur') baseRate = 5200000;
    if (projectType === 'arsitektur') baseRate = 6000000;

    let qualityMultiplier = 1;
    if (qualityLevel === 'premium') qualityMultiplier = 1.25;
    if (qualityLevel === 'luxury') qualityMultiplier = 1.55;

    const totalEstimate = areaSize * floors * baseRate * qualityMultiplier;
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(totalEstimate);
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 size={26} className="text-brand-500" />;
      case 'Boxes': return <Boxes size={26} className="text-brand-500" />;
      case 'Factory': return <Factory size={26} className="text-brand-500" />;
      case 'Compass': return <Compass size={26} className="text-brand-500" />;
      default: return <Hammer size={26} className="text-brand-500" />;
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.12, ease: "easeOut" }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* 1. HERO SECTION WITH CINEMATIC CONSTRUCTION VIDEO BACKGROUND */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-32 overflow-hidden">
        
        {/* Background Video Element */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          >
            <source src="/hero-construction.webm" type="video/webm" />
            <source src="/hero-construction.mp4" type="video/mp4" />
          </video>

          {/* Premium Multi-layer Overlay for Light & Dark Mode Readability */}
          {/* Light Mode Overlay: Soft Clean White to Orange Ambient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 dark:hidden" style={{ zIndex: 2 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 dark:hidden" style={{ zIndex: 2 }} />

          {/* Dark Mode Overlay: Cinematic Slate/Black to Brand Accent */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/50" style={{ zIndex: 2 }} />
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/40" style={{ zIndex: 2 }} />
          
          {/* Architectural Subtle Grid Effect */}
          <div className="absolute inset-0 subtle-grid-bg opacity-30 pointer-events-none" style={{ zIndex: 3 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Hero Typography */}
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} custom={1} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100/90 dark:bg-brand-950/80 backdrop-blur-md text-brand-700 dark:text-brand-400 border border-brand-200/80 dark:border-brand-800/80 text-xs font-bold tracking-wide uppercase mb-4 sm:mb-5 shadow-sm">
                <HardHat size={14} className="text-brand-600 dark:text-brand-400" />
                <span>General Contractor & Engineering Solutions</span>
              </motion.div>

              <motion.h1 variants={fadeIn} custom={2} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4 sm:mb-5">
                Membangun Karya Konstruksi Presisi dengan <span className="gradient-orange-text">Standar Mutu Dunia</span>
              </motion.h1>

              <motion.p variants={fadeIn} custom={3} className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal drop-shadow-sm">
                {COMPANY_INFO.tagline}. Kami mengintegrasikan teknologi BIM modern, material tersertifikasi SNI, dan kepatuhan K3 tanpa kompromi untuk mewujudkan setiap visi arsitektur Anda.
              </motion.p>

              <motion.div variants={fadeIn} custom={4} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-10 w-full sm:w-auto">
                <button 
                  onClick={() => setActivePage('projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-orange-glow hover:shadow-orange-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Lihat Portofolio Project</span>
                  <ArrowRight size={17} />
                </button>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-soft-sm hover:shadow-soft-md transition-all duration-300"
                >
                  <span>Konsultasi & Penawaran</span>
                </button>
              </motion.div>

              {/* Quick Stats Banner */}
              <motion.div variants={fadeIn} custom={5} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-300/60 dark:border-slate-800 w-full">
                {COMPANY_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-brand-600 dark:text-brand-400">{stat.suffix}</span>
                    <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Col: Animated Construction Workers Illustration */}
            <motion.div 
              className="lg:col-span-5 relative w-full hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-4 w-20 h-20 rounded-full bg-brand-500/20 dark:bg-brand-500/10 blur-xl"
                  animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-6 w-16 h-16 rounded-full bg-amber-400/20 dark:bg-amber-400/10 blur-lg"
                  animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Main Illustration with floating animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img 
                    src="/construction-workers.jpg" 
                    alt="Pekerja konstruksi" 
                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                  />
                </motion.div>

                {/* Animated floating badges */}
                <motion.div
                  className="absolute top-4 right-0 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-soft-lg border border-slate-200/80 dark:border-slate-700 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                        <ShieldCheck size={16} className="text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">K3 Safety</span>
                        <span className="text-sm font-extrabold text-slate-800 dark:text-white">99.8%</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 -left-4 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-soft-lg border border-slate-200/80 dark:border-slate-700 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Proyek Selesai</span>
                        <span className="text-sm font-extrabold text-slate-800 dark:text-white">250+</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-soft-lg border border-slate-200/80 dark:border-slate-700 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                        <Award size={16} className="text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Pengalaman</span>
                        <span className="text-sm font-extrabold text-slate-800 dark:text-white">14+ Tahun</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED CLIENT LOGOS (INFINITE RUNNING TO THE RIGHT) */}
      <section className="py-5 sm:py-6 bg-slate-50/95 dark:bg-slate-900/80 border-y border-slate-200/70 dark:border-slate-800 relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            
            {/* Left Label */}
            <div className="flex items-center gap-2.5 shrink-0 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-soft-sm border border-slate-200/80 dark:border-slate-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold font-heading text-slate-700 dark:text-slate-200 uppercase tracking-wider whitespace-nowrap">
                Dipercaya oleh Perusahaan & BUMN:
              </span>
            </div>

            {/* Infinite Marquee Track Running to the Right */}
            <div className="relative flex-1 w-full overflow-hidden py-1">
              
              {/* Left & Right Smooth Gradient Edge Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-[#0b1329] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-[#0b1329] to-transparent z-10 pointer-events-none" />

              {/* Marquee Motion Container */}
              <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 cursor-grab active:cursor-grabbing">
                {/* 1st Set of Logos */}
                {CLIENT_LOGOS.map((client, idx) => (
                  <div 
                    key={`logo-1-${idx}`} 
                    className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:border-brand-500/70 dark:hover:border-brand-500/70 hover:shadow-soft-md transition-all duration-300 group shrink-0"
                  >
                    <div className="h-8 sm:h-9 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-750 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-full w-auto max-w-[130px] sm:max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}

                {/* 2nd Duplicated Set for Seamless Infinite Loop */}
                {CLIENT_LOGOS.map((client, idx) => (
                  <div 
                    key={`logo-2-${idx}`} 
                    className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:border-brand-500/70 dark:hover:border-brand-500/70 hover:shadow-soft-md transition-all duration-300 group shrink-0"
                  >
                    <div className="h-8 sm:h-9 px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-750 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-full w-auto max-w-[130px] sm:max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-14 sm:py-20 md:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Layanan Konstruksi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
              Solusi Rekayasa Teknik & Pembangunan Terintegrasi
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Mulai dari studi kelayakan, perancangan arsitektur struktural, hingga serah terima proyek dengan garansi mutu dan tepat waktu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                className="group relative bg-surface-light dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={idx}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-50 dark:bg-slate-800 border border-brand-100 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-200 dark:text-slate-800 group-hover:text-brand-200 dark:group-hover:text-brand-900 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-brand-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <button 
                    onClick={() => setActivePage('about')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 group-hover:text-brand-700 transition-colors"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED PROJECTS HIGHLIGHT WITH REAL PHOTOS */}
      <section className="py-14 sm:py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
                Portofolio Pilihan
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Mahakarya Rekayasa Konstruksi Kami
              </h2>
            </div>

            <button
              onClick={() => setActivePage('projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors group"
            >
              <span>Lihat Semua Proyek</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.slice(0, 3).map((proj, idx) => (
              <motion.div
                key={proj.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => {
                  if (onSelectProject) onSelectProject(proj);
                  setActivePage('projects');
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={idx}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs font-bold shadow-sm">
                    {proj.category}
                  </span>
                  <span className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 py-1 rounded-full bg-brand-500 text-white text-[11px] sm:text-xs font-extrabold shadow-sm">
                    {proj.year}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1 mb-1 sm:mb-1.5">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">{proj.location}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] sm:text-xs font-semibold">
                    <span className="text-slate-500 dark:text-slate-400 truncate mr-2">{proj.client}</span>
                    <span className="text-brand-600 dark:text-brand-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      Detail Proyek <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE COST ESTIMATOR */}
      <section className="py-14 sm:py-20 md:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-3xl p-5 sm:p-8 md:p-12 border border-brand-200/60 dark:border-slate-800 shadow-soft-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white font-bold text-xs uppercase tracking-wider mb-4 shadow-orange-sm">
                  <Calculator size={13} />
                  Simulasi Anggaran
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
                  Kalkulator Estimasi Awal Proyek Anda
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                  Dapatkan estimasi awal rancangan anggaran biaya (RAB) berdasarkan tipe konstruksi, luas bangunan, dan spesifikasi material secara transparan.
                </p>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                    <span>Transparansi Biaya & Material Terstandar SNI</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                    <span>Didukung Quantity Surveyor Berpengalaman</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-brand-500 shrink-0" />
                    <span>Laporan Rincian BoQ Komprehensif</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Nusantara%20Karya,%20saya%20sudah%20mencoba%20simulasi%20RAB%20untuk%20tipe%20${projectType}%20luas%20${areaSize}m2%20dan%20ingin%20konsultasi%20resmi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-orange-sm hover:shadow-orange-glow transition-all"
                >
                  <PhoneCall size={16} />
                  <span>Konsultasikan Hasil Simulasi</span>
                </a>
              </div>

              {/* Right Interactive Controls */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-soft-md flex flex-col gap-5 sm:gap-6">
                
                {/* Project Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-2.5">
                    Tipe Bangunan
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'gedung', label: 'Gedung / Kantor' },
                      { id: 'industri', label: 'Pabrik / Gudang' },
                      { id: 'infrastruktur', label: 'Sipil / Jalan' },
                      { id: 'arsitektur', label: 'Resort / Hunian' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setProjectType(t.id)}
                        className={`py-2 px-2 sm:px-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                          projectType === t.id 
                            ? 'bg-brand-500 text-white shadow-orange-sm' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Luas Bangunan per Lantai
                    </label>
                    <span className="font-heading font-bold text-brand-600 dark:text-brand-400 text-xs sm:text-sm">
                      {areaSize.toLocaleString()} m²
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="10000" 
                    step="100"
                    value={areaSize}
                    onChange={(e) => setAreaSize(Number(e.target.value))}
                    className="w-full accent-brand-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                </div>

                {/* Floor Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Jumlah Lantai / Ketinggian
                    </label>
                    <span className="font-heading font-bold text-brand-600 dark:text-brand-400 text-xs sm:text-sm">
                      {floors} Lantai
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1"
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full accent-brand-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                </div>

                {/* Quality Specs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-2.5">
                    Spesifikasi & Mutu Material
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standar', label: 'Standar Grade' },
                      { id: 'premium', label: 'Premium Grade' },
                      { id: 'luxury', label: 'Luxury Eco' }
                    ].map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setQualityLevel(q.id)}
                        className={`py-2 px-2 sm:px-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                          qualityLevel === q.id 
                            ? 'bg-brand-500 text-white shadow-orange-sm' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimate Result Box */}
                <div className="bg-gradient-to-r from-brand-500 to-amber-500 p-4 sm:p-5 rounded-2xl text-white text-center shadow-orange-sm">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-white/90">
                    Perkiraan Nilai Investasi Konstruksi:
                  </span>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-white my-1 tracking-tight">
                    {calculateEstimate()}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-white/80">
                    *Estimasi bersifat indikatif. Nilai final ditentukan berdasarkan Bill of Quantities (BoQ).
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS WITH REAL AVATAR PHOTOS */}
      <section className="py-14 sm:py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Testimoni Klien
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
              Kepercayaan Berkelanjutan dari Mitra Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Dengarkan langsung ulasan para pimpinan proyek mengenai dedikasi dan kualitas rekayasa Nusantara Karya Konstruksi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={idx}
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-4 sm:mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-3.5 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm border-2 border-brand-100 dark:border-slate-700"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-brand-500 to-amber-600 text-white font-extrabold text-sm items-center justify-center shrink-0 shadow-orange-sm hidden">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{t.role} • {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
