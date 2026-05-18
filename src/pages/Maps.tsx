import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Crosshair, Navigation, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation, Trans } from 'react-i18next';

const mapsData = [
  { id: 'leonida', name: 'Leonida / Vice City', type: 'GTA VI', color: '#ff007f', image: '/maps/leonida.png' },
  { id: 'ls', name: 'Los Santos & Blaine County', type: 'GTA V', color: '#5f914d', image: '/maps/ls.png' },
  { id: 'sa', name: 'San Andreas', type: 'GTA SA', color: '#e6b053', image: '/maps/sa.png' },
  { id: 'vc', name: 'Vice City Classic', type: 'GTA VC', color: '#ff00a0', image: '/maps/vc.png' },
  { id: 'lc', name: 'Liberty City', type: 'GTA IV', color: '#6b7280', image: '/maps/lc.png' },
];

export default function Maps() {
  const [activeMap, setActiveMap] = useState(mapsData[0]);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = activeMap.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false); // If image doesn't exist, we still want to show placeholder logic
  }, [activeMap.image]);

  const handleZoom = (direction: 'in' | 'out' | 'reset') => {
    if (direction === 'in') setZoom(prev => Math.min(prev + 0.5, 4));
    if (direction === 'out') setZoom(prev => Math.max(prev - 0.5, 0.5));
    if (direction === 'reset') setZoom(1);
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className={cn("bg-black flex flex-col relative", isFullscreen ? "fixed inset-0 z-[100] h-screen" : "min-h-screen pt-24 pb-0 h-screen overflow-hidden")}>
      {/* Grid overlay for holographic feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      <div className={cn("relative z-10 flex flex-col h-full", isFullscreen ? "p-0" : "container mx-auto px-4 pb-8")}>
        
        {!isFullscreen && (
          <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-white mb-2 drop-shadow-lg flex items-center gap-4">
                <Navigation className="w-10 h-10 text-pink-500" />
                <Trans i18nKey="maps.title">
                  Sistemas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-text-blue">Navegação</span>
                </Trans>
              </h1>
              <p className="text-white/50 font-mono text-sm tracking-widest uppercase mt-2">
                {t('maps.desc', '// Satélite Ativo: Conectando aos servidores da Rockstar')}
              </p>
            </div>

            <div className="flex gap-2 bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10 overflow-x-auto scrollbar-hide">
              {mapsData.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setActiveMap(m); setZoom(1); }}
                  className={cn(
                    "px-4 py-2 rounded-md font-bold uppercase text-xs tracking-wider whitespace-nowrap transition-all",
                    activeMap.id === m.id 
                      ? "bg-white/10 text-white shadow-lg" 
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  )}
                  style={activeMap.id === m.id ? { borderBottom: `2px solid ${m.color}` } : {}}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </header>
        )}

        {/* Map Viewport Area */}
        <div className={cn(
          "flex-grow glass overflow-hidden relative group transition-all duration-500",
          isFullscreen ? "rounded-none border-0" : "rounded-2xl border border-white/20"
        )}>
          
          {/* Holographic scanning effect */}
          <div className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent top-0 opacity-30 animate-[ping_4s_ease-in-out_infinite_alternate] z-20 pointer-events-none" />

          {/* Map Controls */}
          <div className="absolute right-4 top-4 z-40 flex flex-col gap-2">
            <button onClick={() => handleZoom('in')} className="w-10 h-10 bg-black/80 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              +
            </button>
            <button onClick={() => handleZoom('out')} className="w-10 h-10 bg-black/80 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              -
            </button>
            <button onClick={() => handleZoom('reset')} className="w-10 h-10 bg-black/80 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md mt-4 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Crosshair className="w-5 h-5" />
            </button>
            <button onClick={toggleFullscreen} className="w-10 h-10 bg-black/80 border border-white/20 text-white rounded-md flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md mt-2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {isFullscreen ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Map Info Panel */}
          <div className={cn(
            "absolute left-4 top-4 z-40 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-xl w-64 transition-all duration-300",
            isFullscreen ? "opacity-30 hover:opacity-100" : "opacity-100"
          )}>
            <span className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 block">{activeMap.type}</span>
            <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight mb-4 drop-shadow-md">{activeMap.name}</h3>
            
            <div className="space-y-4 border-t border-white/10 pt-4 mt-4 relative">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-white/50 animate-bounce" style={{ color: activeMap.color }} />
                <p className="text-xs text-white/70 font-mono">Topografia escaneada. Anomalias térmicas detectadas no setor central.</p>
              </div>
            </div>
          </div>

          {/* The Interactive Map */}
          <div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden bg-[#050510]">
            <motion.div 
              drag
              dragConstraints={containerRef}
              animate={{ scale: zoom }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] flex items-center justify-center"
            >
              {/* Fallback pattern if image is missing */}
              <div 
                className="absolute inset-0 opacity-40 z-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, transparent 20%, #000 80%),
                               repeating-linear-gradient(0deg, transparent, transparent 49px, ${activeMap.color}40 50px),
                               repeating-linear-gradient(90deg, transparent, transparent 49px, ${activeMap.color}40 50px)`,
                }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMap.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-3/4 h-3/4 flex items-center justify-center"
                >
                  {imageLoaded ? (
                    <img 
                      src={activeMap.image} 
                      alt={`Mapa de ${activeMap.name}`}
                      className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:scale-[1.02]"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white/30 p-20 glass rounded-3xl border border-white/5 shadow-2xl">
                      <ImageIcon className="w-24 h-24 mb-6 opacity-40" style={{ color: activeMap.color }} />
                      <p className="font-mono uppercase tracking-widest text-lg">Módulo de Satélite Offline</p>
                      <p className="text-white/40 text-sm mt-2 max-w-sm text-center">Imagem não encontrada em /public{activeMap.image}. Insira o arquivo para ativar o satélite.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Glowing core representation of a city center */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none z-0"
                style={{ backgroundColor: activeMap.color, opacity: 0.15 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
