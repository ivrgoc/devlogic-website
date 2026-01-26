import type { Metadata } from 'next';
import { Badge, GlassCard } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog | DevLogic',
  description: 'Latest insights, tutorials, and news from the DevLogic team.',
};

// Static blog posts for now - will be replaced with Sanity data
const blogPosts = [
  {
    slug: 'building-scalable-applications',
    title: 'Building Scalable Applications with Next.js 14',
    excerpt:
      'Learn best practices for building performant and scalable web applications using the latest Next.js features.',
    category: 'Development',
    date: '2024-01-15',
    readTime: '8 min read',
  },
  {
    slug: 'modern-devops-practices',
    title: 'Modern DevOps Practices for 2024',
    excerpt:
      'Explore the latest trends in DevOps, including GitOps, platform engineering, and infrastructure as code.',
    category: 'DevOps',
    date: '2024-01-10',
    readTime: '6 min read',
  },
  {
    slug: 'design-systems-guide',
    title: 'The Complete Guide to Design Systems',
    excerpt:
      'How to create and maintain a design system that scales with your organization.',
    category: 'Design',
    date: '2024-01-05',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Latest </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest articles on software development, design, and technology.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <GlassCard className="h-full flex flex-col group cursor-pointer">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 mb-4 flex items-center justify-center">
                  <span className="text-white/50 text-sm">Article Image</span>
                </div>
                <Badge className="self-start mb-3">{post.category}</Badge>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
