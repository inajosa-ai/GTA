import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { games } from '../data/games';
import { protagonists } from '../data/protagonists';
import { Trophy, Clock, Target, DollarSign, Calendar, Info, MapPin, Users, Image as ImageIcon } from 'lucide-react';
import { useRef } from 'react';

// Maps game IDs to specific map images and map names
const gameMaps: Record<string, { image: string, name: string }> = {
  "gta-1": { image: "/maps/lc.jpg", name: "Liberty City Clássica" },
  "gta-2": { image: "/maps/lc.jpg", name: "Anywhere City" },
  "gta-3": { image: "/maps/lc.jpg", name: "Liberty City" },
  "gta-vice-city": { image: "/maps/vc.jpg", name: "Vice City" },
  "gta-san-andreas": { image: "/maps/sa.jpg", name: "Estado de San Andreas" },
  "gta-iv": { image: "/maps/lc.jpg", name: "Liberty City HD" },
  "gta-v": { image: "/maps/ls.jpg", name: "Los Santos & Blaine County" },
  "gta-vi": { image: "/maps/leonida.jpg", name: "Estado de Leonida" }
};

// Maps game titles/ids to specific protagonists
const gameProtagonistsMapping: Record<string, string[]> = {
  "gta-3": ["claude"],
  "gta-vice-city": ["tommy"],
  "gta-san-andreas": ["cj"],
  "gta-iv": ["niko"],
  "gta-v": ["michael", "franklin", "trevor"],
  "gta-vi": ["lucia", "jason"]
};

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!game) return <Navigate to="/games" />;

  const gameProtos = protagonists.filter(p => gameProtagonistsMapping[game.id]?.includes(p.id));
  const gameMap = gameMaps[game.id];

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Cinematic Parallax Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-20">
        <motion.div 
          style={{ y, opacity, backgroundImage: `url(${game.heroImage})` }}
          className="absolute inset-0 bg-cover bg-center z-0 origin-top bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span 
              className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-4 inline-block"
              style={{ backgroundColor: game.color, color: '#fff' }}
            >
              {t('games.official')}
            </span>
            <div className="flex items-center gap-6">
              {game.logo && game.logo.startsWith('/') ? (
                <img 
                  src={game.logo} 
                  alt={game.title} 
                  className="w-auto h-24 md:h-32 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] filter brightness-0 invert"
                />
              ) : null}
              <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[100px] leading-none text-white uppercase drop-shadow-2xl">
                {!game.logo?.startsWith('/') ? (game.logo || game.title) : ''}
              </h1>
            </div>
            
            <p className="max-w-2xl text-xl md:text-2xl mt-6 text-white/80 font-light">
              {t(`games_data.${game.id}.description`, { defaultValue: game.description })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="relative z-30 -mt-20 px-4">
        <div className="container mx-auto">
          <div className="glass rounded-xl p-8 border-t-2" style={{ borderTopColor: game.color }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { label: t('games.release_year'), value: game.releaseDate.split(' ')[4] || game.releaseDate },
                { label: t('games.city'), value: t(`games_data.${game.id}.city`, { defaultValue: game.city }) },
                { label: t('games.protagonists'), value: game.protagonists },
                { label: t('games.platforms'), value: game.platforms },
                { label: t('games.important_details'), value: `${game.missions} ${t('games.missions')} • ${game.gameplayTime}` },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-white/50 mb-1">
                    <span className="text-xs uppercase font-bold tracking-wider">{stat.label}</span>
                  </div>
                  <span className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story & Curiosities */}
      <section className="py-24 container mx-auto px-4 z-20 relative border-b border-white/5">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-1 rounded-full" style={{ backgroundColor: game.color }} />
              {t('games.story')}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              {t(`games_data.${game.id}.story`, { defaultValue: game.story })}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-black uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-1 rounded-full" style={{ backgroundColor: game.color }} />
              {t('games.curiosities')}
            </h2>
            <ul className="space-y-6">
              {(t(`games_data.${game.id}.curiosities`, { returnObjects: true, defaultValue: game.curiosities }) as string[]).map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: `${game.color}20`, color: game.color }}>
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-white/80 leading-relaxed font-medium">{c}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {game.gallery && game.gallery.length > 0 && (
        <section className="py-24 container mx-auto px-4 z-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl font-black uppercase flex items-center gap-4">
              <span className="w-12 h-1 rounded-full" style={{ backgroundColor: game.color }} />
              <ImageIcon className="w-8 h-8" style={{ color: game.color }} />
              {t('games.gallery')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {game.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl border border-white/10"
              >
                <img 
                  src={img} 
                  alt={`${game.title} screenshot ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-mono tracking-widest uppercase text-sm border border-white/50 px-4 py-2 backdrop-blur-sm">
                    {t('games.view_art')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Map & Protagonist Section */}
      <section className="py-24 bg-black/50 relative border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Protagonists */}
            {gameProtos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl font-black uppercase mb-12 flex items-center gap-4">
                  <span className="w-12 h-1 rounded-full" style={{ backgroundColor: game.color }} />
                  <Users className="w-8 h-8" style={{ color: game.color }} />
                  {t('games.protagonists')}
                </h2>

                <div className="grid gap-6">
                  {gameProtos.map((proto) => (
                    <Link to="/protagonists" key={proto.id} className="block group">
                      <div className="glass p-6 rounded-2xl flex items-center gap-6 border-transparent border transition-all hover:border-white/20 hover:bg-white/5 relative overflow-hidden">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 flex-shrink-0" style={{ borderColor: proto.color }}>
                          <img src={proto.image} alt={proto.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-bold text-white mb-2">{proto.name}</h3>
                          <p className="text-white/60 text-sm line-clamp-2">{t(`protagonists_data.${proto.id}.bio`, { defaultValue: proto.bio })}</p>
                        </div>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                          <span className="text-sm font-mono tracking-wider inline-block bg-white/10 px-3 py-1 rounded-md" style={{ color: proto.color }}>{t('games.view_profile')}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Map */}
            {gameMap && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={gameProtos.length === 0 ? "lg:col-span-2" : ""}
              >
                <h2 className="font-display text-4xl font-black uppercase mb-12 flex items-center gap-4">
                  <span className="w-12 h-1 rounded-full" style={{ backgroundColor: game.color }} />
                  <MapPin className="w-8 h-8" style={{ color: game.color }} />
                  {t('games.location')}
                </h2>

                <Link to="/maps" className="block group">
                  <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10">
                    <img 
                      src={gameMap.image} 
                      alt={`Mapa de ${gameMap.name}`} 
                      className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-xs uppercase font-mono tracking-widest block mb-2" style={{ color: game.color }}>{t('games.region')}</span>
                      <h3 className="font-display text-3xl font-black text-white">{gameMap.name}</h3>
                    </div>
                    
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 glass flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
