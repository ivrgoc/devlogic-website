import { groq } from 'next-sanity';

// Products
export const productsQuery = groq`
  *[_type == "product"] | order(order asc) {
    _id,
    name,
    slug,
    tagline,
    description,
    features,
    status,
    icon,
    image
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    tagline,
    description,
    features,
    status,
    icon,
    image,
    content
  }
`;

// Blog Posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    },
    mainImage
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    },
    mainImage,
    body
  }
`;

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && category->slug.current == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    },
    mainImage
  }
`;

// Categories
export const categoriesQuery = groq`
  *[_type == "blogCategory"] | order(title asc) {
    _id,
    title,
    slug
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    company,
    image
  }
`;

// Portfolio
export const portfolioQuery = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    description,
    image,
    technologies
  }
`;
