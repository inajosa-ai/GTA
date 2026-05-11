import { motion } from 'motion/react';
import { protagonists } from '../data/protagonists';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Protagonists() {
  const [hoveredProto, setHoveredProto] = useState<string | null>(null);
  const { t } = useTranslation();

  // Grouping for the Bento Grid based on the PDF design expectations
  const pairs = [
    { id: 'gta6', items: protagonists.filter(p => p.game === 'GTA VI') },
    { id: 'gta5', items: protagonists.filter(p => ['Trevor Philips', 'Franklin Clinton'].includes(p.name)) },
    { id: 'mixed1', items: protagonists.filter(p => ['Michael De Santa', 'Niko Bellic'].includes(p.name)) },
    { id: 'mixed2', items: protagonists.filter(p => ['Carl Johnson (CJ)', 'Tommy Vercetti'].includes(p.name)) },
    { id: 'classic', items: protagonists.filter(p => p.game === 'GTA III') }
  ];

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 overflow-hidden font-sans">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tighter drop-shadow-lg neon-text-pink">
            <Trans i18nKey="protagonists.title">Os Protagonistas</Trans>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            <Trans i18nKey="protagonists.desc">
              Conheça as mentes brilhantes e caóticas por trás dos maiores crimes do universo Grand Theft Auto.
            </Trans>
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-8 max-w-6xl mx-auto">
          {pairs.map((group) => (
            group.items.length > 0 && (
              <div 
                key={group.id} 
                className={cn(
                  "grid gap-4 md:gap-8",
                  group.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1"
                )}
              >
                {group.items.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredProto(p.id)}
                    onMouseLeave={() => setHoveredProto(null)}
                    className="group relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden glass border border-white/10 cursor-default bg-[#0a0a0a]"
                  >
                    <div 
                      className={cn(
                        "absolute inset-0 bg-cover bg-top transition-transform duration-1000 ease-out opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal",
                        hoveredProto === p.id ? "scale-105 opacity-100" : ""
                      )} 
                      style={{ backgroundImage: `url(${p.image})` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded backdrop-blur-md bg-black/50 border border-white/10" style={{ color: p.color }}>
                           {p.game}
                         </span>
                      </div>
                      
                      <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase leading-none drop-shadow-md tracking-tight mb-4">
                        {p.name}
                      </h2>

                      <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100">
                        <div className="border-t border-white/20 pt-4 mt-2">
                          <div className="flex gap-3 mb-4">
                            <Quote className="w-5 h-5 shrink-0 opacity-50" style={{ color: p.color }} />
                            <p className="font-serif italic text-white/90 md:text-lg">"{t(`protagonists_data.${p.id}.quote`, { defaultValue: p.quote })}"</p>
                          </div>
                          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-4">
                            {t(`protagonists_data.${p.id}.bio`, { defaultValue: p.bio })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
