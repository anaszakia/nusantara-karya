export const COMPANY_INFO = {
  name: "Nusantara Karya Konstruksi",
  tagline: "Membangun Masa Depan dengan Presisi, Integritas, dan Keunggulan Rekayasa",
  shortName: "NKK",
  establishedYear: 2012,
  phone: "+62 (21) 5798-2300",
  whatsapp: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Nusantara%20Karya%20Konstruksi,%20saya%20tertarik%20konsultasi%20proyek.",
  email: "contact@nusantarakarya.co.id",
  rfqEmail: "proyek@nusantarakarya.co.id",
  address: "Graha Mandiri Tower, Lt. 18, Jl. Jend. Sudirman Kav. 54-55, Jakarta Selatan 12190, Indonesia",
  workingHours: "Senin - Jumat: 08:00 - 17:00 WIB | Sabtu: 08:30 - 13:00 WIB",
  // Hero video - High-definition construction project footage
  heroVideo: "/hero-construction.webm",
  heroVideoFallback: "/hero-construction.mp4",
  stats: [
    { label: "Proyek Selesai", value: "250+", suffix: "Proyek" },
    { label: "Tahun Pengalaman", value: "14+", suffix: "Tahun" },
    { label: "Tenaga Ahli & Teknisi", value: "120+", suffix: "Insinyur" },
    { label: "Zero Accident Rate", value: "99.8%", suffix: "K3 Standar" },
  ]
};

export const SERVICES = [
  {
    id: "gedung-komersial",
    title: "Konstruksi Gedung Komersial & Bertingkat",
    shortDesc: "Pembangunan gedung perkantoran, pusat perbelanjaan, hotel, dan mixed-use building dengan standar struktural internasional.",
    icon: "Building2",
    features: [
      "Struktur Beton Bertulang & Baja Berat",
      "Sistem MEP (Mechanical, Electrical, Plumbing) Terpadu",
      "Green Building & Efisiensi Energi",
      "Manajemen BIM (Building Information Modeling) Level 3"
    ]
  },
  {
    id: "infrastruktur-sipil",
    title: "Infrastruktur & Pekerjaan Sipil",
    shortDesc: "Pembangunan jalan raya, jembatan bentang panjang, sistem drainase perkotaan, dan pekerjaan tanah skala masif.",
    icon: "Boxes",
    features: [
      "Earthwork & Pemadatan Tanah Lanjut",
      "Paving & Rigid Pavement Kualitas Tinggi",
      "Jembatan Pratekan & Struktur Khusus",
      "Sistem Tata Kelola Air & Pencegah Banjir"
    ]
  },
  {
    id: "industrial-fasilitas",
    title: "Fasilitas Industri & Gudang Logistik",
    shortDesc: "Fabrikasi pabrik modern, gudang berpendingin, cleanroom, dan instalasi fasilitas manufaktur berdaya tahan tinggi.",
    icon: "Factory",
    features: [
      "Konstruksi Rangka Baja Berat (Heavy Steel)",
      "Lantai Superflat Floor & Epoxy Heavy Duty",
      "Ventilasi & Pengaturan Suhu Presisi",
      "Standar Sertifikasi Keselamatan Pabrik & K3"
    ]
  },
  {
    id: "arsitektur-interior",
    title: "Desain Arsitektur, Fit-Out & Renovasi",
    shortDesc: "Transformasi ruang komersial, interior kantor korporat modern, dan renovasi struktural bernilai estetika premium.",
    icon: "Compass",
    features: [
      "Desain Arsitektur Parametrik 3D Photoreal",
      "Fit-out Interior Akustik & Ergonomis",
      "Retrofitting & Penguatan Struktur Lama",
      "Pengerjaan Finishing Berstandar Luxury Grade"
    ]
  }
];

export const PROJECTS = [
  {
    id: "1",
    title: "Menara Nusantara Financial Center",
    category: "Gedung Komersial",
    categoryKey: "commercial",
    location: "SCBD, Jakarta Selatan",
    year: "2024",
    client: "PT Nusantara Prima Investama",
    scope: "Design & Build (36 Lantai + 4 Basement)",
    value: "Rp 420 Miliar",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Proyek mixed-use high-rise dengan sertifikasi Green Building Platinum. Mengintegrasikan teknologi fasad hemat energi dan sistem peredam gempa mutakhir.",
    highlights: ["Sertifikasi Greenship Platinum", "Teknologi Dual Tuned Mass Damper", "Selesai 2 Bulan Lebih Cepat"]
  },
  {
    id: "2",
    title: "Mega Hub Logistik Maritim Nusantara",
    category: "Industri & Gudang",
    categoryKey: "industrial",
    location: "Kawasan Industri Kendal, Jawa Tengah",
    year: "2023",
    client: "Global Logistics Alliance",
    scope: "Struktur Baja & Smart Automated Storage (85,000 m²)",
    value: "Rp 210 Miliar",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: "Pusat distribusi modern dengan spesifikasi lantai superflat tolerance standar FM2 dan sistem insulasi termal canggih untuk efisiensi pendingin udara.",
    highlights: ["Lantai Superflat Laser-Guided", "Struktur Baja Bentang 60m Tanpa Kolom", "Kapasitas 120.000 Pallet"]
  },
  {
    id: "3",
    title: "Flyover & Akses Jalan Tol Lingkar Timur",
    category: "Infrastruktur",
    categoryKey: "infrastructure",
    location: "Surabaya, Jawa Timur",
    year: "2023",
    client: "Kementerian PUPR / BUMN Konstruksi",
    scope: "Pekerjaan Struktur Box Girder Beton Pratekan (4.2 Km)",
    value: "Rp 350 Miliar",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    description: "Pembangunan infrastruktur penghubung utama dengan teknologi erection gantry launcher untuk meminimalkan gangguan arus lalu lintas aktif.",
    highlights: ["Teknologi Precast Box Girder Segmental", "Waktu Pelaksanaan Efisien", "Nol Insiden Kerja (Zero LTI)"]
  },
  {
    id: "4",
    title: "The Oasis Luxury Resort & Convention",
    category: "Arsitektur & Residensial",
    categoryKey: "architecture",
    location: "Nusa Dua, Bali",
    year: "2024",
    client: "Oasis Hospitality Group",
    scope: "Konstruksi Resort Mewah, Ballroom & Water Features",
    value: "Rp 185 Miliar",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "Resort bintang lima dengan konsep arsitektur biophilic berpadu dengan ornamen lokal Bali serta struktur ramah lingkungan tanpa merusak kontur alam.",
    highlights: ["Material Lokal Ramah Lingkungan", "Struktur Terasering Terintegrasi", "Sistem Water Recycling 100%"]
  },
  {
    id: "5",
    title: "Pabrik Perakitan Otomotif EV Cikarang",
    category: "Industri & Gudang",
    categoryKey: "industrial",
    location: "GIIC Deltamas, Cikarang",
    year: "2022",
    client: "Apex EV Motors International",
    scope: "Konstruksi Fasilitas Manufaktur & Cleanroom",
    value: "Rp 275 Miliar",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    description: "Fasilitas manufaktur berteknologi tinggi dengan standar debu ISO Class 7 Cleanroom dan sistem proteksi kebakaran foam suppression modern.",
    highlights: ["Sertifikasi ISO Class 7 Cleanroom", "Substation Listrik 15 MVA", "Konstruksi Presisi Tinggi"]
  },
  {
    id: "6",
    title: "Kantor Pusat Korporat & Inovasi Park",
    category: "Gedung Komersial",
    categoryKey: "commercial",
    location: "BSD City, Tangerang",
    year: "2023",
    client: "TechVision Nusantara Corp",
    scope: "Arsitektur, Konstruksi & Smart Office Fit-out",
    value: "Rp 145 Miliar",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "Gedung pintar dengan sistem IoT terpusat, pengatur cahaya otomatis, kaca low-E berinsulasi ganda, dan atap panel surya 250 kWp.",
    highlights: ["Smart Building Automation", "Solar Rooftop 250 kWp", "Interior Akustik Modern"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Ir. Bambang Suhartono",
    role: "Project Director",
    company: "PT Nusantara Prima Investama",
    initials: "BS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Nusantara Karya Konstruksi menunjukkan profesionalisme luar biasa dalam proyek Menara Financial Center. Manajemen K3, timeline yang disiplin, dan kualitas struktur melampaui ekspektasi dewan direksi.",
    rating: 5,
  },
  {
    name: "Elena Wijaya, M.Sc.",
    role: "VP of Operations",
    company: "Global Logistics Alliance",
    initials: "EW",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content: "Proyek Mega Hub kami membutuhkan presisi kerataan lantai tingkat tinggi untuk robot AGV kami. Tim rekayasa NKK menyelesaikannya dengan standar internasional FM2 tanpa cela.",
    rating: 5,
  },
  {
    name: "Hendrik Kusuma",
    role: "Owner & Managing Director",
    company: "Oasis Hospitality Group",
    initials: "HK",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "Membangun resort mewah di kontur lereng berbukit bukan perkara mudah. NKK membuktikan keahlian teknis sipil mereka yang tangguh dengan tetap menjaga kelestarian alam Bali yang indah.",
    rating: 5,
  }
];

export const TIMELINE = [
  {
    year: "2012",
    title: "Pendirian Perusahaan",
    desc: "Memulai kiprah sebagai kontraktor spesialis pekerjaan sipil dan struktur pondasi di Jabodetabek."
  },
  {
    year: "2016",
    title: "Ekspansi Skala Nasional & Sertifikasi ISO",
    desc: "Meraih ISO 9001 (Mutu), ISO 14001 (Lingkungan), dan ISO 45001 (K3), serta menangani proyek komersial skala besar."
  },
  {
    year: "2020",
    title: "Penerapan BIM & Smart Construction",
    desc: "Mengadopsi Building Information Modeling (BIM) 5D dan pemantauan proyek real-time menggunakan drone survey."
  },
  {
    year: "2024 - Sekarang",
    title: "Pelopor Konstruksi Berkelanjutan",
    desc: "Mencapai lebih dari 250 proyek terselesaikan dengan fokus pada konsep Green Building dan infrastruktur tangguh iklim."
  }
];

export const VALUES = [
  {
    title: "Safety & K3 Tanpa Kompromi",
    desc: "Keselamatan setiap personil di lapangan adalah prioritas tertinggi melalui SOP K3 berstandar internasional.",
    icon: "ShieldCheck"
  },
  {
    title: "Presisi & Kualitas Rekayasa",
    desc: "Material teruji laboratorium independen dan pengawasan mutu berkala di setiap tahap pengecoran dan pemasangan.",
    icon: "CheckCircle2"
  },
  {
    title: "Ketepatan Waktu & Anggaran",
    desc: "Transparansi proyek dengan integrasi kurva S digital, memastikan proyek selesai on-time dan on-budget.",
    icon: "Clock"
  },
  {
    title: "Inovasi & Berkelanjutan",
    desc: "Penerapan teknologi konstruksi ramah lingkungan yang menghemat energi dan mengurangi jejak karbon.",
    icon: "Leaf"
  }
];

export const CLIENT_LOGOS = [
  { 
    name: "Wijaya Karya (WIKA)", 
    category: "BUMN Konstruksi",
    logo: "/logos/wika.svg"
  },
  { 
    name: "Waskita Karya", 
    category: "BUMN Infrastruktur",
    logo: "/logos/waskita.svg"
  },
  { 
    name: "Adhi Karya", 
    category: "BUMN Karya & EPC",
    logo: "/logos/adhi.svg"
  },
  { 
    name: "PT PP (Persero)", 
    category: "Pembangunan Perumahan",
    logo: "/logos/ptpp.svg"
  },
  { 
    name: "Hutama Karya", 
    category: "Jalan Tol & Trans Sumatera",
    logo: "/logos/hutamakarya.svg"
  },
  { 
    name: "Jasa Marga", 
    category: "Pengelola Jalan Tol",
    logo: "/logos/jasamarga.svg"
  },
  { 
    name: "Semen Indonesia (SIG)", 
    category: "Material & Industri Semen",
    logo: "/logos/sig.svg"
  },
  { 
    name: "Pertamina", 
    category: "Energi & Fasilitas Industri",
    logo: "/logos/pertamina.svg"
  },
  { 
    name: "PLN (Persero)", 
    category: "Infrastruktur Ketenagalistrikan",
    logo: "/logos/pln.svg"
  },
  { 
    name: "Astra International", 
    category: "Manufaktur & Kawasan Industri",
    logo: "/logos/astra.svg"
  },
  { 
    name: "Telkom Indonesia", 
    category: "Data Center & Telekomunikasi",
    logo: "/logos/telkom.svg"
  },
  { 
    name: "Ciputra Development", 
    category: "Komersial & Residensial",
    logo: "/logos/ciputra.svg"
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Ir. Hendra Gunawan, MT., IPU",
    role: "Chief Executive Officer / Direktur Utama",
    experience: "25+ Tahun Pengalaman Struktur & Sipil",
    initials: "HG",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Maya Prameswari, S.T., M.Sc.",
    role: "Chief Technical Officer & Head of BIM",
    experience: "Spesialis Green Building & Digital Construction",
    initials: "MP",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Budi Santoso, S.T., PMP",
    role: "Head of Project Management & Quality",
    experience: "Ex-Lead Engineer Proyek Strategis Nasional",
    initials: "BS",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  }
];
