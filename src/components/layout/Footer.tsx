import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative w-full h-[60vh] min-h-[400px] overflow-hidden flex flex-col justify-end mt-auto bg-black">
      {/* Sunset cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-pink-600/10 to-black z-0 pointer-events-none" />
      
      {/* Silhouettes - We'll use a placeholder stylized representation since we don't have the real image */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 w-full flex justify-center items-end opacity-40 z-0 pointer-events-none"
      >
        {/* Placeholder trio silhouettes using simple shapes or SVGs to represent them walking */}
        <div className="flex gap-4 md:gap-12 pb-10">
           <div className="w-12 md:w-16 h-32 md:h-48 bg-black rounded-t-full rounded-b-md shadow-[0_0_50px_rgba(255,100,0,0.3)] animate-pulse" style={{ animationDuration: '4s' }} />
           <div className="w-16 md:w-20 h-40 md:h-56 bg-black rounded-t-full rounded-b-md shadow-[0_0_50px_rgba(255,100,0,0.3)] animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
           <div className="w-14 md:w-18 h-36 md:h-52 bg-black rounded-t-full rounded-b-md shadow-[0_0_50px_rgba(255,100,0,0.3)] animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pb-12 flex flex-col items-center text-center">
        <h2 className="font-display font-black text-4xl md:text-6xl text-white opacity-80 mb-4 tracking-tighter">
          GTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">UNIVERSE</span>
        </h2>
        
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
          Projeto criado por fã, inspirado na franquia Grand Theft Auto. 
          Este site não possui vínculo oficial com a Rockstar Games ou Take-Two Interactive.
        </p>

        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
      
      {/* Optional ambient audio for sunset could be added here */}
    </footer>
  );
}
