import React from 'react';

const Timeline = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 z-10 flex flex-col gap-8">
        <div className="flex flex-wrap gap-3 animate-float-slow">
          <span className="px-4 py-1.5 bg-gray-200/50 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-bold border border-gray-300/50 flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">verified</span> Free Forever
          </span>
          <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-sm font-bold border border-orange-200 dark:border-orange-800/50 flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">spa</span> No coaching pressure
          </span>
          <span className="hidden sm:flex px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-bold border border-indigo-200 dark:border-indigo-800/50 items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">timelapse</span> Your pace, your choice
          </span>
          <span className="hidden sm:flex px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800/50 items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-lg">trending_up</span> See yourself improve
          </span>
        </div>
        <div className="space-y-6">
          <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.1] text-text-main-light dark:text-white">
            You know your <span className="text-primary relative inline-block">
              timeline.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent" preserveAspectRatio="none" viewBox="0 0 100 15">
                <path d="M0 5 Q 25 12 50 5 T 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
              </svg>
            </span> <br />
            We adapt to it.
          </h1>
          <p className="text-lg lg:text-xl text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed max-w-xl">
            Smart practice means spending time on what actually improves your rank. Not solving 100 questions. Not watching 10 videos. <span className="text-primary font-bold">Just the 20 that matter for you.</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
          <button className="w-full sm:w-auto bg-primary text-white font-display font-bold text-lg py-4 px-8 rounded-full shadow-[0_6px_0_0_#3730a3] hover:bg-indigo-600 hover:shadow-[0_4px_0_0_#3730a3] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none transition-all duration-150 flex items-center justify-center gap-3">
            Start Practicing
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-gray-200 dark:border-gray-600 text-text-muted-light dark:text-text-muted-dark font-display font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/30 hover:text-primary transition-all duration-200 flex items-center justify-center gap-2 group">
            View Success Stories
            <span className="group-hover:translate-x-1 transition-transform material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
        <div className="flex items-center gap-6 pt-6 text-sm font-bold text-text-muted-light dark:text-text-muted-dark">
          <div className="flex -space-x-3">
            <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnuqYPrqJs2-H3rBz5bW6cFEq4MqS3t88fdzf94YtYeXfsb8Ar0gMw7kGp--VjRZ92Z8Bi0eYsXrzBBfUidynCKFGtvxxg2XjqDlToR8M4C-ZCPal9j1xnnfUsTtgcalEpaOi4vEBn_DP-1hAGm_Zw1l3tOiJ4YEGvThhX7hUP4R0wd0kdpm9HbishNWTBzo9pjBqvZkDLJxmIuWtb3rB-W9Er1mS7xzxMIxIvVtodY_WyJPIYNUXtzZeliWRVYL-7KK27uHY9dEQ" />
            <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjdB7XyH1bpQiEtENWH8gz9bWxP5ZkRt_9SdgZhmgwA1O7sUPt85lSsWBkof0NtBULiFkXHBlux4DoeODMknPt8EfOgkQBQXIxmiYQtaCEvLwby3QAjmTwgDtc6tPBUg1oxaKGF3Q0QunKSM0JSSNDFlStfwzVhLUO7SuRuWbM74pfmmzUcLt5B9E-hlDEo3b3gRzUJsVCK5Qu1hScz2O-emetRs2FwlYeaPZCeuHh4B7iaufHb74NmdxLiMrOO9b98F3Y4IXnfw" />
            <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpRowcAY6Frc4NbK9ekVBKA8Uk3a92067tfe4JRMVDT4zw-jBxCCJfEV5oN58HQDKH_LwEfzPe5E88L3wi68g-Meh71Hyq5dgfqsQeGvgFhVViBlo3y9CAdzV5ngGgCyj7qT4n_Red0mtCktYKI9H0C-mEOw8vXMG9-rutK0FuUZMTP5iao0t19JEPyLjmG-TkzjWyXHX3yPij8v_M2Y8LEhLN0LEMe8bUjihKjFbqnMh0_mUaivTaTKEY_Lgbhw0YY-YvszpLoo" />
            <div className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark bg-accent flex items-center justify-center text-xs text-black font-bold">
              +2k
            </div>
          </div>
          <p>Students improving today</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center perspective-1000">
        <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full opacity-30 dark:opacity-20" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150 400 C 50 350, 50 150, 200 150 C 350 150, 350 50, 400 50" stroke="#818CF8" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="2"></path>
          </svg>
        </div>
        <div className="relative z-20 w-[22rem] h-[22rem] flex items-center justify-center animate-float">
          <div className="w-[18rem] h-[18rem] rounded-full orb-gradient shadow-orb relative overflow-hidden flex items-center justify-center z-10 border border-white/10 ring-1 ring-white/20">
            <div className="absolute inset-0 orb-glow-pattern opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20"></div>
            <div className="w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-pulse absolute top-1/4 left-1/4"></div>
            <div className="relative z-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center shadow-inner border border-white/10">
                <span className="material-symbols-outlined text-white text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">smart_toy</span>
              </div>
              <div className="absolute top-4 right-6 w-4 h-4 bg-white/40 rounded-full blur-[1px]"></div>
            </div>
          </div>
          <div className="absolute -left-12 top-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 flex items-center gap-3 animate-card-left w-auto min-w-[150px] z-20">
            <div className="bg-gray-100 dark:bg-gray-700 p-2.5 rounded-xl">
              <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">calendar_month</span>
            </div>
            <div>
              <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold uppercase tracking-wider">Time Left</div>
              <div className="text-base font-display font-extrabold text-text-main-light dark:text-text-main-dark leading-tight">145 Days</div>
            </div>
          </div>
          <div className="absolute -right-12 bottom-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 flex flex-col items-center gap-2 animate-card-right w-48 z-20">
            <div className="w-full flex justify-between items-center mb-1">
              <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold uppercase tracking-wider">Your Path</span>
              <span className="material-symbols-outlined text-accent text-sm">auto_awesome</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-2/3 rounded-full"></div>
              <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10"></div>
            </div>
            <div className="flex justify-between w-full mt-2 items-center">
              <span className="text-[11px] font-bold text-primary bg-indigo-50 px-2 py-0.5 rounded-md">Optics</span>
              <span className="text-[10px] font-bold text-text-muted-light flex items-center">Next <span className="material-symbols-outlined text-[10px] ml-0.5">arrow_forward</span></span>
            </div>
          </div>
          <div className="absolute -top-10 right-0 bg-accent text-amber-900 px-4 py-1.5 rounded-full shadow-lg border-2 border-white/30 animate-float-delayed font-bold text-xs flex items-center gap-1 z-30 transform rotate-6">
            <span className="material-symbols-outlined text-sm">bolt</span> AI Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
