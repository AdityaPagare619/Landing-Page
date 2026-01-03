import React from 'react';

const AscensionComplete = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grove-gradient z-10"></div>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-rqClTL6g-zdumKvXC7twG92BTxVNtVFCcXnNhX1hGecNNYQGm7UOuuMps4Eurwtonksb2bGc9usAf6aFGHkuAjS690osk_qGUyVXX9QK2ew6fugKsrosBFHrwl0zhcS3i6POI1GmkhRXv0a_ub2mnn5qRxrA1IvDE-FdLV0Yb-B7hcOKL25IkBbpRApV-7dTFS1MBrA-1v02sVKKDJ_UYezX0JW9sSn6pQxnxDXJWUfuefiFCLWbAnIa1YL64NpZhd8m_BCbQLA")' }}>
        </div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber/60 blur-[1px] animate-float z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/50 blur-[1px] animate-float-delayed z-0"></div>
      <div className="absolute top-20 right-20 w-1 h-1 rounded-full bg-sage-light/80 animate-pulse z-0"></div>
      <div className="relative z-20 w-full max-w-4xl px-4 flex flex-col items-center gap-8 py-10">
        <div className="relative w-full flex justify-center items-center -mb-16 z-30 animate-float">
          <div className="absolute w-80 h-80 bg-black/40 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img alt="Cute 3D wise owl character wearing glasses holding a glowing indigo book" className="w-full h-full object-contain drop-shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRohvuClqjZZ-RXqzfqTCNqtQj6UhXeZ5YiCUIbwqOHLN81c6UBxQfPhyBm7H3131-vSdEANO9w_f2b1PwKtQ0mHNHDTliDGfu5JTTetrVfPJ8M1qBYczSDX0Q5KKLOkxdItnMi4SHMn8Dyy-FzheWhG1IDLaVU-9uRFvrFFIJTb5ZuMCZ26Dat6oXlzjdtfLty7RmWQg4S0Jm1ag-VZdZyazRnDqwZ380mTonQVySAny9vuLa9L-DuvddcWUyq0ggfH7ZGKlnRBY" />
            <div className="absolute right-4 top-16 bg-[#3d2e10]/80 backdrop-blur-md border border-amber/30 w-10 h-10 flex items-center justify-center rounded-full animate-bounce z-20 shadow-lg" style={{ animationDuration: '3s' }}>
              <span className="material-symbols-outlined text-amber text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
            </div>
            <div className="absolute left-6 bottom-24 bg-[#1a1433]/80 backdrop-blur-md border border-primary/40 w-10 h-10 flex items-center justify-center rounded-full animate-bounce z-20 shadow-lg" style={{ animationDuration: '4s' }}>
              <span className="material-symbols-outlined text-primary-light text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
          </div>
        </div>
        <div className="glass-panel w-full rounded-[3rem] px-6 pt-20 pb-10 md:px-16 md:pt-24 md:pb-12 text-center flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl bg-[#151022]/40">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white glow-text mb-2 drop-shadow-lg leading-tight">
            Your Journey Begins!
          </h1>
          <div className="flex items-start gap-3 max-w-2xl mx-auto opacity-90 mt-2">
            <span className="material-symbols-outlined text-sage-light text-3xl font-bold opacity-60">format_quote</span>
            <p className="text-lg md:text-xl text-off-white/90 font-medium leading-relaxed tracking-wide pt-1">
              Thank you for joining the Rankak fellowship! Your quest for JEE mastery begins soon.
            </p>
            <span className="material-symbols-outlined text-sage-light text-3xl font-bold opacity-60 transform rotate-180">format_quote</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-2 relative z-10">
          <div className="group flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-white/5 w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg transition-transform hover:scale-105">
            <span className="text-3xl md:text-4xl font-bold text-amber drop-shadow-md">28</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sage-light font-bold mt-1">Days</span>
          </div>
          <div className="group flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-white/5 w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg transition-transform hover:scale-105">
            <span className="text-3xl md:text-4xl font-bold text-amber drop-shadow-md">14</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sage-light font-bold mt-1">Hrs</span>
          </div>
          <div className="group flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-white/5 w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg transition-transform hover:scale-105">
            <span className="text-3xl md:text-4xl font-bold text-amber drop-shadow-md">30</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sage-light font-bold mt-1">Min</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-8 w-full max-w-xl justify-center">
          <button className="group relative flex flex-col md:flex-row items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2a3036]/80 hover:bg-[#343b42] border border-white/10 text-white transition-all duration-300 w-full md:w-48 shadow-lg hover:shadow-xl">
            <span className="material-symbols-outlined text-2xl group-hover:-translate-y-0.5 transition-transform text-white/90">home</span>
            <div className="flex flex-col items-center md:items-start leading-tight">
              <span className="font-bold tracking-wide text-base">Return</span>
              <span className="font-bold tracking-wide text-base">Home</span>
            </div>
          </button>
          <button className="group relative flex flex-col md:flex-row items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#e0a23d] hover:bg-[#ebae4d] text-[#3d2e10] transition-all duration-300 w-full md:w-auto shadow-glow-amber hover:shadow-[0_0_25px_rgba(245,186,88,0.7)] hover:scale-105 min-w-[280px]">
            <span className="material-symbols-outlined text-2xl font-bold group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>notifications_active</span>
            <div className="flex flex-col items-center md:items-start leading-tight">
              <span className="font-bold tracking-wide text-base">Notify Me When</span>
              <span className="font-bold tracking-wide text-base">Launched</span>
            </div>
            <div className="absolute top-3 right-5 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse"></div>
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
          <div className="flex items-center gap-3 text-sm text-sage-light/90 font-medium tracking-wide">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#2a3630] border border-[#4a6b56] text-sage-light">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
            </div>
            <span>Secure Submission</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-sage-light/90 font-medium tracking-wide">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1e1836] border border-[#43358c] text-primary-light">
              <span className="material-symbols-outlined text-[16px]">diamond</span>
            </div>
            <span>Early Access Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AscensionComplete;
