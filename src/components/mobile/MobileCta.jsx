import React from 'react';

const MobileCta = () => {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-8 sm:px-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] dark:bg-primary/20"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] dark:bg-accent/20"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
      </div>
      <div className="relative z-10 w-full max-w-md text-center mb-8 animate-bloom" style={{ animationDelay: "0.1s" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-bold tracking-wide uppercase border border-orange-200 dark:border-orange-800">
          <span className="material-icons-round text-sm">bolt</span>
          Initiation Portal
        </div>
        <h1 className="text-4xl font-display font-bold leading-tight mb-3">
          Ready to <span className="gradient-text">try?</span><br />
          No card. No commitment.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[90%] mx-auto">
          "Start for free. Use all features. If it works, you keep using it. If not, no one's mad."
        </p>
      </div>
      <div className="relative z-20 w-full max-w-md bg-white dark:bg-card-dark rounded-3xl shadow-soft dark:shadow-none dark:border dark:border-white/10 p-6 sm:p-8 animate-bloom" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-indigo-100 dark:border-indigo-800/50">
            <span className="material-icons-round text-sm animate-pulse">auto_awesome</span>
            INTIATION PORTAL
          </div>
        </div>
        <form className="space-y-5">
          <div className="group relative">
            <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 ml-1">Mobile Number</label>
            <div className="relative flex items-center bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300 h-16 overflow-hidden">
              <div className="flex items-center justify-center w-16 h-full border-r border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <span className="text-xl">🇮🇳</span>
                <span className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-200">+91</span>
              </div>
              <input className="w-full h-full bg-transparent border-none focus:ring-0 text-lg font-display font-medium text-gray-800 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 px-4" placeholder="98765 43210" type="tel" />
              <div className="absolute right-4 text-green-500 opacity-0 group-focus-within:opacity-100 transition-opacity">
                <span className="material-icons-round">check_circle</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 ml-1">Class Tier</label>
              <div className="relative flex items-center justify-between bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 h-16 px-4 cursor-pointer hover:border-primary/50 transition-colors">
                <span className="font-display font-medium text-gray-800 dark:text-white">Class 11th</span>
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                  <span className="material-icons-round text-sm">school</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 ml-1">Target Year</label>
              <div className="relative flex items-center justify-between bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 h-16 px-4 cursor-pointer hover:border-primary/50 transition-colors">
                <span className="font-display font-medium text-gray-800 dark:text-white">2025</span>
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="material-icons-round text-sm">star</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <button className="group relative w-full h-16 bg-primary hover:bg-indigo-600 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 active:scale-95" type="button">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="material-icons-round text-white text-2xl animate-pulse">flash_on</span>
              <span className="font-display font-bold text-lg text-white tracking-wide uppercase">Start Learning</span>
              <div className="absolute right-[-10px] top-[-10px] w-8 h-8 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
            </button>
            <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-3 font-medium">Press to begin your journey</p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MobileCta;
