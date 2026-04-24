import React, { useState } from 'react';
import type { Page } from '../types';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, navigate, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        navigate(page);
        if (onClick) onClick();
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-cyan-400 text-slate-950'
          : 'text-gray-200 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-950/85 backdrop-blur-md fixed w-full top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigate('home')} className="text-xl sm:text-2xl font-bold text-white transition-transform hover:scale-105">
              Amanfromtheark<span className="text-cyan-400">.2</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink page="home" currentPage={currentPage} navigate={navigate}>Home</NavLink>
              <NavLink page="poetry" currentPage={currentPage} navigate={navigate}>1000 Shayari + 1000 Kavita</NavLink>
              <NavLink page="booking" currentPage={currentPage} navigate={navigate}>Book Shows</NavLink>
              <NavLink page="media" currentPage={currentPage} navigate={navigate}>Founder & Media</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page="home" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink page="poetry" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Poetry</NavLink>
            <NavLink page="booking" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Book Shows</NavLink>
            <NavLink page="media" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Founder</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
