import type { Metadata } from 'next';
import { BlogList } from '@/components/blog';
import { blogPosts, categories } from '@/data/blog-posts';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog | DevLogic',
  description: 'Latest insights, tutorials, and news from the DevLogic team on software development, design, and technology.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogList posts={blogPosts} categories={categories} />
      </div>
    </div>
  );
}
