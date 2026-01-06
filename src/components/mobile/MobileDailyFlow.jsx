import React from 'react';

const MobileDailyFlow = () => {
  return (
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
  );
};

export default MobileDailyFlow;
