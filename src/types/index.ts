// Product types
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  tagline?: string;
  description?: string;
  features?: string[];
  status: 'available' | 'coming-soon';
  icon?: string;
  image?: SanityImage;
  order?: number;
}

// Blog types
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  readTime?: string;
  category?: BlogCategory;
  mainImage?: SanityImage;
  body?: unknown[];
}

export interface BlogCategory {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

// Testimonial types
export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: SanityImage;
  order?: number;
}

// Portfolio types
export interface PortfolioItem {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  description?: string;
  image?: SanityImage;
  technologies?: string[];
  order?: number;
}

// Sanity image type
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}
