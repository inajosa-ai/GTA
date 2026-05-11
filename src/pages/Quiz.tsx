import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { cn } from '@/lib/utils';

export default function Quiz() {
  const { t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);

  const rawQuestions = t('quiz.questions', { returnObjects: true }) as Array<{text: string; options: string[]}>;

  const quizQuestions = useMemo(() => {
    if (!Array.isArray(rawQuestions) || rawQuestions.length < 10) return [];
    return [
      { id: 1, text: rawQuestions[0].text, options: rawQuestions[0].options, answer: 2, level: 1 },
      { id: 2, text: rawQuestions[1].text, options: rawQuestions[1].options, answer: 2, level: 1 },
      { id: 3, text: rawQuestions[2].text, options: rawQuestions[2].options, answer: 2, level: 1 },
      { id: 4, text: rawQuestions[3].text, options: rawQuestions[3].options, answer: 1, level: 2 },
      { id: 5, text: rawQuestions[4].text, options: rawQuestions[4].options, answer: 2, level: 2 },
      { id: 6, text: rawQuestions[5].text, options: rawQuestions[5].options, answer: 0, level: 3 },
      { id: 7, text: rawQuestions[6].text, options: rawQuestions[6].options, answer: 1, level: 3 },
      { id: 8, text: rawQuestions[7].text, options: rawQuestions[7].options, answer: 1, level: 3 },
      { id: 9, text: rawQuestions[8].text, options: rawQuestions[8].options, answer: 1, level: 2 },
      { id: 10, text: rawQuestions[9].text, options: rawQuestions[9].options, answer: 0, level: 3 },
    ];
  }, [rawQuestions]);

  const question = quizQuestions[currentQuestionIndex];
  
  const handleAnswer = (optionIndex: number) => {
    if (isAnswering || !question) return;
    setIsAnswering(true);
    setSelectedOption(optionIndex);

    const isCorrect = optionIndex === question.answer;

    setTimeout(() => {
      if (isCorrect) {
        const xpGained = question.level * 10 * (1 + (streak * 0.1));
        setScore(prev => prev + 1);
        setXp(prev => prev + Math.floor(xpGained));
        setStreak(prev => prev + 1);
      } else {
        setStreak(0);
      }

      setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          setIsGameOver(true);
        }
        setSelectedOption(null);
        setIsAnswering(false);
      }, 1000);
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setXp(0);
    setStreak(0);
    setIsGameOver(false);
  };

  if (quizQuestions.length === 0) return null;

  if (isGameOver) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20 px-4 flex flex-col items-center justify-center font-sans relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black z-0 pointer-events-none" />
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="glass p-12 rounded-3xl border border-white/10 text-center max-w-2xl w-full relative z-10 shadow-[0_0_50px_rgba(255,200,0,0.2)]"
         >
           <Trophy className="w-24 h-24 mx-auto text-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
           <h1 className="font-display font-black text-5xl uppercase text-white mb-2">{t('quiz.completed')}</h1>
           <p className="text-xl text-white/60 mb-8 font-light">{t('quiz.veteran')}</p>
           
           <div className="grid grid-cols-2 gap-4 mb-12">
             <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <span className="block text-sm uppercase text-white/40 tracking-widest mb-1 font-bold">{t('quiz.score')}</span>
                <span className="font-display font-black text-5xl text-white">{score}<span className="text-2xl text-white/20">/{quizQuestions.length}</span></span>
             </div>
             <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                <span className="block text-sm uppercase text-yellow-500/60 tracking-widest mb-1 font-bold">{t('quiz.xp')}</span>
                <span className="font-display font-black text-5xl text-yellow-500">{xp}</span>
             </div>
           </div>

           <button 
             onClick={resetQuiz}
             className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-colors"
           >
             {t('quiz.retry')}
           </button>
         </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header HUD */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-12 glass p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="block font-mono text-xs uppercase text-white/40 mb-1 tracking-widest">{t('quiz.level')}</span>
              <div className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center font-bold text-pink-500 shadow-[0_0_10px_rgba(255,0,127,0.3)]">
                {Math.floor(xp / 100) + 1}
              </div>
            </div>
            
            <div className="flex-grow min-w-[200px]">
              <div className="flex justify-between mb-1">
                <span className="font-mono text-xs uppercase text-white/70">{t('quiz.global_xp')}</span>
                <span className="font-mono text-xs text-pink-400">{xp} / {(Math.floor(xp / 100) + 1) * 100}</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-pink-600 to-orange-500" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(xp % 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={cn("flex items-center gap-2 px-3 py-1 rounded border", streak > 2 ? "border-orange-500 text-orange-500 bg-orange-500/10" : "border-white/10 text-white/40")}>
              <Star className="w-4 h-4" /> x{streak} {t('quiz.streak')}
            </div>
          </div>
        </header>

        {/* Progress Tracker */}
        <div className="flex gap-1 mb-8">
          {quizQuestions.map((q, i) => (
            <div 
              key={q.id} 
              className={cn(
                "h-1 flex-1 rounded-sm transition-colors duration-300",
                i < currentQuestionIndex ? "bg-white/40" : i === currentQuestionIndex ? "bg-pink-500 shadow-[0_0_10px_rgba(255,0,127,0.5)]" : "bg-white/10"
              )}
            />
          ))}
        </div>

        {/* Question Area */}
        <AnimatePresence mode="wait">
          {question && (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className={cn(
                  "w-6 h-6",
                  question.level === 1 ? "text-green-500" : question.level === 2 ? "text-orange-500" : "text-red-500"
                )} />
                <span className="text-xs uppercase font-bold tracking-widest text-white/60">
                  {t('quiz.wanted_level')}: {question.level} {question.level > 1 ? t('quiz.stars_many') : t('quiz.stars_1')}
                </span>
              </div>

              <h2 className="font-display font-medium text-3xl md:text-5xl leading-tight text-white drop-shadow-md mb-12">
                {question.text}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((opt, idx) => {
                  let btnStateClass = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-white/80";
                  
                  if (isAnswering) {
                    if (idx === question.answer) {
                      btnStateClass = "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                    } else if (idx === selectedOption) {
                      btnStateClass = "bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
                    } else {
                      btnStateClass = "bg-black/50 border-white/5 text-white/20"; // disabled look
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswering}
                      onClick={() => handleAnswer(idx)}
                      className={cn(
                        "p-6 rounded-xl border text-left flex items-center justify-between transition-all duration-300 font-sans text-lg font-medium",
                        btnStateClass
                      )}
                    >
                      <span>{opt}</span>
                      {isAnswering && idx === question.answer && <CheckCircle2 className="w-6 h-6 shrink-0" />}
                      {isAnswering && idx === selectedOption && idx !== question.answer && <XCircle className="w-6 h-6 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
