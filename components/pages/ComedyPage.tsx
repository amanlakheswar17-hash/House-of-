
import React from 'react';
import type { ComedyVideo } from '../../types';

const comedyVideos: ComedyVideo[] = [
  { id: 1, title: "Cheating | Stand-Up Comedy", artist: "Anubhav Singh Bassi", embedUrl: "https://www.youtube.com/embed/qkxuFKqJXWY" },
  { id: 2, title: "Haq Se Single", artist: "Zakir Khan", embedUrl: "https://www.youtube.com/embed/e_6M_NTs_S8" },
  { id: 3, title: "Middle Class & Dreams", artist: "Abhishek Upmanyu", embedUrl: "https://www.youtube.com/embed/J2gBfOH50a4" },
  { id: 4, title: "Being A Pilot", artist: "Biswa Kalyan Rath", embedUrl: "https://www.youtube.com/embed/Tqsz6fjvhZM" },
];

const ComedyPage: React.FC = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Stand-up Comedy</h2>
          <p className="mt-4 text-xl text-gray-400">Get ready to laugh out loud!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {comedyVideos.map((video) => (
            <div key={video.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400">{video.title}</h3>
                <p className="text-gray-400 mt-1">{video.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComedyPage;
