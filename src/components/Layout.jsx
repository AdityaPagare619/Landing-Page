import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-[#F4F9F5] dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 min-h-screen overflow-x-hidden selection:bg-rankak-green selection:text-white">
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 transition-all duration-300 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-rankak-green rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">R</div>
          <span className="text-2xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-rankak-green transition-colors uppercase">Rankak</span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={toggleDarkMode}>
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">dark_mode</span>
          </button>
          <button className="hidden md:block px-6 py-2 rounded-full font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Log in</button>
          <button className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-rankak-green text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm pebble-btn border border-slate-700 dark:border-transparent">Start Practice</button>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="w-full py-8 text-center text-slate-400 text-xs relative z-10 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2023 Rankak Education. Intelligent Practice for JEE Mains.</p>
          <div className="flex gap-6">
            <a className="hover:text-rankak-green transition-colors" href="#">Privacy</a>
            <a className="hover:text-rankak-green transition-colors" href="#">Terms</a>
            <a className="hover:text-rankak-green transition-colors" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
