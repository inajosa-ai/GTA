import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    // Target: Nov 19, 2026, BRT (UTC-3). Let's just use UTC for simplicity if we don't have timezone libs
    const difference = +new Date("2026-11-19T00:00:00-03:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        {/* Background image & gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1533615467645-564dddeab5e5?q=80&w=2070&auto=format&fit=crop')", // Miami neon vibes
            filter: 'brightness(0.6) saturate(1.2) contrast(1.1)'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent z-10" />
        
        {/* Particle Overlay (simulated with radial dots or pseudo elements in reality, but a simple div with noise works) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10" />

        <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[120px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-pink-400 to-orange-400 drop-shadow-[0_0_30px_rgba(255,0,127,0.8)] neon-text-pink mb-4">
              GTA <br className="md:hidden" />UNIVERSE
            </h1>
            <p className="font-sans text-xl md:text-3xl text-white/90 uppercase tracking-[0.2em] font-light shadow-black drop-shadow-md">
              <Trans i18nKey="home.welcome">
                Bem-vindo a <span className="font-semibold text-pink-400">Leonida</span>
              </Trans>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex gap-4 flex-wrap justify-center"
          >
            <Link to="/games" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider rounded-none border border-white/20 transition-all hover:neon-glow-pink flex items-center gap-2">
              {t('home.explore')} <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/gta6" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-bold uppercase tracking-wider rounded-none transition-all shadow-[0_0_20px_rgba(255,0,127,0.4)] hover:shadow-[0_0_30px_rgba(255,127,0,0.6)]">
              {t('home.gta6_trailer')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COUNTDOWN SECTION GTA VI */}
      <section className="py-24 relative overflow-hidden bg-black border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 uppercase tracking-tighter">
              <Trans i18nKey="home.waiting">
                A Espera Está <span className="text-pink-500">Acabando</span>
              </Trans>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              {t('home.waiting_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {Object.keys(timeLeft).length ? (
              Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="glass p-6 md:p-10 flex flex-col items-center justify-center border-t-2 border-t-pink-500/50 rounded-lg group hover:bg-white/5 transition-colors">
                  <span className="font-display font-black text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 group-hover:from-pink-400 group-hover:to-orange-400 transition-all duration-500">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-white/40 uppercase tracking-[0.2em] text-sm md:text-base font-bold mt-2">
                    {t(`home.${unit}`)}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-4xl font-display font-bold text-pink-500 neon-text-pink animate-pulse">
                {t('home.arrived')}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OVERVIEW GALLERY SECTION */}
      <section className="py-24 relative bg-black border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 uppercase tracking-tighter">
              <Trans i18nKey="home.essence_title">
                A Essência da <span className="text-orange-500">Franquia</span>
              </Trans>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              {t('home.essence_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Logos */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-full relative overflow-hidden rounded-xl shadow-[0_0_30px_rgba(255,0,127,0.1)] group-hover:shadow-[0_0_40px_rgba(255,0,127,0.2)] mb-6 border border-white/10 transition-all duration-500 bg-[#0a0a0a]">
                <img
                  src="/evolucao.png"
                  alt={t('home.evolution')}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl font-black uppercase tracking-wider text-white flex items-center justify-between">
                {t('home.evolution')}
                <span className="w-8 h-1 rounded-full bg-pink-500" />
              </h3>
              <p className="text-white/50 mt-2 font-light">{t('home.evolution_desc')}</p>
            </motion.div>

            {/* Protagonistas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col group"
            >
              <div className="w-full relative overflow-hidden rounded-xl shadow-[0_0_30px_rgba(255,127,0,0.1)] group-hover:shadow-[0_0_40px_rgba(255,127,0,0.2)] mb-6 border border-white/10 transition-all duration-500 bg-[#0a0a0a]">
                <img
                  src="/personagens.png"
                  alt={t('home.protagonists_title')}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl font-black uppercase tracking-wider text-white flex items-center justify-between">
                {t('home.protagonists_title')}
                <span className="w-8 h-1 rounded-full bg-orange-500" />
              </h3>
              <p className="text-white/50 mt-2 font-light">{t('home.protagonists_desc')}</p>
            </motion.div>

            {/* Mapas */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col group"
            >
              <div className="w-full relative overflow-hidden rounded-xl shadow-[0_0_30px_rgba(0,127,255,0.1)] group-hover:shadow-[0_0_40px_rgba(0,127,255,0.2)] mb-6 border border-white/10 transition-all duration-500 bg-[#0a0a0a]">
                <img
                  src="/regiao.png"
                  alt={t('home.regions')}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl font-black uppercase tracking-wider text-white flex items-center justify-between">
                {t('home.regions')}
                <span className="w-8 h-1 rounded-full bg-blue-500" />
              </h3>
              <p className="text-white/50 mt-2 font-light">{t('home.regions_desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
