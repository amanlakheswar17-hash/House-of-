export type Page = 'home' | 'poetry' | 'media' | 'booking';

export interface PoetryItem {
  id: number;
  title: string;
  author: string;
  content: string[];
  mood: 'motivational' | 'romantic' | 'sad' | 'life';
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface ServicePackage {
  id: number;
  title: string;
  price: string;
  duration: string;
  highlights: string[];
}
