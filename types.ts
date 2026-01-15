
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
