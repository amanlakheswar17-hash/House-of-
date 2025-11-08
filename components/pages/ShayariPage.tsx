
import React, { useState } from 'react';
import type { ShayariPost } from '../../types';
import { generateShayari } from '../../services/geminiService';

const shayariPosts: ShayariPost[] = [
  { id: 1, title: "चाय और बिस्कुट", author: "अज्ञात", content: ["चाय में डूबा बिस्कुट और इश्क़ में डूबा दोस्त,", "दोनों को बचाना मुश्किल है, मेरे दोस्त।"] },
  { id: 2, title: "मच्छर का बलिदान", author: "कॉमेडी वाला", content: ["रात भर मच्छरों ने मुझे परेशान किया,", "मैंने भी सुबह उठकर उनका ख़ून दान किया।"] },
  { id: 3, title: "आलस का ज्ञान", author: "एक आलसी", content: ["काम ऐसा करो कि चार लोग कहें, 'तुम रहने दो, हम कर लेंगे'"] },
  { id: 4, title: "परीक्षा का डर", author: "विद्यार्थी", content: ["पढ़ाई-लिखाई सब धोखा है,", "असली ज्ञान तो परीक्षा के बाद होता है।"] },
];

const ShayariCard: React.FC<{ post: ShayariPost }> = ({ post }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-2xl font-bold text-amber-400 mb-2">{post.title}</h3>
    <div className="text-gray-300 italic space-y-2 mb-4">
      {post.content.map((line, index) => <p key={index}>{line}</p>)}
    </div>
    <p className="text-right text-sm text-gray-500">- {post.author}</p>
  </div>
);

const ShayariPage: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [generatedShayari, setGeneratedShayari] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!topic.trim()) {
            setError("Please enter a topic.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedShayari(null);
        try {
            const result = await generateShayari(topic);
            setGeneratedShayari(result);
        } catch (e) {
            setError("Could not generate Shayari. Please try again later.");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">शायरी का कोना</h2>
          <p className="mt-4 text-xl text-gray-400">कुछ मज़ेदार, कुछ दिल को छू जाने वाले अल्फ़ाज़।</p>
        </div>

        {/* Gemini Shayari Generator */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-amber-400 mb-4">AI Shayari Generator</h3>
            <p className="text-center text-gray-300 mb-6">मन में कोई विषय है? AI को आपके लिए एक शायरी बनाने दें!</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="जैसे: 'कॉफी', 'दोस्त', 'सोमवार'"
                    className="flex-grow bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-300 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : 'Generate Shayari'}
                </button>
            </div>
            {error && <p className="text-red-400 text-center mt-4">{error}</p>}
            {generatedShayari && (
                <div className="mt-6 bg-gray-900 p-4 rounded-lg border border-amber-400">
                    <p className="text-gray-200 whitespace-pre-wrap text-center italic">{generatedShayari}</p>
                </div>
            )}
        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {shayariPosts.map((post) => (
            <ShayariCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShayariPage;
