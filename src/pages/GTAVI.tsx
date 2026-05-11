import { motion } from 'motion/react';
import { Search, Database, Fingerprint, Eye, Lock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export default function GTAVI() {
  const { t } = useTranslation();
  const intelData = t('gta6.intel', { returnObjects: true }) as Array<{subject: string; detail: string}>;
  return (
    <div className="min-h-screen bg-[#050505] text-[#E4E3E0] pt-24 pb-20 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Editorial Header */}
        <header className="mb-16 border-b border-[#E4E3E0]/20 pb-8 relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F27D26] mb-4 block">
              {t('gta6.confidential')}
            </span>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-6 text-white pt-2">
              <Trans i18nKey="gta6.title">
                Projeto <br /> Americas
              </Trans>
            </h1>
            <p className="max-w-2xl text-lg md:text-2xl font-light opacity-70">
              {t('gta6.desc')}
            </p>
          </div>
          
          {/* Subtle watermark */}
          <div className="absolute right-0 bottom-0 text-[200px] font-black opacity-[0.02] -z-10 leading-none pointer-events-none select-none">
            VI
          </div>
        </header>

        {/* Dashboard Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Pane */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section className="bg-[#141414] rounded-sm p-8 border border-[#E4E3E0]/10">
              <h2 className="font-serif italic text-3xl mb-8 flex items-center gap-4 text-white">
                <Database className="w-6 h-6 text-[#F27D26]" />
                {t('gta6.confirmed_records')}
              </h2>
              
              <div className="flex flex-col border-t border-[#E4E3E0]/10">
                {intelData && Array.isArray(intelData) && intelData.map((item, i) => (
                  <motion.div 
                    key={`REC-0${i + 1}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-[100px_1fr] md:grid-cols-[100px_200px_1fr] gap-4 p-4 border-b border-[#E4E3E0]/10 hover:bg-[#1a1a1a] transition-colors cursor-crosshair group"
                  >
                    <div className="font-mono text-xs opacity-50 group-hover:text-[#F27D26] transition-colors">
                      {`REC-0${i + 1}`}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-sm hidden md:block">
                      {item.subject}
                    </div>
                    <div className="font-mono text-sm opacity-80 group-hover:opacity-100">
                      <span className="md:hidden font-bold uppercase block mb-1 text-white">{item.subject}</span>
                      {item.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-sm p-8 border border-pink-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Eye className="w-32 h-32" />
              </div>
              <h2 className="font-display font-black text-4xl uppercase mb-4 text-white relative z-10 flex items-center gap-3">
                {t('gta6.trailer_title')} <span className="px-2 py-0.5 bg-pink-500 text-white text-xs rounded-sm">Dez 2023</span>
              </h2>
              <p className="text-lg opacity-80 relative z-10 font-light mb-6">
                {t('gta6.trailer_desc')}
              </p>
              <div className="aspect-video bg-black rounded-sm border border-white/10 flex items-center justify-center relative z-10 overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/QdBZY2fkU-0?si=HqA2B11c5Wn_0mS3&autoplay=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Sidebar Analysis */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#141414] p-6 border border-[#E4E3E0]/10 rounded-sm">
               <h3 className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-6 flex items-center gap-2">
                 <Fingerprint className="w-4 h-4" /> {t('gta6.social_analysis')}
               </h3>
               
               <div className="space-y-4">
                 <div className="p-4 bg-black border border-white/5">
                   <p className="font-mono text-xs text-white/60 mb-2">{t('gta6.trailer_engagement')}</p>
                   <p className="text-3xl font-display font-bold">93M+ <span className="text-sm font-normal opacity-50">{t('gta6.engagement_detail')}</span></p>
                 </div>
                 <div className="p-4 bg-black border border-white/5">
                   <p className="font-mono text-xs text-white/60 mb-2">{t('gta6.revenue_forecast')}</p>
                   <p className="text-3xl font-display font-bold">$1B+ <span className="text-sm font-normal opacity-50">{t('gta6.revenue_detail')}</span></p>
                 </div>
                 <div className="p-4 bg-black border border-white/5 border-l-4 border-l-[#F27D26]">
                   <p className="font-mono text-xs text-white/60 mb-2">{t('gta6.dev_status')}</p>
                   <p className="text-xl font-display font-bold text-[#F27D26]">{t('gta6.dev_status_value')}</p>
                   <p className="text-xs opacity-50 mt-1">{t('gta6.dev_status_detail')}</p>
                 </div>
               </div>
            </div>

            <div className="group relative h-64 bg-black border border-white/10 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
               <div className="relative z-10 text-center p-6 backdrop-blur-sm bg-black/40 border border-white/10">
                 <h4 className="font-display font-bold uppercase tracking-widest">Vice City</h4>
                 <p className="font-mono text-xs opacity-70 mt-2">{t('gta6.threat_level')}</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
