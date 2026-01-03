import React from 'react';

const InitiationPortal = () => {
  return (
    <div className="bg-rankak-offwhite font-display text-rankak-text min-h-screen relative overflow-x-hidden selection:bg-rankak-indigo-light selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rankak-offwhite via-[#EBF5F3] to-[#E0E7FF] opacity-80"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#8DA399 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 max-w-6xl">
        <div className="text-center mb-10 space-y-6 relative">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-rankak-text leading-tight drop-shadow-sm">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">Ready</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">to</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-rankak-indigo">try?</span>
            <br className="hidden md:block" />
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">No</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">card.</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-rankak-indigo">No</span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default text-rankak-indigo">commitment.</span>
          </h1>
          <div className="relative max-w-2xl mx-auto mt-8 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-[#E8DCC4] rounded-l-lg shadow-md z-0 border-r border-stone-300"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-12 bg-[#E8DCC4] rounded-r-lg shadow-md z-0 border-l border-stone-300"></div>
            <div className="relative bg-rankak-parchment py-4 px-8 rounded-lg shadow-parchment border border-[#EBE3D0] z-10 flex items-center justify-center">
              <p className="text-lg md:text-xl font-bold text-stone-600 text-center italic">
                "Start for free. Use all features. If it works, you keep using it. If not, no one's mad."
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/50 via-indigo-100/50 to-amber-100/50 rounded-portal blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border-4 border-white/50 rounded-portal shadow-2xl overflow-hidden transform transition-transform duration-500">
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-rankak-sage-light/30 to-transparent pointer-events-none"></div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-rankak-indigo/5 rounded-full blur-2xl"></div>
              <div className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-50 text-rankak-indigo font-bold text-sm uppercase tracking-wider mb-2 border border-indigo-100">
                    <span className="material-symbols-outlined text-sm mr-1">auto_awesome</span> Initiation Portal
                  </span>
                </div>
                <form action="#" className="space-y-6" method="POST">
                  <div className="organic-input bg-rankak-input rounded-2xl p-2 border-2 border-transparent relative">
                    <label className="block text-xs font-extrabold text-gray-500 uppercase tracking-wide ml-4 mb-1" htmlFor="phone">Mobile Number</label>
                    <div className="flex items-center px-2">
                      <div className="flex items-center space-x-1 pl-2 pr-3 border-r border-gray-300 cursor-pointer hover:bg-gray-200 rounded-lg py-1 transition-colors">
                        <span className="text-2xl leading-none">🇮🇳</span>
                        <span className="font-bold text-gray-700">+91</span>
                        <span className="material-symbols-outlined text-gray-400 text-sm">expand_more</span>
                      </div>
                      <input className="block w-full border-0 bg-transparent p-3 text-lg font-bold text-rankak-text placeholder-gray-400 focus:ring-0" id="phone" name="phone" placeholder="98765 43210" type="tel" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="organic-input bg-rankak-input rounded-2xl p-2 border-2 border-transparent relative group/glyph">
                      <label className="block text-xs font-extrabold text-gray-500 uppercase tracking-wide ml-4 mb-1" htmlFor="class">Class Tier</label>
                      <div className="relative px-2">
                        <select className="block w-full border-0 bg-transparent p-3 text-lg font-bold text-rankak-text focus:ring-0 cursor-pointer appearance-none z-10 relative" id="class" name="class">
                          <option>Class 11th</option>
                          <option>Class 12th</option>
                          <option>Dropper</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-rankak-indigo transition-transform group-hover/glyph:rotate-180">
                          <span className="material-symbols-outlined">hotel_class</span>
                        </div>
                      </div>
                    </div>
                    <div className="organic-input bg-rankak-input rounded-2xl p-2 border-2 border-transparent relative group/glyph">
                      <label className="block text-xs font-extrabold text-gray-500 uppercase tracking-wide ml-4 mb-1" htmlFor="exam-date">Target Year</label>
                      <div className="relative px-2">
                        <input className="block w-full border-0 bg-transparent p-3 text-lg font-bold text-rankak-text placeholder-gray-400 focus:ring-0 z-10 relative" id="exam-date" max="2030" min="2024" name="exam-date" placeholder="2025" type="number" />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-rankak-indigo">
                          <span className="material-symbols-outlined">stars</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="group relative w-full h-20 rounded-2xl overflow-hidden bg-rankak-indigo shadow-orb hover:shadow-glow-hover transition-all duration-300 transform active:scale-95 active:shadow-inner flex items-center justify-center" type="submit">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 animate-shimmer opacity-80 group-hover:opacity-100"></div>
                      <div className="absolute top-2 right-10 w-2 h-2 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                      <div className="absolute bottom-4 left-10 w-1 h-1 bg-white rounded-full animate-ping delay-100 opacity-0 group-hover:opacity-75"></div>
                      <span className="relative z-10 flex items-center text-white text-2xl font-black tracking-wide uppercase">
                        <span className="material-symbols-outlined text-3xl mr-2 animate-bounce">bolt</span>
                        Start Learning
                      </span>
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-3 font-semibold">Press to begin your journey</p>
                  </div>
                </form>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-r from-indigo-500/20 via-teal-500/20 to-indigo-500/20"></div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rankak-sage-light rounded-full -mr-16 -mt-16 blur-2xl opacity-50"></div>
              <h3 className="text-xl font-bold text-rankak-text mb-6 flex items-center">
                <span className="material-symbols-outlined text-rankak-sage mr-2">verified_user</span>
                The Rankak Promise
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start group cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-lg font-bold">check_circle</span>
                  </div>
                  <span className="text-gray-700 font-bold group-hover:text-green-700 transition-colors">Free forever. No hidden charges.</span>
                </li>
                <li className="flex items-start group cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-lg font-bold">shield_lock</span>
                  </div>
                  <span className="text-gray-700 font-bold group-hover:text-indigo-700 transition-colors">Your data is yours. We don't sell it.</span>
                </li>
                <li className="flex items-start group cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-lg font-bold">cancel_schedule_send</span>
                  </div>
                  <span className="text-gray-700 font-bold group-hover:text-amber-700 transition-colors">Unsubscribe anytime. No penalties.</span>
                </li>
                <li className="flex items-start group cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-lg font-bold">save_as</span>
                  </div>
                  <span className="text-gray-700 font-bold group-hover:text-blue-700 transition-colors">Cancel anytime. Progress is saved.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-6 shadow-xl text-white transform hover:translate-y-[-4px] transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex -space-x-3">
                  <img alt="Student 1" className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0A16gJluxSYFfZSH3AG6Mi__TZQPUwr9s2ppp2vv7vJotRzfyuByBY5emUSMwCfymqRyensc5kZzSfBvrVcy89N0uUhDEZUkpI-bYhlW2SOyOhK7BLT1DPonVBCDNHVa9BfkSgxP1POEKmFRMxMW_jXpknocTrlRtH3Y9X5lSQq_2V8lbO4mm76YWpxmQSRbqVEF-4MnT16QUTdqpjUkFCuQpqU0zkgcPtBGRy0CrxuqQSXdb2lk3rnYZTbpK5g-dUdRxRsUlg8" />
                  <img alt="Student 2" className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb4-WBTVqE6n60UTc1Kn5VXnkbSdwa6JqorErfWJMva8HTBC69tHgBMS0-xJ2TmhkheIZlO2u5GmtuIuVDtTskfYYdBP5taYvPOglqap5DlYuk_TzkjFd5qV7UDes04n_g08dgH0wRgO_nyGsx7taT84f2XXOyxWBRtwT6DG8M9u3Q21e1EXnkUBtnuPlbkIbhqMAJ4m4UWMPTM7w-M6d9ybmbJ589FIZsWFMa5kpSQ_k7YVAx3eb8ycb4iJNq4fxIkNbimAXG2x0" />
                  <img alt="Student 3" className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7DxRHBrIQ6wQOKUPMzz9RgIXktKIlNP0yl0tNUbeB99T3EM9Fecxr7WJSRaxZb7Iqvk4NwB1OZ6RG1Opxum9zlO-9Q2YknqTUgjbZjWqM81FNN4x1n3gQUYLJ7r2NLsu3uSpT5P8hJzWfwRAuHw4Yf4qMCKeMsGmI0-qtclb3DRgGNPhKHnZsYByLY-zm7dWpFCSj9y1iPoJ9KGvQHqAAQkOcCwvJ3Jij6CYxvdbsIDyz_EDlt8BkYtbUylcJ3TokK3jDuBFomM" />
                  <div className="w-10 h-10 rounded-full border-2 border-indigo-500 bg-rankak-amber flex items-center justify-center text-white font-bold text-xs shadow-md">
                    +2k
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black">2,400+</div>
                  <div className="text-xs text-indigo-200 font-bold uppercase tracking-wider">Students Joined</div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs text-gray-400 font-medium">
                By entering the portal, you agree to our <a className="underline decoration-2 hover:text-rankak-indigo transition-colors" href="#">Terms</a> &amp; <a className="underline decoration-2 hover:text-rankak-indigo transition-colors" href="#">Privacy Scrolls</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiationPortal;
