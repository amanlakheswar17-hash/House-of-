import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-2 text-center text-gray-300">
        <p className="font-semibold">Founder: Aman Lakheshwar</p>
        <p>
          Instagram: <a className="text-cyan-400 hover:text-cyan-300" href="https://instagram.com/amanlakheshwar" target="_blank" rel="noreferrer">@amanlakheshwar</a>
        </p>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Amanfromtheark.2 • International Poetry & Performance Platform</p>
      </div>
    </footer>
  );
};

export default Footer;
