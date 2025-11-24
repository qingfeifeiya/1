export interface Comment {
  id: string;
  user: string;
  avatar: string;
  date: string;
  content: string;
}

export interface Mod {
  id: string;
  title: string;
  author: string;
  version: string;
  gameVersion: string;
  description: string; // Short excerpt
  fullContent: string; // Main article content
  installation: string; // Installation instructions
  downloads: number;
  updatedAt: string;
  category: string;
  imageUrl: string;
  tags: string[];
  isFeatured?: boolean;
  fileSize: string;
  comments: Comment[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export type SortOption = 'updated' | 'downloads' | 'rating' | 'newest';

export interface FilterState {
  search: string;
  category: string | null;
  sort: SortOption;
  versions: string[];
}