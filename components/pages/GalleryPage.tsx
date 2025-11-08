
import React, { useState } from 'react';
import type { GalleryImage } from '../../types';

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/id/1015/800/600", alt: "Man on a mountain" },
  { id: 2, src: "https://picsum.photos/id/1043/800/600", alt: "City street at night" },
  { id: 3, src: "https://picsum.photos/id/10/800/600", alt: "Forest path" },
  { id: 4, src: "https://picsum.photos/id/1025/800/600", alt: "Pug dog" },
  { id: 5, src: "https://picsum.photos/id/20/800/600", alt: "Abstract lights" },
  { id: 6, src: "https://picsum.photos/id/211/800/600", alt: "Architecture" },
  { id: 7, src: "https://picsum.photos/id/237/800/600", alt: "Puppy" },
  { id: 8, src: "https://picsum.photos/id/30/800/600", alt: "Coffee" },
  { id: 9, src: "https://picsum.photos/id/33/800/600", alt: "Abstract colors" },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Media Gallery</h2>
          <p className="mt-4 text-xl text-gray-400">A collection of moments and art.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Image</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src.replace('800/600', '1200/800')} // Load a larger version for modal
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
             <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
