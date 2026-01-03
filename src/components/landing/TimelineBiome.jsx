import React, { useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TimelineBiome = () => {
  const [cardSageRef, cardSageEntry] = useIntersectionObserver({ threshold: 0.15 });
  const [cardAmberRef, cardAmberEntry] = useIntersectionObserver({ threshold: 0.15 });
  const [cardIndigoRef, cardIndigoEntry] = useIntersectionObserver({ threshold: 0.15 });
  const [ascensionRuneRef, ascensionRuneEntry] = useIntersectionObserver({ threshold: 0.15 });

  useEffect(() => {
    if (cardSageEntry?.isIntersecting) {
      cardSageEntry.target.classList.remove('opacity-0');
      cardSageEntry.target.classList.add('animate-shatter-in');
    }
  }, [cardSageEntry]);

  useEffect(() => {
    if (cardAmberEntry?.isIntersecting) {
      cardAmberEntry.target.classList.remove('opacity-0');
      cardAmberEntry.target.classList.add('animate-shatter-in');
    }
  }, [cardAmberEntry]);

  useEffect(() => {
    if (cardIndigoEntry?.isIntersecting) {
      cardIndigoEntry.target.classList.remove('opacity-0');
      cardIndigoEntry.target.classList.add('animate-shatter-in');
    }
  }, [cardIndigoEntry]);

  useEffect(() => {
    if (ascensionRuneEntry?.isIntersecting) {
      ascensionRuneEntry.target.classList.remove('opacity-0');
      ascensionRuneEntry.target.classList.add('animate-grow-rune');
    }
  }, [ascensionRuneEntry]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sage-300/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm mb-8 animate-shatter-in" style={{ animationDelay: '0.1s' }}>
          <span className="material-symbols-outlined text-amber-500 text-sm">hourglass_empty</span>
          <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Crisis Mode Reassurance</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.05] animate-warp-in">
          Started late? <br className="hidden md:block" />
          <span className="text-primary inline-block relative">
            The AI has a 30-day <br className="lg:hidden" /> strategy.
          </span>
        </h1>
        <div className="relative inline-block max-w-2xl mx-auto animate-shatter-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="absolute -left-6 -top-4 text-6xl text-slate-100 dark:text-slate-800 opacity-100 font-serif leading-none">“</div>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">
            Doesn't matter if you're starting fresh in 11th or cramming in the final month—the AI has a strategy for <span className="text-indigo-500 dark:text-indigo-400 font-bold border-b-2 border-indigo-200 dark:border-indigo-700 pb-0.5">YOUR timeline</span>.
          </p>
          <div className="absolute -right-6 -bottom-8 text-6xl text-slate-100 dark:text-slate-800 opacity-100 font-serif leading-none transform rotate-180">“</div>
        </div>
      </div>
      <div className="relative mb-32">
        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 -z-10 hidden lg:block opacity-40 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1200 200" width="100%">
            <path d="M0,100 C200,100 250,100 400,100 L 800,100 C 950,100 1000,100 1200,100" fill="none" stroke="#E2E8F0" strokeDasharray="12 12" strokeWidth="3"></path>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          <div ref={cardSageRef} className="group relative flex flex-col bg-white dark:bg-slate-800 border-2 border-transparent hover:border-sage-200 dark:hover:border-sage-800/50 rounded-[2rem] p-6 lg:p-8 shadow-crystal-sage transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden opacity-0" id="card-sage">
            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="bg-sage-100 dark:bg-sage-900/40 text-sage-800 dark:text-sage-200 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase">
                ~450 Days Left
              </span>
              <div className="w-10 h-10 bg-sage-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-xl">eco</span>
              </div>
            </div>
            <div className="relative h-48 mb-6 bg-sage-50 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="relative z-10 flex flex-col items-center animate-float">
                <span className="material-symbols-outlined text-8xl text-sage-600 drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500">potted_plant</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1 relative z-10">Fresh Start</h3>
            <p className="text-sage-600 dark:text-sage-400 font-bold text-xs mb-6 relative z-10 tracking-wide uppercase">The Growth Spirit</p>
            <div className="bg-white/50 dark:bg-slate-700/30 rounded-xl p-0 mb-8 backdrop-blur-sm relative z-10">
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                "You have time to <span className="text-sage-700 dark:text-sage-300 font-bold">master concepts deeply</span>. We build unshakeable foundations first."
              </p>
            </div>
            <button className="mt-auto w-full py-4 rounded-xl bg-sage-500 hover:bg-sage-600 text-white font-bold text-base shadow-lg shadow-sage-200 dark:shadow-none hover:shadow-sage-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10">
              Align Path
              <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div ref={cardAmberRef} className="group relative flex flex-col bg-white dark:bg-slate-800 border-2 border-transparent hover:border-amber-200 dark:hover:border-amber-800/50 rounded-[2rem] p-6 lg:p-8 shadow-crystal-amber transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden opacity-0" id="card-amber" style={{ transitionDelay: '150ms' }}>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase">
                ~150 Days Left
              </span>
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-xl">timer</span>
              </div>
            </div>
            <div className="relative h-48 mb-6 bg-amber-50 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="relative z-10 flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-8xl text-amber-600 drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500">model_training</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1 relative z-10">Mid-Year Grind</h3>
            <p className="text-amber-600 dark:text-amber-400 font-bold text-xs mb-6 relative z-10 tracking-wide uppercase">The Effort Imp</p>
            <div className="bg-white/50 dark:bg-slate-700/30 rounded-xl p-0 mb-8 backdrop-blur-sm relative z-10">
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                "Focus on the <span className="text-amber-700 dark:text-amber-300 font-bold">high-ROI chapters</span>. We prioritize topics with the best effort-to-score ratio."
              </p>
            </div>
            <button className="mt-auto w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-200 dark:shadow-none hover:shadow-amber-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10">
              Align Path
              <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div ref={cardIndigoRef} className="group relative flex flex-col bg-[#2B2E4A] dark:bg-indigo-900 border-2 border-transparent hover:border-indigo-400/30 rounded-[2rem] p-6 lg:p-8 shadow-crystal-indigo transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden opacity-0" id="card-indigo" style={{ transitionDelay: '300ms' }}>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <span className="bg-indigo-500/20 text-indigo-100 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase border border-indigo-400/20">
                &lt; 30 Days Left
              </span>
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/40 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
            </div>
            <div className="relative h-48 mb-6 bg-indigo-900/40 rounded-2xl flex items-center justify-center overflow-hidden border border-indigo-500/10">
              <div className="relative z-10 flex flex-col items-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-8xl text-indigo-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transform group-hover:scale-110 transition-transform duration-500">rocket_launch</span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-1 relative z-10">Final Sprint</h3>
            <p className="text-indigo-300 font-bold text-xs mb-6 relative z-10 tracking-wide uppercase">The Sprint Fairy</p>
            <div className="bg-slate-900/40 rounded-xl p-4 mb-8 border border-indigo-500/20 relative z-10">
              <p className="text-indigo-100 text-xs leading-relaxed font-medium">
                "Stop leaking marks. We drill <span className="text-indigo-300 font-bold">error correction</span> and rapid mock analysis now."
              </p>
            </div>
            <button className="mt-auto w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-900/50 hover:shadow-indigo-500/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10">
              Align Path
              <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div ref={ascensionRuneRef} className="relative mt-24 opacity-0" id="ascension-rune">
        <div className="relative bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800 rounded-[3rem] p-8 lg:p-16 overflow-hidden shadow-rune">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] mb-6">
                <span className="material-symbols-outlined text-sm">verified</span>
                Ascension Data
              </div>
              <h2 className="text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                Students joining with <br />
                <span className="text-primary">&lt;90 days</span> improved by
              </h2>
              <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-6">
                <span className="text-6xl lg:text-7xl font-black text-slate-800 dark:text-white tracking-tight">60+</span>
                <span className="text-xl lg:text-2xl font-bold text-slate-400 dark:text-slate-500">percentile points</span>
              </div>
              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Because we stop the generic studying and show them what <span className="font-bold text-slate-900 dark:text-white">actually matters</span> to their score right now.
              </p>
            </div>
            <div className="flex-shrink-0 relative group">
              <button className="relative bg-primary hover:bg-[#4DBD02] text-white font-extrabold py-5 px-10 rounded-xl shadow-xl shadow-primary/20 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-3 text-lg w-full sm:w-auto justify-center">
                Start My Ascension
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
              </button>
              <p className="text-center text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-wider">Free trial • No credit card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineBiome;
