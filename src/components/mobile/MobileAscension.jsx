import React from 'react';

const MobileAscension = () => {
  return (
    <main className="relative z-10 w-full max-w-md h-full min-h-screen flex flex-col justify-between p-6 animate-portal-enter">
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary-800 dark:text-secondary-200 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          <span className="material-icons-round text-sm mr-1">auto_awesome</span>
          Ascension Complete
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
          <span className="gradient-text">You've Leveled Up!</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-[90%]">
          Your journey through the logic core has fortified your foundations. The cosmos awaits.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center my-6 relative">
        <div className="absolute w-64 h-64 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-glow z-0"></div>
        <div className="relative w-64 h-64 z-10 animate-float">
          {/* Lottie player will go here */}
        </div>
        <div className="w-full mt-8 glass-panel rounded-2xl p-5 shadow-lg transform transition-transform active:scale-[0.98]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Efficiency Boost</span>
            <span className="flex items-center text-accent-yellow font-bold text-sm">
              <span className="material-icons-round text-sm mr-1">bolt</span>
              High Voltage
            </span>
          </div>
          <div className="flex items-end space-x-2">
            <span className="text-5xl font-black text-gray-900 dark:text-white">40<span className="text-3xl">%</span></span>
            <span className="text-sm text-gray-600 dark:text-gray-300 pb-2 font-medium">Faster Improvement</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileAscension;
