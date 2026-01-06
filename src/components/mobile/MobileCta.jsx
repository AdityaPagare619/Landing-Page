import React from 'react';

const MobileCta = () => {
  return (
    <div className="relative z-10 w-full max-w-md text-center mb-8 animate-bloom" style={{ animationDelay: '0.1s' }}>
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
  );
};

export default MobileCta;
