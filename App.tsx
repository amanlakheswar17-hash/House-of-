
import React, { useState } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ShayariPage from './components/pages/ShayariPage';
import GalleryPage from './components/pages/GalleryPage';
import ComedyPage from './components/pages/ComedyPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'shayari':
        return <ShayariPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'comedy':
        return <ComedyPage />;
      case 'home':
      default:
        return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans antialiased">
      <Header currentPage={currentPage} navigate={setCurrentPage} />
      <main className="pt-16 sm:pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
