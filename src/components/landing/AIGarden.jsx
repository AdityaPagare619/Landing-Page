import React from 'react';

const AIGarden = () => {
  return (
    <div className="relative overflow-x-hidden selection:bg-rankak-green selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="cloud-shape w-[800px] h-[800px] -top-[20%] -left-[10%] animate-drift" style={{ animationDuration: '120s' }}></div>
        <div className="cloud-shape w-[900px] h-[900px] top-[10%] -right-[30%] animate-drift" style={{ animationDuration: '140s', animationDirection: 'reverse' }}></div>
        <div className="cloud-shape w-[600px] h-[500px] bottom-[5%] left-[5%] animate-drift" style={{ animationDuration: '100s' }}></div>
        <svg className="river-container dark:opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 3000">
          <path className="opacity-30" d="M-100,0 C200,400 600,600 400,1000 S0,1600 200,2000 S600,2600 400,3000" fill="none" stroke="#D1FAE5" strokeLinecap="round" strokeWidth="120" style={{ filter: 'blur(40px)' }}></path>
        </svg>
        <div className="absolute inset-0 w-full h-full">
          <div className="dust-particle w-1 h-1 top-[20%] left-[20%] animate-float"></div>
          <div className="dust-particle w-2 h-2 top-[50%] right-[30%] animate-float-delayed"></div>
          <div className="dust-particle w-1.5 h-1.5 bottom-[30%] left-[40%] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      <main className="relative z-10 w-full flex flex-col items-center pt-32 pb-20 overflow-hidden">
        <div className="text-center max-w-5xl mx-auto mb-20 px-4 relative z-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-6 rounded-full bg-[#E0F2DE] dark:bg-green-900/40 text-[#5D8C52] dark:text-green-300 font-extrabold text-[10px] tracking-widest mb-8 uppercase border border-[#C5E6C0] dark:border-green-800 backdrop-blur-sm shadow-sm animate-pop-in">
            <span className="material-symbols-outlined text-sm">spa</span>
            AI Garden • Variant 3
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tight drop-shadow-sm animate-reveal-up">
            The system learns <br />
            you. <br />
            <span className="text-rankak-green animate-gradient inline-block transform hover:scale-105 transition-transform duration-500 cursor-default mt-2">Fast.</span>
          </h1>
          <div className="relative inline-block max-w-xl mx-auto animate-reveal-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-soft border border-slate-100 dark:border-slate-700 flex gap-5 items-center relative transform transition-all hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-orange-500 text-2xl">lightbulb</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-bold leading-tight mb-1">
                  "More questions ≠ More marks."
                </h3>
                <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
                  Right questions at the right time = <span className="text-rankak-green font-bold">Rank up.</span>
                </p>
              </div>
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 text-white dark:text-slate-800 fill-current" preserveAspectRatio="none" viewBox="0 0 30 15">
                <path d="M0,0 L15,15 L30,0 Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto relative z-10 px-4 md:px-0 pb-32">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center group perspective-1000">
            <div className="order-1 md:order-1 relative flex justify-center md:justify-end md:pr-12">
              <svg className="connector-curve absolute top-1/2 left-full w-32 h-32 hidden md:block -translate-y-1/2 translate-x-4 pointer-events-none" style={{ overflow: 'visible' }}>
                <path d="M -20,60 Q 40,60 40,-20" fill="none" stroke="#8FB386" strokeLinecap="round" strokeWidth="6"></path>
              </svg>
              <div className="w-64 h-64 relative animate-float group-hover:z-20">
                <div className="w-full h-full bg-[#F0FDF4] dark:bg-slate-800 rounded-[3rem] shadow-3d-icon flower-core flex flex-col items-center justify-center relative overflow-hidden transform transition-all hover:scale-105 duration-500 border border-white/60 dark:border-white/10">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-2">
                      <span className="material-symbols-outlined text-[7rem] text-[#2DD4BF] drop-shadow-md">cloud</span>
                      <span className="material-symbols-outlined text-5xl text-yellow-400 absolute -bottom-4 -right-2 animate-pulse-slow drop-shadow-md">flash_on</span>
                    </div>
                    <div className="flex justify-center gap-1.5 mt-2 opacity-60">
                      <div className="w-1.5 h-4 bg-[#2DD4BF] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1.5 h-4 bg-[#2DD4BF] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-4 bg-[#2DD4BF] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  <div className="text-[#115E59] dark:text-teal-400 text-sm font-extrabold mt-6 uppercase tracking-[0.2em]">Assess</div>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-2">
              <div className="leaf-bubble right-leaf bg-white dark:bg-slate-800 p-10 shadow-soft border border-slate-100 dark:border-slate-700 max-w-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-bloom origin-left relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#2DD4BF]"></div>
                  <h3 className="text-[#14B8A6] dark:text-teal-400 font-extrabold tracking-widest text-xs uppercase">Phase 1</h3>
                </div>
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-snug font-bold font-display mb-6">
                  "Week 1: You solve 20 questions... We measure your <span className="text-[#14B8A6]">accuracy</span> , <span className="text-[#14B8A6]">speed</span> , and <span className="text-[#14B8A6]">confidence</span> ."
                </p>
                <button className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 px-6 py-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold text-sm shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 transition-all group/btn">
                  <span>Start Assessment</span>
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <svg className="absolute bottom-[-1px] left-[-20px] w-12 h-12 text-white dark:text-slate-800 fill-current transform rotate-[10deg]" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d="M40,0 Q10,10 0,40 L40,40 Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center group">
            <div className="order-2 md:order-1 md:text-right flex flex-col items-end">
              <div className="leaf-bubble bg-white dark:bg-slate-800 p-10 shadow-soft border border-slate-100 dark:border-slate-700 max-w-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-bloom origin-right relative" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h3 className="text-[#6366F1] dark:text-indigo-400 font-extrabold tracking-widest text-xs uppercase">Phase 2</h3>
                  <div className="w-3 h-3 rounded-full bg-[#6366F1]"></div>
                </div>
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-snug font-bold font-display mb-6">
                  "Week 2: We find gaps in <span className="text-[#6366F1]">Mechanics</span>. Deep scanning makes the invisible visible."
                </p>
                <button className="w-full md:w-auto ml-0 md:ml-auto flex items-center justify-between md:justify-start gap-4 px-6 py-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold text-sm shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 transition-all group/btn flex-row md:flex-row-reverse">
                  <span>See Analysis</span>
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover/btn:-translate-x-1 transition-transform">arrow_back</span>
                </button>
                <svg className="absolute bottom-[-1px] right-[-20px] w-12 h-12 text-white dark:text-slate-800 fill-current transform rotate-[-10deg] scale-x-[-1]" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d="M40,0 Q10,10 0,40 L40,40 Z"></path>
                </svg>
              </div>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center md:justify-start md:pl-12">
              <svg className="connector-curve absolute top-1/2 right-full w-32 h-32 hidden md:block -translate-y-1/2 -translate-x-4 pointer-events-none" style={{ overflow: 'visible' }}>
                <path d="M 120,60 Q 60,60 60,-20" fill="none" stroke="#789C6A" strokeLinecap="round" strokeWidth="6"></path>
              </svg>
              <div className="w-64 h-64 relative animate-float-delayed">
                <div className="w-full h-full bg-[#EEF2FF] dark:bg-slate-800 rounded-[3rem] shadow-3d-icon flower-core flex flex-col items-center justify-center relative overflow-hidden transform transition-all hover:scale-105 duration-500 border border-white/60 dark:border-white/10">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center bg-[#6366F1] rounded-2xl rotate-3 shadow-lg">
                      <span className="material-symbols-outlined text-6xl text-white drop-shadow-md z-10">query_stats</span>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full"></div>
                      <div className="absolute bottom-3 left-3 w-2 h-2 bg-white/40 rounded-full"></div>
                    </div>
                    <span className="material-symbols-outlined text-[10rem] text-[#6366F1] absolute opacity-10 animate-spin" style={{ animationDuration: '15s' }}>cyclone</span>
                  </div>
                  <div className="text-[#4338CA] dark:text-indigo-400 text-sm font-extrabold mt-8 uppercase tracking-[0.2em] relative z-10">Analyze</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center group">
            <div className="order-1 md:order-1 relative flex justify-center md:justify-end md:pr-12">
              <svg className="connector-curve absolute top-1/2 left-full w-32 h-32 hidden md:block -translate-y-1/2 translate-x-4 pointer-events-none" style={{ overflow: 'visible' }}>
                <path d="M -20,60 Q 40,60 40,-20" fill="none" stroke="#6D915F" strokeLinecap="round" strokeWidth="6"></path>
              </svg>
              <div className="w-64 h-64 relative animate-float">
                <div className="w-full h-full bg-[#FFF7ED] dark:bg-slate-800 rounded-[3rem] shadow-3d-icon flower-core flex flex-col items-center justify-center relative overflow-hidden transform transition-all hover:scale-105 duration-500 border border-white/60 dark:border-white/10">
                  <div className="relative z-10">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[5rem] text-[#F97316] absolute top-0 left-2 z-10">share</span>
                      <span className="material-symbols-outlined text-[4rem] text-[#FBBF24] absolute bottom-0 right-0 opacity-90 z-0">dns</span>
                    </div>
                  </div>
                  <div className="text-[#C2410C] dark:text-orange-400 text-sm font-extrabold mt-4 uppercase tracking-[0.2em]">Adapt</div>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-2">
              <div className="leaf-bubble right-leaf bg-white dark:bg-slate-800 p-10 shadow-soft border border-slate-100 dark:border-slate-700 max-w-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-bloom origin-left relative" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#F97316]"></div>
                  <h3 className="text-[#EA580C] dark:text-orange-400 font-extrabold tracking-widest text-xs uppercase">Phase 3</h3>
                </div>
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-snug font-bold font-display mb-6">
                  "Week 3: We <span className="text-[#F97316]">ONLY</span> show you Mechanics questions. No time wasting. The path shifts for you."
                </p>
                <button className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 px-6 py-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold text-sm shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 transition-all group/btn">
                  <span>Explore Logic</span>
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <svg className="absolute bottom-[-1px] left-[-20px] w-12 h-12 text-white dark:text-slate-800 fill-current transform rotate-[10deg]" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d="M40,0 Q10,10 0,40 L40,40 Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-12 items-center group">
            <div className="order-2 md:order-1 md:text-right flex flex-col items-end">
              <div className="leaf-bubble bg-white dark:bg-slate-800 p-10 shadow-soft border border-slate-100 dark:border-slate-700 max-w-xl transform transition-all duration-700 hover:-translate-y-2 hover:shadow-xl animate-bloom origin-right relative" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3 mb-4 justify-end">
                  <h3 className="text-[#EC4899] dark:text-pink-400 font-extrabold tracking-widest text-xs uppercase">Phase 4</h3>
                  <div className="w-3 h-3 rounded-full bg-[#EC4899]"></div>
                </div>
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-snug font-bold font-display mb-6">
                  "Week 4: Your Mechanics accuracy jumps from <span className="text-[#EF4444]">45%</span> to <span className="text-[#10B981]">68%</span>. You bloom."
                </p>
                <button className="w-full md:w-auto ml-0 md:ml-auto flex items-center justify-between md:justify-start gap-4 px-6 py-3 rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold text-sm shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 transition-all group/btn flex-row md:flex-row-reverse">
                  <span>View Metrics</span>
                  <span className="material-symbols-outlined text-sm text-slate-400 group-hover/btn:-translate-x-1 transition-transform">arrow_back</span>
                </button>
                <svg className="absolute bottom-[-1px] right-[-20px] w-12 h-12 text-white dark:text-slate-800 fill-current transform rotate-[-10deg] scale-x-[-1]" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <path d="M40,0 Q10,10 0,40 L40,40 Z"></path>
                </svg>
              </div>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center md:justify-start md:pl-12">
              <svg className="connector-curve absolute top-1/2 right-full w-32 h-32 hidden md:block -translate-y-1/2 -translate-x-4 pointer-events-none" style={{ overflow: 'visible' }}>
                <path d="M 120,60 Q 60,60 60,-20" fill="none" stroke="#5D8C52" strokeLinecap="round" strokeWidth="6"></path>
              </svg>
              <div className="w-64 h-64 relative animate-float-delayed">
                <div className="w-full h-full bg-[#FCE7F3] dark:bg-slate-800 rounded-[3rem] shadow-3d-icon flower-core flex flex-col items-center justify-center relative overflow-hidden transform transition-all hover:scale-105 duration-500 border border-white/60 dark:border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/50 to-transparent dark:from-pink-900/20"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative bg-[#F472B6] w-32 h-32 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                      <span className="material-symbols-outlined text-[5rem] text-white drop-shadow-md">local_florist</span>
                    </div>
                  </div>
                  <div className="text-[#BE185D] dark:text-pink-400 text-sm font-extrabold mt-6 uppercase tracking-[0.2em] relative z-10">Advance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 flex flex-col items-center mt-12 mb-24 w-full">
          <div className="relative flex items-center justify-center w-full max-w-4xl h-[500px]">
            <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-dashed border-orange-200 dark:border-orange-900/40 animate-spin-slow" style={{ animationDuration: '60s' }}>
              <div className="absolute top-1/2 -right-8 md:-right-10 w-20 h-20 md:w-28 md:h-28 rounded-[2rem] sunstone-gem flex items-center justify-center animate-pulse-slow transform -rotate-90 shadow-2xl z-20">
                <span className="material-symbols-outlined text-white text-5xl rotate-90 drop-shadow-md">bolt</span>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="dust-particle w-2 h-2 top-[20%] left-[30%] opacity-60 animate-float"></div>
              <div className="dust-particle w-3 h-3 bottom-[20%] right-[30%] opacity-40 animate-float-delayed"></div>
            </div>
            <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(251,191,36,0.2)] border-[6px] border-[#FFFBEB] dark:border-amber-900/30 text-center relative overflow-hidden group z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FEF3C7] to-transparent opacity-40 dark:opacity-10 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="bg-[#FEF3C7] dark:bg-amber-900/40 text-[#B45309] dark:text-amber-300 px-5 py-1.5 rounded-full text-[10px] font-extrabold mb-2 uppercase tracking-widest">Efficiency Boost</div>
                <h3 className="text-7xl md:text-8xl font-black text-[#F59E0B] mb-0 tracking-tighter drop-shadow-sm">40%</h3>
                <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">Faster Improvement</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[280px] mx-auto leading-snug mb-6">
                  Compared to random practice methods.
                </p>
                <button className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-rankak-green text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group pebble-btn border-2 border-transparent">
                  Start Growing
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 bg-white dark:bg-slate-800 px-10 py-4 rounded-full shadow-soft border border-slate-100 dark:border-slate-700 animate-reveal-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex -space-x-3">
              <img alt="Student" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1A-9HwzkZaQtPQ99NPTrmUGIE-TlGihCRyN2s30x-pMg_CTPQrf1Fml4bS7hJ1FxdUd9pkdUvL4Ob7NBCZl8CG9OUCrt9uNMdaY-c6UeOYotlLzELzQp4llRlfEIL-6RgfHKFObgE_NBLMOdXWarmNVlji7w9oXmLNrsRNjwd7UbUB3jd8RJxqKVwLBt828JPxXH77e10En-DCC0RISyDIx8XqCBGzcLQHM_txfeGIk6FuRlIA1RuQbDOW6T9CnM42ATRZq4sCs8" />
              <img alt="Student" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtX7S9rZT_QB_QpFUyDTKYikTEktmEvpIvO5FHep4WDM0D_y0cZkxYAXROoANbxCeIK7SYGRslPEk0bxSfXCMtTd8ga1-C-JzSzPwhm1kdpYdDVN82AAUnKR-J_PQFBWnjlH-Q9P7Kl0n848kLbWkcMXK-8g0vFguWyKIyjx7XPKkYxU0BqRQKqF7R6nToC6Y2Bncd8M2k_Uos3SkPOqrTUyJV4NPXmbKhSomCQoszMKB1at3wWW71J7y6HxRfJ10GQAAc2tYWD4s" />
              <img alt="Student" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp2A3yMSjdjWxzgN_srRQXE5muEQ1T3f_zSTdqnWc8lazpLPjCOfS1RP9u6NN51hIuHlv3LZaPfcVRq4huaALqjpa96qCDjIvYDEeSaO6wheHt_PLjHFZG2F9nr9LtcfxaxbOAXTReSILWu6OeUXxyVY7iOoNI--Jlonr0FhvGiJ3BK1VNCQymDaOJnavGxJulFPIqM0DK31BI16Ce9pk9VEvcqiSm6r7daI_Yw-1M_pGZy6kbVVVflm-rPqBohzvKgtOfbLJ3LnE" />
            </div>
            <div className="text-left flex flex-col justify-center">
              <div className="flex text-[#FBBF24] text-xs gap-0.5 mb-0.5">
                <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                <span className="material-symbols-outlined text-[14px] fill-current">star</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">1,200+ Students Blooming</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIGarden;
