
import { Article, Category, Milestone, PracticeArea } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Understanding Procedural Due Process',
    excerpt: 'A deep dive into the constitutional requirements of fair legal proceedings and why they form the bedrock of our judicial system.',
    content: 'Full content of procedural due process article...',
    category: Category.CRIMINAL,
    date: 'May 12, 2024',
    imageUrl: 'https://picsum.photos/seed/legal1/800/500',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Navigating Family Mediation',
    excerpt: 'Practical steps for families seeking resolution outside of the courtroom, focusing on constructive communication.',
    content: 'Full content of family mediation article...',
    category: Category.FAMILY,
    date: 'Apr 28, 2024',
    imageUrl: 'https://picsum.photos/seed/legal2/800/500'
  },
  {
    id: '3',
    title: 'Recent Amendments to Civil Code',
    excerpt: 'An analysis of the latest legislative changes impacting civil litigation and upcoming contract disputes.',
    content: 'Full content of civil code article...',
    category: Category.CIVIL,
    date: 'Apr 15, 2024',
    imageUrl: 'https://picsum.photos/seed/legal3/800/500'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2023',
    title: '15 Years of Practice',
    description: 'Marking a decade and a half of unwavering dedication to client advocacy and legal precision in corporate environments.',
    icon: 'gavel',
    badge: 'Longevity'
  },
  {
    year: '2022',
    title: 'Best Corporate Lawyer',
    description: 'Awarded by the National Legal Forum for outstanding leadership and resolution strategies in high-stakes corporate disputes.',
    icon: 'trophy',
    badge: 'Excellence'
  },
  {
    year: '2015',
    title: 'Supreme Court Bar Affiliate',
    description: 'Inducted into the prestigious Supreme Court Bar Association, allowing for representation at the highest levels of the judiciary.',
    icon: 'verified',
    badge: 'Membership'
  },
  {
    year: '2010',
    title: 'Bar Association Entry',
    description: 'Formal entry into the professional bar, graduating in the top 1% of the class with honors in Mercantile Law.',
    icon: 'school',
    badge: 'Accreditation'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Corporate Litigation',
    description: 'Expert navigation of complex business disputes and boardroom conflicts.',
    imageUrl: 'https://picsum.photos/seed/corp/400/400'
  },
  {
    title: 'Intellectual Property',
    description: 'Protecting your creative assets and industrial innovations worldwide.',
    imageUrl: 'https://picsum.photos/seed/ip/400/400'
  },
  {
    title: 'Civil Disputes',
    description: 'Dedicated advocacy for individual legal rights in property and civil matters.',
    imageUrl: 'https://picsum.photos/seed/civil/400/400'
  },
  {
    title: 'Contractual Law',
    description: 'Meticulous drafting and advisory services for bulletproof agreements.',
    imageUrl: 'https://picsum.photos/seed/contract/400/400'
  }
];
