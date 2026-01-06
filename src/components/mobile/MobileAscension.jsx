import React from 'react';

const MobileAscension = () => {
  return (
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
  );
};

export default MobileAscension;
