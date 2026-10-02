import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  FileText,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/mockData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Gedung Komersial',
    estimatedBudget: '< 5 Miliar',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const faqs = [
    {
      q: "Bagaimana tahapan konsultasi dan penyusunan RAB bersama NKK?",
      a: "Setelah Anda mengirimkan formulir atau chat WhatsApp, tim Quantity Surveyor dan Struktur kami akan meninjau Shop Drawing/TOR Anda dan menyusun estimasi penawaran dalam 3-5 hari kerja."
    },
    {
      q: "Apakah Nusantara Karya Konstruksi melayani proyek luar Jabodetabek?",
      a: "Ya, kami menangani proyek berskala nasional di berbagai wilayah Indonesia, seperti Jawa, Sumatera, Kalimantan, Sulawesi, hingga Bali dan Nusa Tenggara."
    },
    {
      q: "Apakah NKK memiliki legalitas SBU dan sertifikat K3 resmi?",
      a: "Benar, kami memiliki SBU Kualifikasi Besar dari LPJK/Kementerian PUPR serta sertifikasi manajemen ISO 9001 (Mutu), ISO 14001 (Lingkungan), dan ISO 45001 (K3)."
    },
    {
      q: "Bagaimana sistem pembayaran dan kontrak kerja konstruksi?",
      a: "Pembayaran berbasis termin progres fisik kerja (Milestone) yang didukung Berita Acara Opname transparan."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* 1. HERO HEADER WITH BACKGROUND IMAGE */}
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
              Hubungi Kami
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
              Konsultasi & Permintaan <span className="gradient-orange-text">Penawaran Biaya (RFQ)</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Tim rekayasa dan estimasi biaya kami siap mendiskusikan kebutuhan teknis, survei lokasi, dan proposal penawaran terbaik untuk proyek Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-light dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-sm">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">Kantor Pusat Operasional</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Kunjungi kantor kami atau hubungi perwakilan resmi kami pada jam operasional kerja.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-orange-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Alamat Kantor</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-orange-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hotline & WhatsApp</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">{COMPANY_INFO.phone}</p>
                    <a 
                      href={COMPANY_INFO.whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline block mt-1"
                    >
                      Chat WhatsApp Resmi →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-orange-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Tender & RFQ</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">{COMPANY_INFO.rfqEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-orange-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Jam Layanan</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <iframe 
                  title="Lokasi Kantor"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273673523588!2d106.8202513!3d-6.227607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb40954b8b%3A0xc3f8e5898862cfb!2sSCBD%2C%20Sudirman%20Central%20Business%20District!5e0!3m2!1sid!2sid!4v1700000000000"
                  width="100%" 
                  height="180" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-md">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    Permintaan Penawaran Terkirim!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md leading-relaxed mb-6">
                    Terima kasih, <strong>{formData.fullName}</strong>. Technical Estimator kami akan meninjau data proyek Anda dan menghubungi dalam kurun waktu 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-brand-500 text-white font-bold text-xs shadow-orange-sm"
                  >
                    Kirim Formulir Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-2">
                      <FileText size={13} />
                      Formulir RFQ
                    </span>
                    <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Rincian Kebutuhan Konstruksi Anda
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input 
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ir. Anton Wijaya"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Perusahaan / Instansi
                      </label>
                      <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. PT Maju Properti"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Email Resmi *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anton@perusahaan.co.id"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Nomor WhatsApp *
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Kategori Proyek
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="Gedung Komersial">Gedung Komersial / Perkantoran</option>
                        <option value="Pabrik & Gudang">Pabrik & Gudang Logistik</option>
                        <option value="Infrastruktur & Sipil">Infrastruktur & Pekerjaan Sipil</option>
                        <option value="Arsitektur & Residensial">Resort / Residensial Mewah</option>
                        <option value="Renovasi & Fit-out">Renovasi Struktural & Fit-out</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Estimasi Anggaran
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="1M - 5M">Rp 1 Miliar - Rp 5 Miliar</option>
                        <option value="5M - 25M">Rp 5 Miliar - Rp 25 Miliar</option>
                        <option value="25M - 100M">Rp 25 Miliar - Rp 100 Miliar</option>
                        <option value="> 100M">Diatas Rp 100 Miliar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Lokasi Rencana Proyek *
                    </label>
                    <input 
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Karawang, Jawa Barat"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Deskripsi Kebutuhan Proyek *
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan luas bangunan, target mulai, ketersediaan shop drawing, dll..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-orange-sm hover:shadow-orange-glow transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Mengirimkan Permohonan...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Kirim Permohonan Penawaran (RFQ)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3">
              Tanya Jawab
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-soft-sm">
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle size={18} className="text-brand-500 shrink-0 mt-0.5" />
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{f.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
