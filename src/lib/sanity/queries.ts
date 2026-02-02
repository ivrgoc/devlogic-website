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
