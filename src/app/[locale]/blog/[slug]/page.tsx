import type { Metadata } from 'next';
import { BlogPost } from '@/components/blog';
import { getBlogPost, getRelatedPosts, getAllSlugs } from '@/data/blog-posts';

export const runtime = 'edge';
export const dynamic = 'force-static';

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | DevLogic',
    };
  }

  return {
    title: `${post.title} | DevLogic Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ['en', 'hr'];

  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const relatedPosts = post ? getRelatedPosts(slug, post.category) : [];

  return <BlogPost post={post} relatedPosts={relatedPosts} />;
}
