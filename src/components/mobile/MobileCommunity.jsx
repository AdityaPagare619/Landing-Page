import React from 'react';

const MobileCommunity = () => {
  return (
    <main className="relative z-10 max-w-md mx-auto px-5 py-8 flex flex-col gap-8 pb-20">
      <section className="text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-card-dark border border-secondary/30 shadow-sm">
          <span className="material-symbols-rounded text-secondary text-sm">forest</span>
          <span className="text-xs font-semibold text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">Enchanted Forest</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-main-light dark:text-text-main-dark leading-[1.1] tracking-tight">
          You're Not <br />
          <span className="text-primary dark:text-primary">Alone</span>
        </h1>
        <p className="text-lg text-text-sub-light dark:text-text-sub-dark font-medium leading-relaxed">
          <span className="text-secondary font-bold text-xl">892 students</span> are studying right now. None of them are showing off.
        </p>
      </section>
      <div className="w-full p-6 rounded-3xl bg-lime-50 dark:bg-lime-900/10 border border-lime-100 dark:border-lime-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-50">
          <span className="material-symbols-rounded text-secondary text-4xl">format_quote</span>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          <span className="material-symbols-rounded text-secondary text-3xl mb-1">spa</span>
          <p className="text-lg font-bold text-lime-900 dark:text-lime-100 italic">
            "Real community. No leaderboards that shame. Just presence and shared goal."
          </p>
        </div>
      </div>
      <div className="glass-panel p-1 rounded-3xl shadow-float transition-transform transform hover:scale-[1.01] duration-300">
        <div className="bg-card-light dark:bg-card-dark rounded-[1.3rem] p-5 h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400">
                <span className="material-symbols-rounded">emoji_events</span>
              </div>
              <h3 className="font-bold text-xl text-text-main-light dark:text-text-main-dark">Peer Wins</h3>
            </div>
            <div className="flex items-center gap-1 pl-2 pr-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-green-700 dark:text-green-300 uppercase">Live Feed</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
              <img alt="Arjun K." className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZP3fovbQiioLSTNM2kkqITJ09l4gYLh-6kLJ_HCFbgSLZgDbQUSe3dAcD2-pccUldHQIkc3E4sELUEOlad8j-snTmOltVHO9XAwxXQ5BRwYHsszOFY04oC5fMEsAtOEM8agM1LLoj5kMWhzfxHnjqCx_Prix9ZEf8_gyyLMyANbtRB2zHlS8XfGWd647vRf4xiZ7Adp2uU6L-M2PrQ4BdDdy--COe-4-v1P2WqjS136ILgMHRB5Y91CO-Gl6_ZQa5n4GyXYdEyY" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-text-main-light dark:text-text-main-dark text-sm">Arjun K.</h4>
                  <span className="text-xs text-text-sub-light dark:text-text-sub-dark">2m ago</span>
                </div>
                <p className="text-sm text-text-sub-light dark:text-text-sub-dark mt-1 leading-snug">
                  Went from <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 px-1 rounded text-xs font-bold">40%</span> to <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-1 rounded text-xs font-bold">72%</span> in Kinematics! 🎉 Finally clicked!
                </p>
                <div className="flex gap-3 mt-2">
                  <button className="flex items-center gap-1 text-xs text-text-sub-light dark:text-text-sub-dark bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    🔥 24
                  </button>
                  <button className="flex items-center gap-1 text-xs text-text-sub-light dark:text-text-sub-dark bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    👏 12
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileCommunity;
