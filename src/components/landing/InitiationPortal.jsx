import React from 'react';

const InitiationPortal = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16 max-w-7xl">
      <div className="text-center mb-16 space-y-8 relative animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-rankak-text leading-[1.1] drop-shadow-sm">
          <div className="inline-block relative">
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-gray-800">Ready</span>
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-gray-800 mx-2">to</span>
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-rankak-indigo relative">
              try?
              <span className="absolute -top-6 -right-6 text-3xl opacity-50 animate-bounce text-rankak-amber">?</span>
            </span>
          </div>
          <br className="hidden md:block" />
          <div className="inline-block mt-2">
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-gray-800">No</span>
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-gray-800">card.</span>
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-rankak-indigo ml-2">No</span>
            <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default text-rankak-indigo">commitment.</span>
          </div>
        </h1>
        <div className="relative max-w-3xl mx-auto mt-10 transform hover:scale-[1.02] transition-transform duration-500 animate-unfurl origin-top">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-24 bg-[#E0D0B0] rounded-l-md shadow-sm z-0 border-r border-[#D4C4A5]"></div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-24 bg-[#E0D0B0] rounded-r-md shadow-sm z-0 border-l border-[#D4C4A5]"></div>
          <div className="relative bg-rankak-parchment py-6 px-12 rounded-lg shadow-parchment border border-[#EBE3D0] z-10 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-bold text-stone-600 text-center italic font-serif leading-relaxed">
              "Start for free. Use all features. If it works, you keep using it.<br className="hidden sm:block" /> If not, no one's mad."
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7 relative group perspective-1000 animate-portal-open" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-6 bg-gradient-to-tr from-teal-200/40 via-indigo-200/40 to-amber-100/40 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
          <div className="relative glass-portal border-[6px] border-white rounded-[3.5rem] shadow-portal overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/80 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="p-8 md:p-14 relative z-10">
              <div className="text-center mb-10">
                <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-indigo-50/80 backdrop-blur-sm text-rankak-indigo font-black text-sm uppercase tracking-widest mb-2 border border-indigo-100 shadow-sm hover:bg-indigo-100 transition-colors cursor-default">
                  <span className="material-symbols-outlined text-base mr-2 animate-pulse">auto_awesome</span>
                  Initiation Portal
                </span>
              </div>
              <form action="#" className="space-y-8" method="POST">
                <div className="organic-input-wrapper bg-rankak-input rounded-3xl p-3 border-2 border-transparent relative group/input">
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest ml-5 mb-1.5 transition-colors group-focus-within/input:text-rankak-indigo">
                    Mobile Number
                  </label>
                  <div className="flex items-center px-1">
                    <div className="flex items-center space-x-2 pl-4 pr-4 border-r-2 border-gray-200/80 cursor-pointer hover:bg-gray-200/50 rounded-xl py-2 transition-colors mr-2">
                      <img alt="India" className="rounded-sm shadow-sm" height="16" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5gIvqhh-MOqsSMwUBxafU9LZnJ1ajzd8TAN_hshQIA15pgKEN_WeZOn8yb3dDAlVbmNdWZ479JMVudn6DuzI7YO-h1EZXZ1hwbfMs2oQ65hRCJR0mFJUS46-xVgDTQWAViF51A_TXhAL4ogifWKXdzp3iVmlUEwV5yVguamUuM8aUVImnwlWgmsQjlpJiVjkoazfqFN0TmXunuEtKlIfW8k-vcJUOjz0W3ih0CBHp4OWYzVTfsFO0kxsP4zYEUUYSs4fpnJXiKzQ" srcSet="https://flagcdn.com/w80/in.png 2x" width="24" />
                      <span className="font-bold text-gray-700 font-display">+91</span>
                      <span className="material-symbols-outlined text-gray-400 text-sm transform transition-transform group-hover:rotate-180">expand_more</span>
                    </div>
                    <input className="block w-full border-0 bg-transparent p-2 text-xl font-bold text-rankak-text placeholder-gray-300 focus:ring-0 font-display tracking-wide" id="phone" name="phone" placeholder="98765 43210" type="tel" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="organic-input-wrapper bg-rankak-input rounded-3xl p-3 border-2 border-transparent relative group/glyph cursor-pointer">
                    <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest ml-5 mb-1.5 transition-colors group-focus-within/glyph:text-rankak-indigo">Class Tier</label>
                    <div className="relative px-2">
                      <select className="block w-full border-0 bg-transparent p-3 text-lg font-bold text-rankak-text focus:ring-0 cursor-pointer appearance-none z-10 relative pr-10" id="class" name="class">
                        <option>Class 11th</option>
                        <option>Class 12th</option>
                        <option>Dropper</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-rankak-indigo transition-transform duration-300 group-hover/glyph:scale-110 group-hover/glyph:-rotate-12 bg-indigo-100 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">school</span>
                      </div>
                    </div>
                  </div>
                  <div className="organic-input-wrapper bg-rankak-input rounded-3xl p-3 border-2 border-transparent relative group/glyph cursor-pointer">
                    <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest ml-5 mb-1.5 transition-colors group-focus-within/glyph:text-rankak-indigo">Target Year</label>
                    <div className="relative px-2">
                      <input className="block w-full border-0 bg-transparent p-3 text-lg font-bold text-rankak-text placeholder-gray-300 focus:ring-0 z-10 relative" id="exam-date" max="2030" min="2024" name="exam-date" placeholder="2025" type="number" value="2025" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white transition-transform duration-300 group-hover/glyph:scale-110 group-hover/glyph:rotate-180 bg-rankak-indigo rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-sm">star</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 relative">
                  <button className="group relative w-full h-24 rounded-2xl overflow-hidden bg-rankak-indigo shadow-orb hover:shadow-glow-hover transition-all duration-300 transform active:scale-[0.98] active:shadow-inner flex items-center justify-center isolate" type="submit">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-[#564ee3] to-indigo-600 animate-shimmer opacity-100 group-hover:brightness-110"></div>
                    <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-75 duration-700"></div>
                    <div className="absolute bottom-6 left-16 w-1 h-1 bg-white rounded-full animate-ping delay-100 opacity-0 group-hover:opacity-60 duration-1000"></div>
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                    <span className="relative z-10 flex items-center text-white text-3xl font-black tracking-widest uppercase drop-shadow-md">
                      <span className="material-symbols-outlined text-4xl mr-3 animate-pulse">bolt</span>
                      Start Learning
                    </span>
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 font-bold tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Press to begin your journey</p>
                </div>
              </form>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-indigo-400/30 blur-sm"></div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-8 lg:pl-4 lg:pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-white shadow-xl relative overflow-hidden group hover:bg-white/90 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-60"></div>
            <h3 className="text-xl font-bold text-rankak-text mb-8 flex items-center relative z-10">
              <span className="material-symbols-outlined text-gray-400 mr-3 text-2xl">verified_user</span>
              The Rankak Promise
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start group/item cursor-default">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 group-hover/item:scale-110 group-hover/item:bg-green-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                </div>
                <span className="text-gray-700 font-bold text-lg group-hover/item:text-green-700 transition-colors pt-0.5">Free forever. No hidden charges.</span>
              </li>
              <li className="flex items-start group/item cursor-default">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 group-hover/item:scale-110 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] font-bold">lock</span>
                </div>
                <span className="text-gray-700 font-bold text-lg group-hover/item:text-indigo-700 transition-colors pt-0.5">Your data is yours. We don't sell it.</span>
              </li>
              <li className="flex items-start group/item cursor-default">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-4 group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] font-bold">unsubscribe</span>
                </div>
                <span className="text-gray-700 font-bold text-lg group-hover/item:text-amber-700 transition-colors pt-0.5">Unsubscribe anytime. No penalties.</span>
              </li>
              <li className="flex items-start group/item cursor-default">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 group-hover/item:scale-110 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] font-bold">save_as</span>
                </div>
                <span className="text-gray-700 font-bold text-lg group-hover/item:text-blue-700 transition-colors pt-0.5">Cancel anytime. Progress is saved.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-rankak-indigo to-[#5a52d6] rounded-[2.5rem] p-6 px-8 shadow-2xl text-white transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group shadow-glow">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex -space-x-3 items-center">
                <img alt="Student 1" className="w-12 h-12 rounded-full border-2 border-indigo-300 shadow-md object-cover transform hover:scale-110 hover:z-20 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0A16gJluxSYFfZSH3AG6Mi__TZQPUwr9s2ppp2vv7vJotRzfyuByBY5emUSMwCfymqRyensc5kZzSfBvrVcy89N0uUhDEZUkpI-bYhlW2SOyOhK7BLT1DPonVBCDNHVa9BfkSgxP1POEKmFRMxMW_jXpknocTrlRtH3Y9X5lSQq_2V8lbO4mm76YWpxmQSRbqVEF-4MnT16QUTdqpjUkFCuQpqU0zkgcPtBGRy0CrxuqQSXdb2lk3rnYZTbpK5g-dUdRxRsUlg8" />
                <img alt="Student 2" className="w-12 h-12 rounded-full border-2 border-indigo-300 shadow-md object-cover transform hover:scale-110 hover:z-20 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb4-WBTVqE6n60UTc1Kn5VXnkbSdwa6JqorErfWJMva8HTBC69tHgBMS0-xJ2TmhkheIZlO2u5GmtuIuVDtTskfYYdBP5taYvPOglqap5DlYuk_TzkjFd5qV7UDes04n_g08dgH0wRgO_nyGsx7taT84f2XXOyxWBRtwT6DG8M9u3Q21e1EXnkUBtnuPlbkIbhqMAJ4m4UWMPTM7w-M6d9ybmbJ589FIZsWFMa5kpSQ_k7YVAx3eb8ycb4iJNq4fxIkNbimAXG2x0" />
                <img alt="Student 3" className="w-12 h-12 rounded-full border-2 border-indigo-300 shadow-md object-cover transform hover:scale-110 hover:z-20 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7DxRHBrIQ6wQOKUPMzz9RgIXktKIlNP0yl0tNUbeB99T3EM9Fecxr7WJSRaxZb7Iqvk4NwB1OZ6RG1Opxum9zlO-9Q2YknqTUgjbZjWqM81FNN4x1n3gQUYLJ7r2NLsu3uSpT5P8hJzWfwRAuHw4Yf4qMCKeMsGmI0-qtclb3DRgGNPhKHnZsYByLY-zm7dWpFCSj9y1iPoJ9KGvQHqAAQkOcCwvJ3Jij6CYxvdbsIDyz_EDlt8BkYtbUylcJ3TokK3jDuBFomM" />
                <div className="w-12 h-12 rounded-full border-2 border-indigo-300 bg-rankak-amber flex items-center justify-center text-white font-bold text-xs shadow-md z-10 animate-bounce relative">
                  +2k
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full blur-[2px]"></div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black tracking-tight leading-none mb-1">2,400+</div>
                <div className="text-[10px] text-indigo-100 font-bold uppercase tracking-widest opacity-80">Students Joined</div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left px-2">
            <p className="text-xs text-gray-400 font-medium leading-relaxed">
              By entering the portal, you agree to our <a className="underline decoration-1 underline-offset-2 hover:text-rankak-indigo transition-colors" href="#">Terms</a> &amp; <a className="underline decoration-1 underline-offset-2 hover:text-rankak-indigo transition-colors" href="#">Privacy Scrolls</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiationPortal;
