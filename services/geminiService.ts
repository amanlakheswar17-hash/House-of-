
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateShayari = async (topic: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("API Key is not configured.");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `"${topic}" विषय पर एक मज़ेदार और छोटी (2-4 लाइन) शायरी हिंदी (देवनागरी लिपि) में लिखो। शायरी मौलिक और हास्यप्रद होनी चाहिए।`,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to generate Shayari from Gemini API.");
  }
};
