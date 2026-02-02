// Sanity types (for future use)
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
