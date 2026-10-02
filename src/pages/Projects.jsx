import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  User, 
  Layers, 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/mockData';

export default function Projects({ selectedProject, setSelectedProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState(selectedProject || null);

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'commercial', label: 'Gedung Komersial' },
    { id: 'industrial', label: 'Industri & Gudang' },
    { id: 'infrastructure', label: 'Infrastruktur' },
    { id: 'architecture', label: 'Arsitektur & Residensial' }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.categoryKey === activeCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProjectModal = (proj) => {
    setModalProject(proj);
  };

  const closeProjectModal = () => {
    setModalProject(null);
    if (setSelectedProject) setSelectedProject(null);
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800 text-center subtle-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-4">
              Portofolio Proyek
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              Mahakarya Konstruksi & <span className="gradient-orange-text">Rekam Jejak Nyata</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Jelajahi portofolio konstruksi gedung tinggi, kawasan industri, dan infrastruktur strategis yang kami selesaikan dengan kepatuhan mutu tertinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-7 relative z-20">
        <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-soft-md flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80 lg:w-96">
            <Search size={18} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Cari proyek, lokasi, atau klien..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-10 py-2.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-brand-500 text-white shadow-orange-sm' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PROJECTS GRID WITH REAL PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Tidak ada proyek yang cocok dengan filter atau kata kunci Anda.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-orange-sm"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => openProjectModal(proj)}
              >
                <div>
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs font-bold shadow-sm">
                      {proj.category}
                    </span>
                    <span className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-2.5 py-1 rounded-full bg-brand-500 text-white text-[11px] sm:text-xs font-extrabold shadow-sm">
                      {proj.year}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1 mb-1 sm:mb-1.5">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                      <MapPin size={12} className="text-brand-500" />
                      <span>{proj.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {proj.scope}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {proj.highlights && proj.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-brand-50 dark:bg-slate-800 text-[10px] sm:text-[11px] font-semibold text-brand-700 dark:text-brand-400">
                          <CheckCircle2 size={10} /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] sm:text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400 truncate mr-2">{proj.client}</span>
                  <span className="text-brand-600 dark:text-brand-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                    Detail Proyek <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. DETAIL MODAL POPUP WITH REAL PHOTO */}
      <AnimatePresence>
        {modalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeProjectModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:bg-brand-500 hover:text-white flex items-center justify-center shadow-md transition-colors"
              >
                <X size={18} />
              </button>

              {/* Modal Cover Image */}
              <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden">
                <img 
                  src={modalProject.image} 
                  alt={modalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-[11px] sm:text-xs font-bold w-fit mb-2">
                    {modalProject.category}
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-white">
                    {modalProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Details Content */}
              <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
                
                {/* Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Lokasi</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{modalProject.location}</p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Tahun</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{modalProject.year}</p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Klien</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{modalProject.client}</p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Nilai Kontrak</span>
                    <p className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 mt-0.5">{modalProject.value}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Deskripsi & Rekayasa
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    {modalProject.description}
                  </p>
                </div>

                {/* Scope */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Ruang Lingkup Pekerjaan
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                    {modalProject.scope}
                  </p>
                </div>

                {/* Highlights */}
                {modalProject.highlights && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
                      Capaian Kunci Proyek
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {modalProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-brand-50/70 dark:bg-slate-800 border border-brand-100 dark:border-slate-700 text-xs sm:text-sm font-semibold text-brand-900 dark:text-brand-300">
                          <CheckCircle2 size={15} className="text-brand-600 dark:text-brand-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA In Modal */}
                <div className="pt-3 sm:pt-4 flex justify-end">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20NKK,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(modalProject.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm shadow-orange-sm"
                  >
                    <span>Konsultasikan Proyek Serupa</span>
                    <ExternalLink size={15} />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
