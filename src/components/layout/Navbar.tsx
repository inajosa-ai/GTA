import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Map as MapIcon, Gamepad2, Users, Music, Crosshair, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.games'), path: '/games', icon: Gamepad2 },
    { name: t('nav.protagonists'), path: '/protagonists', icon: Users },
    { name: t('nav.maps'), path: '/maps', icon: MapIcon },
    { name: t('nav.radio'), path: '/radio', icon: Music },
    { name: t('nav.gta6'), path: '/gta6', icon: Star, special: true },
    { name: t('nav.quiz'), path: '/quiz', icon: Crosshair },
  ];

  const handleLanguageToggle = () => {
    const newLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "bg-gradient-to-b from-black/80 to-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-2xl tracking-tighter text-white group-hover:neon-text-pink transition-all duration-300">
              GTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">UNIVERSE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase transition-colors duration-200",
                  location.pathname === link.path 
                    ? (link.special ? "text-pink-500 neon-text-pink" : "text-white") 
                    : (link.special ? "text-pink-400 hover:text-pink-300" : "text-white/70 hover:text-white")
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={handleLanguageToggle} className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm font-semibold">
              <Globe className="w-4 h-4" />
              <span>{i18n.language.startsWith('pt') ? 'PT-BR' : 'EN-US'}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            <div className="p-4 flex justify-between items-center w-full">
              <button onClick={handleLanguageToggle} className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm font-semibold p-2">
                <Globe className="w-4 h-4" />
                <span>{i18n.language.startsWith('pt') ? 'PT-BR' : 'EN-US'}</span>
              </button>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center gap-8 p-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-display font-bold uppercase text-center flex items-center gap-3",
                      link.special ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" : "text-white"
                    )}
                  >
                    {link.icon && <link.icon className={cn("w-6 h-6", link.special ? "text-orange-500" : "text-white/50")} />}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
