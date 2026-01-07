import React from 'react';

const MobileDailyFlow = () => {
  return (
    <main className="max-w-md mx-auto px-5 pb-24 overflow-hidden relative">
      <header className="relative z-10 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="material-icons-round text-secondary text-2xl">auto_awesome</span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          Your Day. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Optimized.</span>
        </h1>
        <div className="relative bg-white dark:bg-card-dark rounded-2xl p-6 shadow-card-float border border-gray-100 dark:border-gray-800 mx-2 mt-6 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -top-4 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="material-icons-round text-xl">format_quote</span>
          </div>
          <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-200">
            You don't need 10 hours daily. <span className="text-primary font-bold">20 min of smart practice</span> beats 2 hours of random grinding.
          </p>
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white dark:bg-card-dark border-r border-b border-gray-100 dark:border-gray-800 transform rotate-45"></div>
        </div>
      </header>
      <section className="relative z-10">
        <div className="constellation-line"></div>
        <div className="relative mb-16 group">
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white dark:bg-gray-800 shadow-sm border border-secondary/30 text-secondary dark:text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
            6:30 AM
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-lg shadow-orange-500/30 flex items-center justify-center mb-6 relative z-10 floating-orb ring-4 ring-white dark:ring-background-dark">
              <span className="material-icons-round text-white text-5xl drop-shadow-md">wb_sunny</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
            </div>
            <div className="w-full bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft-glow border border-orange-100 dark:border-orange-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-100 dark:from-orange-900/20 to-transparent rounded-bl-3xl"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Morning Scroll</h3>
                <span className="flex items-center text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                  <span className="material-icons-round text-sm mr-1 text-secondary">bolt</span> +15 XP
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Wake up with 5 quick Physics concepts to jumpstart your brain.</p>
              <button className="w-full py-3 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 font-bold text-sm flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors">
                Start Session <span className="material-icons-round ml-1 text-lg">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileDailyFlow;
