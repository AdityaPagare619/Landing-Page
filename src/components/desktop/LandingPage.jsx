import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300 overflow-x-hidden">
      <nav className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-button">
            R
          </div>
          <span className="text-2xl font-display font-extrabold text-primary tracking-tight">RANKAK</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-text-muted-light dark:text-text-muted-dark">
          <a className="hover:text-primary transition-colors" href="#">How it works</a>
          <a className="hover:text-primary transition-colors" href="#">Success Stories</a>
          <a className="hover:text-primary transition-colors" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block font-bold text-primary hover:text-indigo-700 transition-colors">Log in</button>
          <button className="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-text-main-light dark:text-text-main-dark font-bold py-2 px-6 rounded-2xl shadow-button hover:translate-y-[2px] hover:shadow-button-hover transition-all active:translate-y-[4px] active:shadow-none">
            Get App
          </button>
        </div>
      </nav>
      <main className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 z-10 flex flex-col gap-8">
          <div className="flex flex-wrap gap-3 animate-float-slow">
            <span className="px-4 py-1.5 bg-sage/20 text-sage-800 dark:text-sage-200 rounded-full text-sm font-bold border border-sage/30 flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">verified</span> Free Forever
            </span>
            <span className="px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-sm font-bold border border-orange-200 dark:border-orange-800/50 flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">spa</span> No coaching pressure
            </span>
            <span className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-bold border border-indigo-200 dark:border-indigo-800/50 flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">timelapse</span> Your pace, your choice
            </span>
            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800/50 flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">trending_up</span> See yourself improve
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.1] text-text-main-light dark:text-white">
              You know your <span className="text-primary relative inline-block">
                timeline
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent" preserveAspectRatio="none" viewBox="0 0 100 15">
                  <path d="M0 5 Q 25 12 50 5 T 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
                </svg>
              </span>. <br />
              We adapt to it.
            </h1>
            <p className="text-lg lg:text-xl text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed max-w-xl">
              Smart practice means spending time on what actually improves your rank. Not solving 100 questions. Not watching 10 videos. <span className="text-primary font-bold">Just the 20 that matter for you.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
            <button className="w-full sm:w-auto bg-primary text-white font-display font-bold text-lg py-4 px-8 rounded-2xl shadow-[0_6px_0_0_#3730a3] hover:bg-indigo-600 hover:shadow-[0_4px_0_0_#3730a3] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none transition-all duration-150 flex items-center justify-center gap-3">
              Start Practicing
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-gray-200 dark:border-gray-600 text-text-muted-light dark:text-text-muted-dark font-display font-bold text-lg py-4 px-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/30 hover:text-primary transition-all duration-200 flex items-center justify-center gap-2 group">
              View Success Stories
              <span className="group-hover:translate-x-1 transition-transform material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="flex items-center gap-6 pt-6 text-sm font-bold text-text-muted-light dark:text-text-muted-dark">
            <div className="flex -space-x-3">
              <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnuqYPrqJs2-H3rBz5bW6cFEq4MqS3t88fdzf94YtYeXfsb8Ar0gMw7kGp--VjRZ92Z8Bi0eYsXrzBBfUidynCKFGtvxxg2XjqDlToR8M4C-ZCPal9j1xnnfUsTtgcalEpaOi4vEBn_DP-1hAGm_Zw1l3tOiJ4YEGvThhX7hUP4R0wd0kdpm9HbishNWTBzo9pjBqvZkDLJxmIuWtb3rB-W9Er1mS7xzxMIxIvVtodY_WyJPIYNUXtzZeliWRVYL-7KK27uHY9dEQ" />
              <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjdB7XyH1bpQiEtENWH8gz9bWxP5ZkRt_9SdgZhmgwA1O7sUPt85lSsWBkof0NtBULiFkXHBlux4DoeODMknPt8EfOgkQBQXIxmiYQtaCEvLwby3QAjmTwgDtc6tPBUg1oxaKGF3Q0QunKSM0JSSNDFlStfwzVhLUO7SuRuWbM74pfmmzUcLt5B9E-hlDEo3b3gRzUJsVCK5Qu1hScz2O-emetRs2FwlYeaPZCeuHh4B7iaufHb74NmdxLiMrOO9b98F3Y4IXnfw" />
              <img alt="User" className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpRowcAY6Frc4NbK9ekVBKA8Uk3a92067tfe4JRMVDT4zw-jBxCCJfEV5oN58HQDKH_LwEfzPe5E88L3wi68g-Meh71Hyq5dgfqsQeGvgFhVViBlo3y9CAdzV5ngGgCyj7qT4n_Red0mtCktYKI9H0C-mEOw8vXMG9-rutK0FuUZMTP5iao0t19JEPyLjmG-TkzjWyXHX3yPij8v_M2Y8LEhLN0LEMe8bUjihKjFbqnMh0_mUaivTaTKEY_Lgbhw0YY-YvszpLoo" />
              <div className="w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark bg-accent flex items-center justify-center text-xs text-black">
                +2k
              </div>
            </div>
            <p>Students improving today</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center perspective-1000">
          <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
          <div className="absolute top-0 right-10 w-64 h-64 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="relative z-20 w-80 h-80 flex items-center justify-center animate-float">
            <div className="w-64 h-64 rounded-full orb-gradient shadow-glow relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 orb-glow-pattern opacity-30 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="w-48 h-48 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative z-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-inner">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">smart_toy</span>
                </div>
              </div>
            </div>
            <div className="absolute -left-8 top-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 flex items-center gap-3 animate-float-delayed w-auto max-w-[160px] transform -rotate-6">
              <div className="bg-sage/20 p-2.5 rounded-xl">
                <span className="material-symbols-outlined text-sage-800 dark:text-sage-200 text-2xl">calendar_month</span>
              </div>
              <div>
                <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold uppercase">Time Left</div>
                <div className="text-sm font-display font-extrabold text-text-main-light dark:text-text-main-dark leading-tight">145 Days</div>
              </div>
            </div>
            <div className="absolute -right-6 bottom-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 flex flex-col items-center gap-1 animate-float-slow w-36 transform rotate-3">
              <div className="w-full flex justify-between items-center mb-1">
                <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold uppercase">Your Path</span>
                <span className="material-symbols-outlined text-accent text-sm">auto_awesome</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3 rounded-full"></div>
              </div>
              <div className="flex justify-between w-full mt-1">
                <span className="text-[10px] font-bold text-primary">Optics</span>
                <span className="text-[10px] font-bold text-text-muted-light">Next →</span>
              </div>
            </div>
            <div className="absolute -top-6 right-8 bg-accent text-amber-900 px-3 py-1.5 rounded-xl shadow-lg border-2 border-white/20 animate-float font-bold text-xs flex items-center gap-1 transform rotate-6 z-30">
              <span className="material-symbols-outlined text-sm">bolt</span> AI Active
            </div>
          </div>
          <div className="absolute z-0 w-full h-full pointer-events-none">
            <svg className="absolute top-1/4 left-0 w-full h-full opacity-20 dark:opacity-10" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 350 C 150 350, 150 150, 250 150 C 350 150, 350 50, 450 50" stroke="#4F46E5" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="2"></path>
              <circle className="animate-pulse" cx="250" cy="150" fill="#FCD34D" r="6"></circle>
            </svg>
          </div>
        </div>
      </main>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text-main-light dark:text-white leading-tight">
            Started late? <br className="md:hidden" /> The AI has a <span className="text-primary relative inline-block whitespace-nowrap">30-day strategy<svg className="absolute w-full h-4 -bottom-2 left-0 text-accent opacity-60" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="8" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5"></path></svg></span>.
          </h2>
          <p className="text-xl text-text-muted-light dark:text-text-muted-dark font-medium pt-2">No panic. No clutter. Just a calculated path to your best rank.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card-pop relative bg-white dark:bg-gray-800 rounded-[2.5rem] border-2 border-sage/30 border-b-[8px] p-8 h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-bl-[4rem] -mr-0.5 -mt-0.5 z-0 rounded-tr-[2.3rem]"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-sage/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-sage-800 dark:text-sage-200 border-2 border-sage/10">
                <span className="material-symbols-outlined text-4xl">spa</span>
              </div>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-sage/10 text-sage-700 dark:text-sage-300 text-xs font-bold uppercase tracking-wider mb-4 border border-sage/20">
                Timeline: 6+ Months
              </div>
              <h3 className="font-display font-extrabold text-2xl text-text-main-light dark:text-white mb-2">Fresh Start</h3>
              <p className="text-lg font-bold text-sage-700 dark:text-sage-300 mb-8 leading-snug">You have time to master concepts.</p>
              <div className="mt-auto space-y-4 bg-sage/5 dark:bg-sage/10 rounded-2xl p-5 border border-sage/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sage text-lg mt-0.5">psychology</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">AI Strategy</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Foundation Builder</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sage text-lg mt-0.5">center_focus_strong</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Focus</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Theory + Application</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-sage/20 flex items-start gap-3">
                  <span className="material-symbols-outlined text-sage text-lg mt-0.5">emoji_events</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Your Goal</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">99th Percentile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-pop relative bg-white dark:bg-gray-800 rounded-[2.5rem] border-2 border-amber-200 dark:border-amber-700/50 border-b-[8px] border-b-amber-300 dark:border-b-amber-600 p-8 h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 dark:bg-amber-900/20 rounded-bl-[4rem] -mr-0.5 -mt-0.5 z-0 rounded-tr-[2.3rem]"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-amber-600 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-700/30">
                <span className="material-symbols-outlined text-4xl">hourglass_top</span>
              </div>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-700/30">
                Timeline: 3-6 Months
              </div>
              <h3 className="font-display font-extrabold text-2xl text-text-main-light dark:text-white mb-2">Mid-Year Grind</h3>
              <p className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-8 leading-snug">You have time for the high-ROI chapters.</p>
              <div className="mt-auto space-y-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-5 border border-amber-100 dark:border-amber-800/30">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">trending_up</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">AI Strategy</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Weightage Optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">filter_center_focus</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Focus</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Scoring Areas</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-amber-200 dark:border-amber-800/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">emoji_events</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Your Goal</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Maximize Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-pop relative bg-white dark:bg-gray-800 rounded-[2.5rem] border-2 border-indigo-200 dark:border-indigo-700/50 border-b-[8px] border-b-indigo-400 dark:border-b-indigo-600 p-8 h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-bl-[4rem] -mr-0.5 -mt-0.5 z-0 rounded-tr-[2.3rem]"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary border-2 border-indigo-200 dark:border-indigo-700/30">
                <span className="material-symbols-outlined text-4xl">bolt</span>
              </div>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200 dark:border-indigo-700/30">
                Timeline: &lt; 90 Days
              </div>
              <h3 className="font-display font-extrabold text-2xl text-text-main-light dark:text-white mb-2">Final Sprint</h3>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-8 leading-snug">You have time to fix your mistakes.</p>
              <div className="mt-auto space-y-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-800/30">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-indigo-500 text-lg mt-0.5">error_outline</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">AI Strategy</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Crisis Management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-indigo-500 text-lg mt-0.5">ads_click</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Focus</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Weakness Attack</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-indigo-200 dark:border-indigo-800/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-indigo-500 text-lg mt-0.5">emoji_events</span>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">Your Goal</p>
                    <p className="font-bold text-sm text-text-main-light dark:text-white">Rank Booster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-primary rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl shadow-indigo-500/20 overflow-hidden relative border-4 border-indigo-400/30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/40 shadow-lg animate-float">
                <span className="material-symbols-outlined text-accent text-3xl">insights</span>
              </div>
              <h3 className="font-display font-bold text-xl md:text-3xl text-white leading-relaxed max-w-3xl">
                "Students joining with <span className="bg-white/10 px-3 py-1 rounded-xl border border-white/20 text-accent font-extrabold whitespace-nowrap">&lt;90 days</span> improved <span className="text-accent font-extrabold text-4xl mx-1 filter drop-shadow-md">60+</span> percentile points because we show them what actually matters now."
              </h3>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full text-center py-8 text-text-muted-light dark:text-text-muted-dark text-sm font-medium">
        <p>© 2023 Rankak. Made with <span className="text-red-500">♥</span> for future engineers.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
