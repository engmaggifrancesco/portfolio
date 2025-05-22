export interface MediaItem {
  url: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  client?: string;
  year: number;
  imageUrl: string;
  videoUrl?: string;
  
  // Campi personalizzati per descrizioni più dettagliate
  overview?: string;       // Panoramica estesa del progetto
  process?: string;        // Descrizione del processo creativo
  challenges?: string;     // Sfide affrontate durante il progetto
  technologies?: string[]; // Tecnologie/strumenti utilizzati
  
  // Galleria di immagini con descrizioni
  gallery?: (string | MediaItem)[];      // Supporta sia stringhe semplici che oggetti con descrizioni
  
  // Sezioni aggiuntive con media o testo
  additionalVideos?: AdditionalVideo[];  // Supporta video, immagini e testo
  
  customSections?: {
    title: string;
    content: string;
  }[];                     // Sezioni personalizzate con titolo e contenuto
}

export interface AdditionalVideo {
  url?: string;
  description?: string;
  sectionTitle?: string;
  subtitle?: string;
  type?: 'video' | 'image' | 'text';
  secondImage?: string;
  thirdImage?: string;
}

export type SetPageFunction = (page: string) => void;
export type SetProjectIdFunction = (id: number | null) => void;
