
/// <reference types="vite/client" />

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export enum Category {
  ALL = 'All Topics',
  CRIMINAL = 'Criminal Law',
  CIVIL = 'Civil Litigation',
  FAMILY = 'Family Law',
  AWARENESS = 'Legal Awareness'
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  imageUrl: string;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
