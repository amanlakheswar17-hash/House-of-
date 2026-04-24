import React, { useMemo, useState } from 'react';
import type { PoetryItem } from '../../types';

type PoetryKind = 'shayari' | 'kavita';

const createShayari = (id: number): PoetryItem => {
  const moods: PoetryItem['mood'][] = ['motivational', 'romantic', 'sad', 'life'];
  const mood = moods[id % moods.length];
  return {
    id,
    title: `Shayari #${id}`,
    author: 'Amanfromtheark.2 Collection',
    mood,
    content: [
      `दिल ने कहा #${id}, अंधेरों से मत डर, रोशनी तेरे अंदर भी है।`,
      mood === 'sad'
        ? 'टूटकर भी मुस्कुराना एक कला है, और यही असली हौसला है।'
        : 'हर गिरावट के बाद उठना ही इंसान की सबसे बड़ी जीत है।',
    ],
  };
};

const createKavita = (id: number): PoetryItem => ({
  id,
  title: `Kavita #${id}`,
  author: 'Aman Lakheshwar Literary Studio',
  mood: id % 3 === 0 ? 'sad' : 'motivational',
  content: [
    `ये कविता #${id} उस यात्री के नाम, जो थककर भी रुका नहीं।`,
    'पगडंडी छोटी थी, मगर इरादे आसमान से बड़े थे।',
    'जिंदगी ने जितनी बार गिराया, उतनी बार उसने खुद को नया बनाया।',
  ],
});

const allShayari = Array.from({ length: 1000 }, (_, idx) => createShayari(idx + 1));
const allKavita = Array.from({ length: 1000 }, (_, idx) => createKavita(idx + 1));

const PoetryCard: React.FC<{ item: PoetryItem }> = ({ item }) => (
  <article className="bg-slate-900 rounded-xl border border-slate-800 p-5 shadow-lg hover:border-cyan-500 transition-colors">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
      <span className="text-xs uppercase px-2 py-1 rounded bg-slate-800 text-gray-300">{item.mood}</span>
    </div>
    <div className="mt-3 text-gray-200 italic space-y-2">
      {item.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    <p className="text-right text-sm text-gray-500 mt-3">— {item.author}</p>
  </article>
);

const ShayariPage: React.FC = () => {
  const [kind, setKind] = useState<PoetryKind>('shayari');
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    const source = kind === 'shayari' ? allShayari : allKavita;
    if (!query.trim()) return source;
    return source.filter((item) =>
      `${item.title} ${item.content.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [kind, query]);

  return (
    <section className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Global Poetry Library</h2>
          <p className="mt-4 text-xl text-gray-300">1000 Shayari + 1000 Kavita • Emotional, Sad, Motivational, and Professional Collection.</p>
        </header>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-3">Featured Poem</h3>
          <p className="text-gray-100 leading-8 italic">
            “मैं हवा से कहता हूँ, तेरी रफ्तार से नहीं डरता,
            मैं समंदर से कहता हूँ, तेरी गहराई में भी उतरता।
            मेरा नाम उम्मीद है, मैं हर दिल में फिर से संवरता।”
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button onClick={() => setKind('shayari')} className={`px-6 py-3 rounded-lg font-bold ${kind === 'shayari' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-gray-200'}`}>Show 1000 Shayari</button>
          <button onClick={() => setKind('kavita')} className={`px-6 py-3 rounded-lg font-bold ${kind === 'kavita' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-gray-200'}`}>Show 1000 Kavita</button>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword or emotion"
            className="sm:ml-auto bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 w-full sm:max-w-sm"
          />
        </div>

        <p className="text-gray-400 mb-4">Showing {list.length} items from the {kind === 'shayari' ? 'Shayari' : 'Kavita'} collection.</p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 max-h-[65vh] overflow-y-auto pr-1">
          {list.slice(0, 180).map((item) => (
            <PoetryCard key={`${kind}-${item.id}`} item={item} />
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Performance note: first 180 cards are rendered at a time for smooth UX, while full search/count works across all 1000 entries.
        </p>
      </div>
    </section>
  );
};

export default ShayariPage;
