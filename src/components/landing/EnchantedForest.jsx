import React from 'react';

const EnchantedForest = () => {
  return (
    <div className="relative overflow-x-hidden font-body selection:bg-lime-200 selection:text-rankak-moss">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-forest-gradient"></div>
        <div className="absolute top-[15%] left-[8%] w-12 h-12 bg-white/40 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] right-[12%] w-24 h-24 bg-lime-100/30 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="study-pixie w-3 h-3 bg-lime-200/60 top-[10%] left-[20%] animate-pixie-flock"></div>
          <div className="study-pixie w-2 h-2 bg-amber-100/60 top-[15%] left-[25%] animate-pixie-flock" style={{ animationDelay: '2s' }}></div>
          <div className="study-pixie w-4 h-4 bg-green-100/50 top-[40%] right-[30%] animate-pixie-flock" style={{ animationDelay: '1s' }}></div>
          <div className="study-pixie w-2 h-2 bg-white/70 bottom-[30%] left-[10%] animate-pixie-flock" style={{ animationDelay: '3s' }}></div>
          <div className="study-pixie w-3 h-3 bg-lime-300/40 bottom-[20%] right-[20%] animate-pixie-flock" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute top-[10%] left-[5%] w-16 h-14 bg-lime-50 rounded-blob opacity-60 animate-float border border-white/40 shadow-lg backdrop-blur-sm study-spirit flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-rankak-indigo-deep rounded-full opacity-60 mr-2 animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-rankak-indigo-deep rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <div className="absolute top-[30%] right-[10%] w-12 h-10 bg-amber-50 rounded-blob opacity-60 animate-float-delayed border border-white/40 shadow-lg backdrop-blur-sm study-spirit"></div>
        <div className="forest-particle w-1.5 h-1.5 bg-lime-200 top-10 left-1/2 animate-pollen-drift opacity-80"></div>
        <div className="forest-particle w-1 h-1 bg-amber-200 top-1/3 left-1/3 animate-pollen-drift opacity-60" style={{ animationDuration: '25s', animationDelay: '2s' }}></div>
        <div className="forest-particle w-2 h-2 bg-white bottom-1/4 right-1/4 animate-pollen-drift opacity-40" style={{ animationDuration: '18s' }}></div>
        <div className="absolute inset-0 opacity-[0.03] animate-spin-slow origin-center scale-[1.8] pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,88.9,-2.9C87.7,12.2,82.6,26.9,73.6,39.2C64.6,51.5,51.7,61.4,38.1,68.9C24.5,76.4,10.2,81.5,-2.9,86.5C-16,91.5,-29.3,96.4,-41.2,92.5C-53.1,88.6,-63.6,75.9,-72.1,62.3C-80.6,48.7,-87.1,34.2,-88.4,19.2C-89.7,4.2,-85.8,-11.3,-78.2,-25.2C-70.6,-39.1,-59.3,-51.4,-46.6,-59.3C-33.9,-67.2,-19.8,-70.7,-5.2,-72.4C9.4,-74.1,28.7,-74,30.5,-83.6L44.7,-76.4Z" fill="#84CC16" transform="translate(100 100)"></path>
          </svg>
        </div>
      </div>
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-24 px-4 md:px-8">
        <div className="text-center max-w-5xl mx-auto mb-20 relative">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 border border-lime-200 text-rankak-moss font-bold text-xs uppercase tracking-widest mb-10 backdrop-blur-md shadow-md animate-float ring-1 ring-lime-100">
            <span className="material-symbols-outlined text-sm text-lime-600 animate-spin-slow" style={{ animationDuration: '10s' }}>star</span>
            Enchanted Forest of Silent Journeys
          </div>
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-9xl leading-none mb-8 tracking-tighter relative group cursor-default select-none">
            <div className="absolute inset-0 blur-3xl bg-white/40 rounded-full scale-150 -z-10 animate-pulse-glow"></div>
            <span className="block text-rankak-indigo-deep bg-clip-text text-transparent bg-gradient-to-b from-rankak-indigo-deep to-indigo-900 opacity-0 animate-bloom-text" style={{ animationDelay: '0.1s' }}>You're Not</span>
            <span className="block text-rankak-indigo-deep opacity-0 animate-bloom-text relative inline-block" style={{ animationDelay: '0.3s' }}>
              Alone
              <span className="absolute -top-6 -right-12 text-lime-400 opacity-30 animate-pulse-glow material-symbols-outlined text-[80px] -z-10 rotate-12">forest</span>
            </span>
          </h1>
          <div className="relative mt-10">
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-bloom">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-green-700 font-extrabold" style={{ animationDelay: '0.4s' }}>
                892 students
              </span>
              <span className="text-slate-500 opacity-80" style={{ animationDelay: '0.5s' }}>
                are studying right now.
              </span>
              <span className="block text-2xl md:text-4xl text-rankak-indigo-deep mt-4 font-black opacity-90" style={{ animationDelay: '0.6s' }}>
                None of them are showing off.
              </span>
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime-200/20 blur-3xl -z-10 rounded-full animate-pulse-glow"></div>
          </div>
          <div className="relative max-w-4xl mx-auto mt-20 group cursor-default perspective-1000">
            <div className="leaf-scroll-container rounded-leaf px-12 py-10 relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 animate-leaf-rustle transform transition-all duration-700 hover:rotate-1 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-lime-300 to-transparent opacity-60"></div>
              <span className="material-symbols-outlined text-lime-600 text-5xl animate-sway opacity-80">spa</span>
              <p className="text-rankak-moss text-xl md:text-3xl font-display font-bold leading-relaxed tracking-wide drop-shadow-sm">
                "Real community. No leaderboards that shame. Just presence and shared goal."
              </p>
              <span className="material-symbols-outlined text-lime-600 text-5xl animate-sway opacity-80" style={{ animationDelay: '1.5s' }}>psychology_alt</span>
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply"></div>
            </div>
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-40 bg-lime-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-24 h-40 bg-amber-200/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10 items-stretch perspective-1000">
          <div className="stone-glass rounded-organic-xl p-8 md:p-12 group animate-float border-t border-white relative overflow-hidden flex flex-col transform transition-transform hover:scale-[1.01] duration-700">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute inset-0 flex flex-col gap-20 animate-particle-swirl opacity-20">
                <div className="w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"></div>
                <div className="w-64 h-64 bg-green-200/20 rounded-full blur-3xl self-end"></div>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-10 left-10 opacity-10 animate-glyph-drift text-lime-700 font-bold text-5xl">+1</div>
              <div className="absolute bottom-20 right-10 opacity-10 animate-glyph-drift text-lime-700 font-bold text-3xl" style={{ animationDelay: '2s' }}>Done</div>
              <div className="absolute top-1/2 left-20 opacity-10 animate-glyph-drift text-lime-700 material-symbols-outlined text-6xl" style={{ animationDelay: '1s' }}>check_circle</div>
            </div>
            <div className="flex items-center justify-between mb-10 z-10 relative">
              <h3 className="font-display font-black text-4xl text-rankak-indigo-deep flex items-center gap-5">
                <span className="p-4 bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl border border-lime-200 shadow-lg relative overflow-hidden group-hover:rotate-6 transition-transform duration-500">
                  <span className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="material-symbols-outlined text-lime-700 text-3xl relative z-10 drop-shadow-sm">emoji_events</span>
                </span>
                Peer Wins
              </h3>
              <div className="px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-lime-800 border border-lime-300/50 uppercase tracking-wide shadow-sm flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
                </span>
                Live Feed
              </div>
            </div>
            <div className="relative h-[480px] overflow-hidden mask-gradient-b z-10 pr-2">
              <div className="space-y-5">
                <div className="victory-glyph p-6 rounded-[2rem] flex gap-5 items-start animate-grow-up group/card origin-bottom" style={{ '--target-height': 'auto' }}>
                  <div className="relative shrink-0">
                    <img alt="Student Avatar" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover ring-2 ring-lime-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFd_hytbIve2g0VjPGfAo5qZ_NJlIEIWU4DHcYK-qelYxfsVlgimr26cnYuRaLTDoGUn2B6DFjRRq9IMgXXt-EfsRYcQvkJpfnMEDXavYZepyHpFh6Qhi9a_0qMZVpDNOjO9ZEMDrRkbSLxOdOLAFe6RnFgVw91FcnJ53bKXc0Z7LHpQ4qh9we54WrpAqY5ChmxrL-4e9lRYL5GXKtVS8gjV2v9rBMX8bTbifJCNpaTnuZOi3C0HaMYHw4z9D1SIOtCINKrjs8Kus" />
                    <div className="absolute -bottom-1 -right-1 bg-lime-400 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[12px] text-white font-bold">bolt</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-rankak-indigo-deep text-lg">Arjun K.</span>
                      <span className="text-xs text-slate-400 font-semibold bg-white/60 px-2 py-0.5 rounded-md">2m ago</span>
                    </div>
                    <p className="text-slate-700 text-lg font-medium leading-snug">Went from <span className="text-lime-700 font-black bg-lime-100 px-1.5 py-0.5 rounded text-sm mx-1">40%</span> to <span className="text-lime-700 font-black bg-lime-100 px-1.5 py-0.5 rounded text-sm mx-1">72%</span> in Kinematics! 🎉 Finally clicked!</p>
                    <div className="flex gap-3 mt-3">
                      <button className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-lime-50 rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm transition-all group/reaction hover:shadow-md hover:border-lime-200">
                        <span className="group-hover/reaction:scale-125 transition-transform block">🔥</span>
                        <span className="text-lime-700">24</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-lime-50 rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm transition-all group/reaction hover:shadow-md hover:border-lime-200">
                        <span className="group-hover/reaction:scale-125 transition-transform block">👏</span>
                        <span className="text-lime-700">12</span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity transform group-hover/card:scale-110 duration-300 pointer-events-none">
                    <span className="material-symbols-outlined text-lime-300 text-6xl rotate-12 drop-shadow-md">celebration</span>
                  </div>
                </div>
                <div className="victory-glyph p-6 rounded-[2rem] flex gap-5 items-start animate-grow-up group/card origin-bottom" style={{ animationDelay: '0.3s', '--target-height': 'auto' }}>
                  <div className="relative shrink-0">
                    <img alt="Student Avatar" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover ring-2 ring-amber-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIVPATIvLqHJBjMSbzwJJgTAuc-CSuSx-Ger1HCWNrjYywDuUv2saojQlNNDaNU0U7T1v_dSHhddIfVOaU5Bm3ZopKQ141BGaQGtT_vBt8CHWigJ78h8Aerd3VoL7CbRFLUjdLfdnG15fWw5DYQits7U7-RGMcDiIN-vQWM0aDX93Zt7BKGkdSfGvP-4p2mtR1rF2G_93jtOzGwnTE_47aNGAEW_xHVL-KaYMrWj0KlQl8EuhVN-yD_ige7KB_9gjK5tebJL5eTV8" />
                    <div className="absolute -bottom-1 -right-1 bg-amber-400 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[12px] text-white font-bold">self_improvement</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-rankak-indigo-deep text-lg">Neha S.</span>
                      <span className="text-xs text-slate-400 font-semibold bg-white/60 px-2 py-0.5 rounded-md">5m ago</span>
                    </div>
                    <p className="text-slate-700 text-lg font-medium leading-snug">Just finished a 5-day streak without burnout. Feeling calm. 🧘‍♀️</p>
                    <div className="flex gap-3 mt-3">
                      <button className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-pink-50 rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm transition-all group/reaction hover:shadow-md hover:border-pink-200">
                        <span className="group-hover/reaction:scale-125 transition-transform block text-base">💖</span>
                        <span className="text-pink-500">45</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="victory-glyph p-6 rounded-[2rem] flex gap-5 items-start animate-grow-up opacity-80 group/card origin-bottom" style={{ animationDelay: '0.6s', '--target-height': 'auto' }}>
                  <div className="relative shrink-0">
                    <img alt="Student Avatar" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuSVPEETvleNDRqIg22fAsCPFcWnpz5pLVNyBupgpppLa1uvTw7VHrvPn2x5wwv489ZdJ_SIJKConFtbiEenWYd5deEWyY-AGBH0SSsJkThwW3Y7K_HYXP7OCWAt4fn154QjEoPjs_GyDckOtQPY_bFzyjcCGMZE62X7eQ8lJve-1V2PqwOXNsW1AsB6jKZxRl_pa1fCgSiNPkxpj0QHBuhlhpOGVFrsQvD1nB6M6JWEl2I8GpWzChZyagVZvlN9EHRCL2wcECYQ" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-rankak-indigo-deep text-lg">Rohan M.</span>
                      <span className="text-xs text-slate-400 font-semibold bg-white/60 px-2 py-0.5 rounded-md">8m ago</span>
                    </div>
                    <p className="text-slate-700 text-lg font-medium leading-snug">Understood rotational motion logic. It's actually fun? 🤯</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stone-glass rounded-organic-xl p-8 md:p-12 group animate-float-delayed border-t border-white relative overflow-hidden flex flex-col transform transition-transform hover:scale-[1.01] duration-700">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-100/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="flex items-center justify-between mb-8 z-10 relative">
              <h3 className="font-display font-black text-4xl text-rankak-indigo-deep flex items-center gap-5">
                <span className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 shadow-lg relative overflow-hidden group-hover:-rotate-6 transition-transform duration-500">
                  <span className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="material-symbols-outlined text-amber-600 text-3xl relative z-10 drop-shadow-sm">location_city</span>
                </span>
                City Rankings
              </h3>
              <div className="px-5 py-2 bg-amber-50/80 backdrop-blur-sm rounded-full text-xs font-bold text-amber-700 border border-amber-200/50 uppercase tracking-wide shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-sm animate-pulse">my_location</span>
                Your Zone
              </div>
            </div>
            <div className="flex-1 relative flex items-center justify-center min-h-[420px] w-full bg-white/30 rounded-[2.5rem] border border-white/50 overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-sm group/map">
              <div className="absolute inset-0 opacity-20 map-bg-pattern animate-map-drift"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_#FBBF24] animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-lime-500 rounded-full shadow-[0_0_15px_#84CC16] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] animate-float"></div>
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 300">
                <path className="glade-path" d="M-20,280 Q150,220 250,280 T420,250" fill="none" stroke="#84CC16" strokeLinecap="round" strokeWidth="2"></path>
                <path className="glade-path" d="M-20,80 Q180,180 220,60 T420,100" fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: '-10s' }}></path>
                <path className="glade-path" d="M100,320 C100,200 300,200 300,-20" fill="none" stroke="#65A30D" strokeDasharray="5,10" strokeWidth="1.5" style={{ animationDuration: '40s' }}></path>
              </svg>
              <div className="relative z-20 flex flex-col items-center">
                <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-amber-200 shadow-[0_20px_60px_-10px_rgba(245,158,11,0.25)] animate-float text-center w-80 transform transition-transform hover:scale-105 duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5 ring-4 ring-white/50">
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                    Bangalore
                  </div>
                  <div className="flex justify-between w-full mb-6 mt-2 px-2">
                    <div className="flex flex-col items-start">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Zone ID</span>
                      <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">BLR-04</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Status</span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-lime-600 bg-lime-50 px-2 py-0.5 rounded border border-lime-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span> Live
                      </span>
                    </div>
                  </div>
                  <div className="relative h-40 w-full flex items-end justify-center mb-2">
                    <div className="w-12 h-full bg-slate-100 rounded-t-full rounded-b-lg relative overflow-hidden border border-slate-200 mx-auto">
                      <div className="absolute bottom-0 left-0 w-full bg-sprout-gradient animate-sprout-rise rounded-t-full shadow-[0_0_20px_#84CC16]">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-50"></div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="text-amber-600/80 text-[10px] font-bold tracking-widest uppercase mb-1">Current Rank</div>
                      <div className="text-7xl font-black text-rankak-indigo-deep leading-none flex items-start gap-1 drop-shadow-sm">
                        <span className="text-2xl text-amber-400 mt-2 opacity-80 font-bold">#</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-rankak-indigo-deep to-indigo-800">12</span>
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-[calc(50%-2rem)] material-symbols-outlined text-lime-500 text-3xl -rotate-45 animate-sway origin-bottom-right">eco</div>
                    <div className="absolute bottom-16 right-[calc(50%-2rem)] material-symbols-outlined text-lime-400 text-2xl rotate-45 animate-sway origin-bottom-left" style={{ animationDelay: '1s' }}>eco</div>
                  </div>
                  <div className="flex justify-between mt-6 text-xs font-bold text-slate-500 font-mono bg-slate-50 p-2.5 rounded-xl border border-slate-100 shadow-inner">
                    <span className="flex items-center gap-1.5 text-rankak-indigo-deep"><span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>Top 5%</span>
                    <span className="text-lime-700 bg-lime-100 px-2 py-0.5 rounded border border-lime-200">+4 today</span>
                  </div>
                </div>
                <div className="absolute -bottom-8 w-40 h-10 bg-black/10 rounded-[100%] blur-xl transform scale-x-150"></div>
              </div>
              <div className="absolute bottom-12 left-12 text-lime-600/40 animate-float opacity-60 bg-white/40 p-3 rounded-full backdrop-blur-sm border border-white/40">
                <span className="material-symbols-outlined text-2xl">spa</span>
              </div>
              <div className="absolute top-24 right-12 text-amber-500/40 animate-sway opacity-60 bg-white/40 p-2 rounded-full backdrop-blur-sm border border-white/40">
                <span className="material-symbols-outlined text-xl">filter_vintage</span>
              </div>
            </div>
            <p className="text-center text-slate-600 text-sm mt-8 font-bold bg-white/60 inline-block mx-auto px-8 py-3 rounded-full border border-white/80 shadow-sm backdrop-blur-md">
              "Only comparing you to relevant peers. <br />No national pressure until you're ready."
            </p>
          </div>
        </div>
        <div className="mt-40 w-full max-w-5xl mx-auto text-center relative z-10 pb-20">
          <div className="relative mb-28 py-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[250px] bg-root-stream blur-3xl -z-10 animate-stream-flow opacity-60 rounded-full"></div>
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[180px] opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 100">
              <path className="animate-[dash_25s_linear_infinite]" d="M0,50 Q100,20 200,50 T400,50" fill="none" stroke="#84CC16" strokeDasharray="10 15" strokeLinecap="round" strokeWidth="3"></path>
              <path className="animate-[dash_35s_linear_infinite_reverse]" d="M0,60 Q100,90 200,60 T400,60" fill="none" stroke="#FEF3C7" strokeDasharray="5 10" strokeLinecap="round" strokeWidth="2" style={{ opacity: 0.6 }}></path>
            </svg>
            <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-[3rem] px-8 py-12 md:px-16 border border-white/60 shadow-[0_10px_40px_rgba(255,255,255,0.5)] inline-block transform hover:scale-[1.01] transition-transform duration-500">
              <p className="text-2xl md:text-4xl lg:text-5xl text-slate-600 font-display font-medium leading-relaxed">
                "This community doesn't judge. Everyone started somewhere. Most didn't finish on time. <br className="hidden lg:block" />
                <span className="text-lime-800 font-bold inline-block transform hover:scale-105 transition-transform cursor-default bg-lime-100/90 px-6 py-2 rounded-2xl shadow-sm border border-lime-200 mt-4 mx-2">But they started anyway.</span> <br />
                <span className="text-rankak-indigo-deep font-black text-5xl md:text-7xl mt-8 block tracking-tight drop-shadow-sm">So can you."</span>
              </p>
            </div>
          </div>
          <div className="relative group inline-block cursor-pointer">
            <div className="absolute inset-0 bg-lime-400 rounded-full blur-3xl opacity-20 group-hover:opacity-70 transition-opacity duration-500 transform group-hover:scale-150 animate-pulse-glow"></div>
            <div className="absolute inset-0 bg-amber-300 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 delay-100 animate-pulse"></div>
            <button className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-lime-500 via-lime-600 to-green-800 border-4 border-lime-200/50 shadow-2xl flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-[1.05] active:scale-95 overflow-hidden z-10 shadow-lime-900/30 group-hover:shadow-lime-600/50">
              <div className="absolute inset-0 orb-shine opacity-50"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-40 mix-blend-overlay bg-cover bg-center transition-transform duration-[2s] group-hover:scale-125 group-hover:rotate-12"></div>
              <span className="relative z-10 material-symbols-outlined text-7xl md:text-8xl text-white mb-4 group-hover:animate-sway drop-shadow-lg transition-transform duration-300">park</span>
              <span className="relative z-10 font-display font-black text-2xl md:text-3xl text-white tracking-widest drop-shadow-md text-center leading-tight">
                JOIN THE<br />FELLOWSHIP
              </span>
              <span className="relative z-10 text-lime-900 font-bold text-sm mt-5 font-mono transition-colors bg-lime-300/90 px-6 py-2 rounded-full shadow-lg border border-lime-100 group-hover:bg-white group-hover:text-lime-700">Start for free</span>
              <div className="absolute inset-0 border-2 border-white/60 rounded-full animate-ping opacity-30" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 border border-white/30 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
            </button>
          </div>
          <p className="mt-12 text-slate-500 font-bold text-sm tracking-[0.2em] uppercase opacity-70">
            No credit card required. Just curiosity.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EnchantedForest;
