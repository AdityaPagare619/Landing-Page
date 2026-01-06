import React from 'react';
import MobileCta from './MobileCta';
import MobileCommunity from './MobileCommunity';
import MobileDailyFlow from './MobileDailyFlow';
import MobileAscension from './MobileAscension';

const MobileLandingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body antialiased selection:bg-primary selection:text-white transition-colors duration-300">
      <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-8 sm:px-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] dark:bg-primary/20"></div>
          <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] dark:bg-accent/20"></div>
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        </div>
        <MobileCta />
        <MobileCommunity />
        <MobileDailyFlow />
        <MobileAscension />
      </main>
    </div>
  );
};

export default MobileLandingPage;
