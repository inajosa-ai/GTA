import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Radio as RadioIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const stations = [
  { id: 'gta-1', name: 'Joyride (Da Shootaz)', game: 'GTA I', color: '#aaaaaa', embed: 'https://open.spotify.com/embed/track/6fgs51z23fXGoRLkQJyFl6?utm_source=generator&theme=0' },
  { id: 'gta-3', name: 'Push It to the Limit', game: 'GTA III', color: '#374151', embed: 'https://open.spotify.com/embed/track/0H6rpW1xnJ8qRQwSrIADPE?utm_source=generator&theme=0' },
  { id: 'vc-1', name: 'Crockett\'s Theme', game: 'Vice City', color: '#ff00a0', embed: 'https://open.spotify.com/embed/track/3TnJ7M6in8Pb5EyGBUK02Y?utm_source=generator&theme=0' },
  { id: 'vc-2', name: 'Self Control', game: 'Vice City', color: '#00ffff', embed: 'https://open.spotify.com/embed/track/6JNJERZGJwDVgkmbohBw7u?utm_source=generator&theme=0' },
  { id: 'sa', name: 'Theme from San Andreas', game: 'San Andreas', color: '#e6b053', embed: 'https://open.spotify.com/embed/track/724X0Tdkai2En19Vi1HGUH?utm_source=generator&theme=0' },
  { id: 'gta-4', name: 'Soviet Connection', game: 'GTA IV', color: '#6b7280', embed: 'https://open.spotify.com/embed/track/5AAXvrvpClghVZIvk5wPqf?utm_source=generator&theme=0' },
  { id: 'gta-5-1', name: 'Welcome to Los Santos', game: 'GTA V', color: '#5f914d', embed: 'https://open.spotify.com/embed/track/4cQoodud0csr4WVt5eNxFn?utm_source=generator&theme=0' },
  { id: 'gta-5-2', name: 'Midnight City', game: 'GTA V', color: '#ff007f', embed: 'https://open.spotify.com/embed/track/1eyzqe2QqGZUmfcPZtrIyt?utm_source=generator&theme=0' },
  { id: 'gta-6-1', name: 'Love Is A Long Road', game: 'GTA VI', color: '#8a2be2', embed: 'https://open.spotify.com/embed/track/4PJEK76V3A1S0XzZJuTWh7?utm_source=generator&theme=0' },
  { id: 'gta-6-2', name: 'Hot Together', game: 'GTA VI', color: '#ff7f00', embed: 'https://open.spotify.com/embed/track/2KWhl75cqqKWEqTIHv1Zsd?utm_source=generator&theme=0' },
];

export default function Radio() {
  const [activeStationId, setActiveStationId] = useState(stations[0].id);
  const activeStation = useMemo(() => stations.find(s => s.id === activeStationId) || stations[0], [activeStationId]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a] z-0 pointer-events-none" />
      
      <div 
        className="absolute inset-0 transition-colors duration-1000 opacity-20 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${activeStation.color} 0%, transparent 60%)` 
        }}
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[calc(100vh-10rem)]">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div 
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center animate-[spin_10s_linear_infinite]"
          >
            <div className="w-full h-full rounded-full bg-[repeating-radial-gradient(#111_0%,_#222_2%,_#111_4%)] flex items-center justify-center">
              <div 
                className="w-32 h-32 rounded-full z-10 flex items-center justify-center border-4 border-black shadow-inner transition-colors duration-500"
                style={{ backgroundColor: activeStation.color }}
              >
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center pointer-events-none">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase drop-shadow-lg tracking-tight px-4 text-balance">
              {activeStation.name}
            </h2>
            <p className="font-mono text-xl tracking-widest mt-2" style={{ color: activeStation.color }}>
              {activeStation.game}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-5/12 glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl flex flex-col h-full max-h-[80vh]">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10 shrink-0">
            <RadioIcon className="w-8 h-8 text-white/80" />
            <h3 className="font-display text-2xl font-bold uppercase text-white/80 tracking-widest">
              Sintonizador
            </h3>
          </div>

          <div className="flex flex-col gap-3 mb-6 overflow-y-auto pr-2 scrollbar-thin flex-grow">
            {stations.map((station) => (
              <button
                key={station.id}
                onClick={() => setActiveStationId(station.id)}
                className={cn(
                  "flex items-center justify-between p-3 md:p-4 rounded-xl transition-all duration-200 border text-left",
                  activeStation.id === station.id
                    ? "bg-white/10 border-white/20 shadow-lg"
                    : "bg-black/40 border-transparent hover:bg-white/5 hover:border-white/10"
                )}
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className="font-display font-medium text-lg md:text-xl text-white uppercase truncate">
                    {station.name}
                  </span>
                </div>
                <span 
                  className="text-[10px] md:text-xs uppercase font-mono font-bold px-2 py-1 rounded shrink-0" 
                  style={{ color: station.color, backgroundColor: `${station.color}20` }}
                >
                  {station.game}
                </span>
              </button>
            ))}
          </div>

          <div className="h-[352px] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/20 relative shrink-0 shadow-xl">
             <iframe 
               key={activeStation.embed}
               src={activeStation.embed}
               width="100%" 
               height="100%" 
               frameBorder="0" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy"
               className="absolute inset-0"
               title={`Spotify - ${activeStation.name}`}
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
