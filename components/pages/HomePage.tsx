import React from 'react';
import type { Page } from '../../types';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80"
          alt="Nature with cinematic light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/70 to-slate-950"></div>
      </div>

      <div className="relative z-10 p-8 max-w-5xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg">
          Amanfromtheark<span className="text-cyan-400">.2</span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          A premium international stage for <strong>Shayari, Kavita, Live Poetry, Motivational Speaking, and Stand-Up Experiences</strong> by
          founder <strong>Aman Lakheshwar</strong>.
        </p>

        <div className="mt-8 bg-slate-900/70 border border-slate-700 rounded-xl p-6 text-left text-gray-200">
          <h2 className="text-2xl font-bold text-cyan-300 mb-3">Motivational Speech (Hindi)</h2>
          <p className="leading-8">
            “सफलता किसी एक दिन में नहीं आती। यह हर दिन के अनुशासन, हर हार से मिली सीख,
            और खुद पर अटूट विश्वास से बनती है। अगर दुनिया आपको कम आँकती है,
            तो उसे जवाब शब्दों से नहीं, अपने काम और अपने चरित्र से दीजिए।”
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('poetry')}
            className="bg-cyan-400 text-slate-950 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore 1000 Shayari + 1000 Kavita
          </button>
          <button
            onClick={() => navigate('booking')}
            className="bg-transparent border-2 border-cyan-400 text-cyan-300 font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 transform hover:scale-105"
          >
            Book Aman for Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
