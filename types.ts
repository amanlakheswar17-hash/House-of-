
export type Page = 'home' | 'shayari' | 'gallery' | 'comedy';

export interface ShayariPost {
  id: number;
  title: string;
  author: string;
  content: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface ComedyVideo {
  id: number;
  title: string;
  artist: string;
  embedUrl: string;
}
