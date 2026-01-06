import React from 'react';

const MobileCommunity = () => {
  return (
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
  );
};

export default MobileCommunity;
