import React from 'react';
import type { ServicePackage } from '../../types';

const packages: ServicePackage[] = [
  {
    id: 1,
    title: 'Stand-Up Fort (Starter)',
    price: '₹25,000',
    duration: '45 mins',
    highlights: ['Live stand-up set', 'Audience interaction', 'Host introduction script'],
  },
  {
    id: 2,
    title: 'Poetry & Motivation Pro',
    price: '₹55,000',
    duration: '75 mins',
    highlights: ['Signature Shayari performance', 'Hindi motivational speech', 'Meet & greet (15 mins)'],
  },
  {
    id: 3,
    title: 'International Grand Experience',
    price: '₹1,25,000',
    duration: '120 mins',
    highlights: ['Custom theme show', 'Premium stage concept support', 'Brand collaboration / shoutouts'],
  },
];

const ComedyPage: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Book Aman Lakheshwar</h2>
          <p className="mt-4 text-xl text-gray-300">Stand-Up • Poetry • Corporate Motivation • Campus Shows • Private Events</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <article key={pkg.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-300">{pkg.title}</h3>
              <p className="text-3xl font-black text-white mt-2">{pkg.price}</p>
              <p className="text-gray-400">Duration: {pkg.duration}</p>
              <ul className="mt-5 space-y-2 text-gray-200 list-disc list-inside">
                {pkg.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg hover:bg-cyan-300 transition">
                Request Booking
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6 text-gray-200 leading-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">Facilities & Delivery Standards</h3>
          <p>
            Full-HD visual support, professional audio brief, event coordination deck, performance customization,
            and post-event media clips support are included as per selected package. International virtual appearances
            are available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComedyPage;
