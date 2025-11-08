
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
          ? 'bg-amber-400 text-gray-900'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigate('home')} className="text-2xl font-bold text-white transition-transform hover:scale-105">
              House of <span className="text-amber-400">काला</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink page="home" currentPage={currentPage} navigate={navigate}>Home</NavLink>
              <NavLink page="shayari" currentPage={currentPage} navigate={navigate}>Shayari</NavLink>
              <NavLink page="gallery" currentPage={currentPage} navigate={navigate}>Gallery</NavLink>
              <NavLink page="comedy" currentPage={currentPage} navigate={navigate}>Comedy</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page="home" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink page="shayari" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Shayari</NavLink>
            <NavLink page="gallery" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
            <NavLink page="comedy" currentPage={currentPage} navigate={navigate} onClick={() => setIsMenuOpen(false)}>Comedy</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
