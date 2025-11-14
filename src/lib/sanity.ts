import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if you need fresh data
  apiVersion: '2024-01-01', // Use current date (YYYY-MM-DD)
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// TypeScript types for your blog content
export interface Author {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: any;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  category: string;
  excerpt: string;
  mainImage?: any;
  publishedAt: string;
  readTime: string;
  content: any[]; // Portable Text content
}

// GROQ queries for fetching blog data
export const queries = {
  // Get all published blog posts
  allPosts: `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    mainImage,
    author->{
      name,
      role,
      bio,
      image
    }
  }`,

  // Get a single blog post by slug
  postBySlug: (slug: string) => `*[_type == "blogPost" && slug.current == "${slug}"][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    mainImage,
    content,
    author->{
      name,
      role,
      bio,
      image
    }
  }`,
};
