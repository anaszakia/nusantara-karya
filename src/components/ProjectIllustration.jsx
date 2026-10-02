import React from 'react';
import { 
  Building2, 
  Factory, 
  Boxes, 
  Compass, 
  HardHat, 
  Construction, 
  ShieldCheck, 
  Trophy, 
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

export function ProjectIllustration({ type = 'building', className = '' }) {
  const getGradientAndIcon = () => {
    switch (type) {
      case 'factory':
        return {
          from: 'from-amber-500',
          to: 'to-brand-600',
          bg: 'bg-gradient-to-br from-amber-500/10 via-orange-500/15 to-brand-600/20',
          icon: <Factory size={56} className="text-brand-500 opacity-90" />,
          accent: 'Pabrik & Smart Warehouse'
        };
      case 'infrastructure':
      case 'boxes':
        return {
          from: 'from-blue-500',
          to: 'to-indigo-600',
          bg: 'bg-gradient-to-br from-blue-500/10 via-brand-500/15 to-indigo-600/20',
          icon: <Boxes size={56} className="text-brand-500 opacity-90" />,
          accent: 'Flyover & Precast Girder'
        };
      case 'compass':
      case 'architecture':
        return {
          from: 'from-emerald-500',
          to: 'to-teal-600',
          bg: 'bg-gradient-to-br from-emerald-500/10 via-brand-500/15 to-teal-600/20',
          icon: <Compass size={56} className="text-brand-500 opacity-90" />,
          accent: 'Biophilic Luxury Resort'
        };
      default:
        return {
          from: 'from-brand-500',
          to: 'to-amber-600',
          bg: 'bg-gradient-to-br from-brand-500/15 via-orange-500/10 to-amber-600/20',
          icon: <Building2 size={56} className="text-brand-500 opacity-90" />,
          accent: 'High-Rise Commercial'
        };
    }
  };

  const { bg, icon, accent } = getGradientAndIcon();

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden ${bg} ${className}`}>
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Structural blueprint circle */}
      <div className="relative z-10 w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 shadow-soft-md border border-brand-200/60 dark:border-slate-700 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
        {icon}
      </div>

      <div className="relative z-10 mt-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300">
        <Sparkles size={12} className="text-brand-500" />
        <span>{accent}</span>
      </div>
    </div>
  );
}

export function HeroBlueprintVisual() {
  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-7 sm:p-9 flex flex-col justify-between overflow-hidden text-white">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Glow */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-brand-300">
          <HardHat size={14} className="text-brand-400" />
          <span>BIM 5D Digital Engineering</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">REV: 2026.4</span>
      </div>

      {/* Center 3D Blueprint Graphic */}
      <div className="relative z-10 my-6 flex flex-col items-center justify-center text-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-brand-500 to-amber-600 flex items-center justify-center text-white shadow-orange-glow animate-pulse">
          <Building2 size={64} className="text-white" />
        </div>
        
        <h4 className="mt-4 font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
          Menara Financial Center
        </h4>
        <p className="text-xs text-slate-300 mt-1">
          SCBD Jakarta • 36 Lantai + 4 Basement • Greenship Platinum
        </p>
      </div>

      {/* Bottom specs bar */}
      <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
        <div>
          <span className="block text-[10px] uppercase font-bold text-slate-400">Total Luas</span>
          <span className="text-xs font-bold text-white">68.000 m²</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase font-bold text-slate-400">K3 Safety</span>
          <span className="text-xs font-bold text-brand-400">Zero LTI</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase font-bold text-slate-400">Status</span>
          <span className="text-xs font-bold text-emerald-400">Completed</span>
        </div>
      </div>
    </div>
  );
}
