import React from 'react';
import type { GalleryImage } from '../../types';

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80', alt: 'Forest nature in HD' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80', alt: 'Sea and sky in sunset' },
  { id: 3, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80', alt: 'Mountains and clouds' },
];

const GalleryPage: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Founder & Media</h2>
          <p className="mt-4 text-xl text-gray-300">Professional profile, signature area, Instagram presence, and nature visuals.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <article className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Aman Lakheshwar (Founder)</h3>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Founder portrait placeholder"
              className="w-full h-80 object-cover rounded-lg"
            />
            <p className="mt-4 text-gray-200">
              This section is ready for your personal DP photo. Share your image file and I can replace this placeholder immediately.
            </p>
            <div className="mt-5 border-t border-slate-700 pt-4">
              <p className="text-gray-400 text-sm">Signature</p>
              <p className="text-2xl text-white italic">Aman Lakheshwar</p>
            </div>
          </article>

          <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-cyan-300">Instagram & Song Block</h3>
            <p className="text-gray-200">
              Official Instagram: <a href="https://instagram.com/amanlakheshwar" target="_blank" rel="noreferrer" className="text-cyan-400">@amanlakheshwar</a>
            </p>
            <div className="rounded-lg border border-slate-700 p-4 text-gray-300">
              <p className="font-semibold text-white">Song Slot (ready)</p>
              <p>Add your audio link/file to feature your signature background track here.</p>
            </div>
            <div className="rounded-lg border border-slate-700 p-4 text-gray-300">
              <p className="font-semibold text-white">Sad Emotion Spotlight Shayari</p>
              <p className="italic">“वो पास होकर भी दूर रहा,
                मैं टूटकर भी मशहूर रहा।”</p>
            </div>
          </article>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Nature Image Gallery (Full HD style)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <img key={image.id} src={image.src} alt={image.alt} className="w-full h-72 object-cover rounded-xl border border-slate-800" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
