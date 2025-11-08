
import React from 'react';
import type { Page } from '../../types';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="relative h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/122/1920/1080"
          alt="Stage background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 p-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          House of <span className="text-amber-400">काला</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          आपकी हँसी का स्थायी पता। शायरी, कॉमेडी और कला का एक अनूठा संगम।
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('shayari')}
            className="bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            शायरी की दुनिया
          </button>
          <button
            onClick={() => navigate('comedy')}
            className="bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            कॉमेडी नाइट्स
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
