import { motion } from 'motion/react';
import { games } from '../data/games';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Games() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-4 tracking-tighter">
          {t('games.title')}
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
          {t('games.desc')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <Link key={game.id} to={`/games/${game.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group rounded-xl overflow-hidden glass cursor-pointer h-[400px]"
              style={{
                boxShadow: `0 0 20px -5px ${game.color}40`,
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                style={{ backgroundImage: `url(${game.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                <div 
                  className="w-12 h-1 mb-4 rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: game.color }}
                />
                
                <h2 className="font-display font-bold text-3xl text-white mb-2 uppercase leading-none drop-shadow-md">
                  {game.title}
                </h2>
                
                <p className="text-white/70 text-sm line-clamp-2 md:opacity-0 md:-translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 w-full">
                  {t(`games_data.${game.id}.description`, { defaultValue: game.description })}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
