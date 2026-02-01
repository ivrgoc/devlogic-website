'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge, GlassCard, Button } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { useTranslations } from '@/lib/i18n';

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image?: string | null;
  content: string[];
}

export interface RelatedPostData {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: number;
}

interface BlogPostProps {
  post: BlogPostData | null;
  relatedPosts: RelatedPostData[];
}

export function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const t = useTranslations('blog');
  const params = useParams();
  const locale = params.locale as string;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'hr' ? 'hr-HR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (category: string) => {
    return t(`categories.${category}`) || category;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnTwitter = () => {
    if (post) {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`,
        '_blank'
      );
    }
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-900 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you are looking for does not exist.</p>
            <Button href={`/${locale}/blog`}>
              <ArrowLeft size={16} className="mr-2" />
              {t('backToBlog')}
            </Button>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <AnimatedSection className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            {t('backToBlog')}
          </Link>
        </AnimatedSection>

        {/* Article Header */}
        <AnimatedSection className="mb-8" delay={0.1}>
          <Badge className="mb-4">{getCategoryLabel(post.category)}</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar size={16} />
              {t('publishedOn')} {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {post.readTime} {t('minRead')}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-primary-600/20 mb-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
            {post.image ? (
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection delay={0.2}>
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4 first:mt-0">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.includes('\n')) {
                return (
                  <div
                    key={index}
                    className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line"
                  >
                    {paragraph}
                  </div>
                );
              }
              return (
                <p key={index} className="text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </AnimatedSection>

        {/* Share Section */}
        <AnimatedSection delay={0.3} className="mt-12 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-gray-400">
              <Share2 size={18} />
              {t('shareArticle')}
            </span>
            <div className="flex gap-3">
              <button
                onClick={shareOnTwitter}
                className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-all"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} />
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-all"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection delay={0.4} className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">{t('relatedPosts')}</h2>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <StaggerItem key={relatedPost.slug}>
                  <Link href={`/${locale}/blog/${relatedPost.slug}`}>
                    <GlassCard className="h-full group cursor-pointer hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1">
                      <Badge className="mb-3">{getCategoryLabel(relatedPost.category)}</Badge>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {relatedPost.readTime} {t('minRead')}
                        </span>
                        <ChevronRight
                          size={14}
                          className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </GlassCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
