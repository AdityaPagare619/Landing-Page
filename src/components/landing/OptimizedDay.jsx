import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const OptimizedDay = () => {
  const [dailyProgressRef, entry] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.bar-anim');
      bars.forEach(bar => {
        bar.style.animationName = 'none';
        void bar.offsetHeight;
        bar.style.animationName = 'barGrow';
      });
      const path = entry.target.querySelector('.path-anim');
      if (path) {
        path.style.animationName = 'none';
        void path.offsetHeight;
        path.style.animationName = 'dashDraw';
      }
    }
  }, [entry]);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
        <h1 className="text-6xl md:text-7xl font-black text-gray-800 mb-8 tracking-tight drop-shadow-sm flex items-center justify-center gap-4 flex-wrap">
          <span className="stagger-word text-[#6B4EF8]">Your</span>
          <span className="stagger-word text-[#FFC800] relative">
            Day.
            <svg className="absolute -top-6 -right-8 w-10 h-10 text-yellow-400 animate-bounce-subtle" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"></path></svg>
          </span>
          <span className="stagger-word text-[#3C3C3C]">Optimized.</span>
        </h1>
        <div className="relative inline-block max-w-3xl mx-auto mt-6">
          <div className="absolute -left-6 -top-6 bg-[#6B4EF8] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-20 animate-[bounce_3s_infinite]">
            <span className="material-symbols-outlined text-white text-3xl">format_quote</span>
          </div>
          <div className="whisper-bubble p-8 md:p-12 text-xl md:text-2xl text-gray-600 font-medium leading-relaxed animate-grow-in origin-top">
            You don't need 10 hours daily.
            <span className="font-bold text-[#6B4EF8] relative inline-block mx-1">
              20 min of smart practice
              <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FFC800] rounded-full opacity-80"></div>
            </span>
            beats 2 hours of random grinding. And you'll actually remember what you learn.
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mb-32 relative z-10">
        <div className="hidden lg:block absolute top-[80px] left-10 right-10 h-[200px] -z-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
            <path className="constellation-path" d="M100,80 Q350,250 600,80 T1100,80" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="3"></path>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative px-4">
          <div className="group relative flex flex-col items-center">
            <div className="relative w-44 h-44 mb-8 cursor-pointer transform transition-transform duration-500 hover:scale-105 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-globe-amber animate-unfurl flex items-center justify-center overflow-hidden">
                <div className="orb-shine"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-7xl text-white drop-shadow-md animate-[spin_12s_linear_infinite]">wb_sunny</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full opacity-20 blur-md"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:10px_10px] opacity-30"></div>
              </div>
            </div>
            <div className="progress-rune bg-white rounded-xl p-5 shadow-orb-card border border-gray-100 relative w-full max-w-[260px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-md">6:30 AM</span>
                <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1"><span className="material-symbols-outlined text-sm">bolt</span>+15 XP</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">Morning Scroll</h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">Wake up with 5 quick Physics concepts.</p>
            </div>
          </div>
          <div className="group relative flex flex-col items-center mt-8 lg:mt-32">
            <div className="relative w-44 h-44 mb-8 cursor-pointer transform transition-transform duration-500 hover:scale-105 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400 to-green-500 shadow-globe-sage animate-unfurl flex items-center justify-center overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <div className="orb-shine"></div>
                <div className="relative z-10 animate-bounce-wild">
                  <span className="material-symbols-outlined text-7xl text-white drop-shadow-md">lunch_dining</span>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:10px_10px] opacity-30"></div>
              </div>
            </div>
            <div className="progress-rune bg-white rounded-xl p-5 shadow-orb-card border border-gray-100 relative w-full max-w-[260px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-green-600 uppercase tracking-wider bg-green-50 px-2 py-1 rounded-md">2:00 PM</span>
                <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1"><span className="material-symbols-outlined text-sm">local_fire_department</span>Streak</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">Lunch Break</h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">Bite-sized Chem quiz while you eat.</p>
            </div>
          </div>
          <div className="group relative flex flex-col items-center">
            <div className="relative w-44 h-44 mb-8 cursor-pointer transform transition-transform duration-500 hover:scale-105 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 shadow-globe-indigo animate-unfurl flex items-center justify-center overflow-hidden" style={{ animationDelay: '0.4s' }}>
                <div className="orb-shine"></div>
                <div className="relative z-10 animate-pulse-slow">
                  <span className="material-symbols-outlined text-7xl text-white drop-shadow-md">lightbulb</span>
                  <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="progress-rune bg-white rounded-xl p-5 shadow-orb-card border border-gray-100 relative w-full max-w-[260px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-indigo-500 uppercase tracking-wider bg-indigo-50 px-2 py-1 rounded-md">7:00 PM</span>
                <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1"><span className="material-symbols-outlined text-sm">stars</span>Level Up</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">Deep Dive</h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">45 min focused mock test session.</p>
            </div>
          </div>
          <div className="group relative flex flex-col items-center mt-8 lg:mt-32">
            <div className="relative w-44 h-44 mb-8 cursor-pointer transform transition-transform duration-500 hover:scale-105 z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-teal-400 shadow-globe-cool animate-unfurl flex items-center justify-center overflow-hidden" style={{ animationDelay: '0.6s' }}>
                <div className="orb-shine"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-7xl text-white drop-shadow-md animate-float-delayed">cloud</span>
                  <span className="absolute top-0 right-[-10px] text-white font-bold text-sm animate-float">z</span>
                  <span className="absolute top-[10px] right-[-20px] text-white font-bold text-xs animate-float" style={{ animationDelay: '1s' }}>z</span>
                </div>
              </div>
            </div>
            <div className="progress-rune bg-white rounded-xl p-5 shadow-orb-card border border-gray-100 relative w-full max-w-[260px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black text-teal-600 uppercase tracking-wider bg-teal-50 px-2 py-1 rounded-md">Before Bed</span>
                <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1"><span className="material-symbols-outlined text-sm">lock</span>Saved</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">Sleep Ritual</h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">Review mistakes. Clear mind.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-20">
        <div ref={dailyProgressRef} className="crystal-orb-bg p-10 md:p-14 transition-all duration-700 hover:shadow-2xl relative overflow-hidden group/card transform hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
          <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-6 relative z-10">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Daily Progress</h2>
              <p className="text-lg font-medium text-gray-500">Mastery at a glance</p>
            </div>
            <div className="flex flex-col w-full md:w-72 mt-2">
              <div className="flex justify-between w-full text-xs font-bold uppercase tracking-wider mb-2 text-primary">
                <span className="flex items-center gap-1 transition-transform group-hover/card:scale-105 duration-300"><span className="material-symbols-outlined text-sm animate-bounce-subtle">trophy</span> Rookie II</span>
                <span className="text-gray-400">1875 / 2500 XP</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
                <div className="absolute top-0 left-0 h-full w-[75%] bg-[#FFC800] rounded-full shadow-[0_0_15px_rgba(255,200,0,0.6)] animate-[shimmer_2s_infinite]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 h-full flex flex-col hover:bg-white hover:shadow-lg transition-all duration-500 group/bars">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Subject Accuracy</h4>
                <div className="flex items-end justify-between flex-grow px-4 gap-6 h-48">
                  <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar1">
                    <div className="relative w-full rounded-lg bg-[#A2E665] shadow-sm bar-anim" style={{ height: '35%', animationDelay: '0.1s' }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover/bar1:opacity-100 transition-opacity duration-300 -mb-2">35%</div>
                    </div>
                    <span className="text-xs font-bold text-gray-500 group-hover/bar1:text-gray-800 transition-colors">Phys</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar2">
                    <div className="relative w-full rounded-lg bg-[#84CC16] shadow-sm bar-anim" style={{ height: '60%', animationDelay: '0.3s' }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover/bar2:opacity-100 transition-opacity duration-300 -mb-2">60%</div>
                    </div>
                    <span className="text-xs font-bold text-gray-500 group-hover/bar2:text-gray-800 transition-colors">Chem</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-3 h-full justify-end hover-lift cursor-pointer group/bar3">
                    <div className="relative w-full rounded-lg bg-[#58CC02] shadow-bar-glow bar-anim" style={{ height: '85%', animationDelay: '0.5s' }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover/bar3:opacity-100 transition-opacity duration-300 -mb-2">85%</div>
                    </div>
                    <span className="text-xs font-bold text-gray-800 group-hover/bar3:text-primary transition-colors">Math</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F0F4FF] rounded-3xl p-6 border border-indigo-100 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-md cursor-pointer group/growth">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-indigo-400 tracking-wider mb-1">Growth</span>
                  <span className="text-3xl font-black text-indigo-600 flex items-center gap-2 group-hover/growth:translate-x-1 transition-transform">
                    +12%
                    <span className="material-symbols-outlined text-xl animate-bounce-subtle">trending_up</span>
                  </span>
                </div>
                <div className="h-12 w-32 relative overflow-hidden">
                  <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 30" width="100%">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#818CF8"></stop>
                        <stop offset="100%" stopColor="#4F46E5"></stop>
                      </linearGradient>
                    </defs>
                    <path className="path-anim" d="M0 28 C 20 28, 40 20, 50 15 C 60 10, 80 5, 100 2" fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col items-center justify-center relative bg-orange-50 rounded-[2.5rem] border border-orange-100 p-8 overflow-hidden group hover:shadow-2xl hover:bg-orange-50/80 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-100/50 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-48 h-48 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute w-[160%] h-[160%] rounded-full flame-aura animate-pulse-glow blur-xl group-hover:animate-pulse"></div>
                <div className="relative z-10 fire-face w-32 h-32 drop-shadow-2xl">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                    <path className="animate-flame-flicker origin-bottom" d="M50 10C50 10 20 40 20 70C20 95 35 110 50 110C65 110 80 95 80 70C80 40 50 10 50 10Z" fill="url(#fireGradient)"></path>
                    <path d="M50 0C50 0 65 25 65 40C65 50 60 55 50 55C40 55 35 50 35 40C35 25 50 0 50 0Z" fill="#FDBA74" opacity="0.6"></path>
                    <defs>
                      <linearGradient id="fireGradient" x1="50" x2="50" y1="0" y2="110">
                        <stop offset="0%" stopColor="#FCD34D"></stop>
                        <stop offset="50%" stopColor="#F97316"></stop>
                        <stop offset="100%" stopColor="#EF4444"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-12 h-8 flex justify-between items-center px-1">
                    <div className="w-3 h-3 bg-black rounded-full fire-eyes group-hover:scale-y-50 transition-transform"></div>
                    <div className="w-3 h-3 bg-black rounded-full fire-eyes group-hover:scale-y-50 transition-transform"></div>
                  </div>
                  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-2 h-2 bg-red-900 rounded-full opacity-60 group-hover:w-4 group-hover:h-3 group-hover:rounded-b-full transition-all duration-300"></div>
                </div>
              </div>
              <div className="text-center relative z-10 mt-2 transform transition-transform duration-300 group-hover:translate-y-1">
                <div className="text-6xl font-black text-gray-800 tracking-tight group-hover:scale-110 transition-transform inline-block">12</div>
                <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mt-2 group-hover:text-orange-600">Day Streak</div>
              </div>
              <div className="mt-8 bg-white px-5 py-2.5 rounded-full text-xs font-bold text-gray-500 shadow-sm border border-gray-100 flex items-center gap-2 group-hover:shadow-md transition-all">
                <span>Top <span className="text-orange-500">5%</span> of students</span>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button className="momentum-stone relative inline-flex items-center justify-center px-16 py-5 bg-[#6B4EF8] text-white font-extrabold text-xl rounded-2xl overflow-hidden group hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative flex items-center gap-3">
                Continue Your Day
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform font-bold">arrow_forward</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedDay;
