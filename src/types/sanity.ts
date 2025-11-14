// Sanity schema types for your blog

export interface SanityImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanityAuthor {
  _id: string;
  _type: 'author';
  name: string;
  role: string;
  bio?: string;
  image?: SanityImageAsset;
}

export interface SanityBlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  author: SanityAuthor;
  category: string;
  excerpt: string;
  mainImage?: SanityImageAsset;
  publishedAt: string;
  readTime: string;
  content: any[]; // Portable Text blocks
}

// Simplified type for displaying in the UI
export interface BlogPostPreview {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  author?: {
    name: string;
    role: string;
  };
}

export interface BlogPostFull extends BlogPostPreview {
  content: any[];
  authorBio?: string;
}
