'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Badge, GlassCard, Button } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { useTranslations } from '@/lib/i18n';

export interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  featured?: boolean;
  image?: string | null;
}

interface BlogListProps {
  posts: BlogPostPreview[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export function BlogList({ posts, categories }: BlogListProps) {
  const t = useTranslations('blog');
  const params = useParams();
  const locale = params.locale as string;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const featuredPost = posts.find((post) => post.featured);

  const filteredPosts = useMemo(() => {
    const regularPosts = posts.filter((post) => !post.featured);
    if (selectedCategory === 'all') return regularPosts;
    return regularPosts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const loadMore = () => {
    setVisiblePosts((prev) => prev + POSTS_PER_PAGE);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'hr' ? 'hr-HR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (category: string) => {
    if (category === 'all') return t('allCategories');
    return t(`categories.${category}`) || category;
  };

  const allCategories = ['all', ...categories];

  return (
    <>
      {/* Header */}
      <AnimatedSection className="text-center mb-16">
        <Badge variant="primary" className="mb-4">
          {t('badge')}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">{t('titleLine1')}</span>
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            {t('titleLine2')}
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('description')}</p>
      </AnimatedSection>

      {/* Featured Post */}
      {featuredPost && (
        <AnimatedSection className="mb-16" delay={0.1}>
          <Link href={`/${locale}/blog/${featuredPost.slug}`}>
            <GlassCard className="group cursor-pointer overflow-hidden p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image placeholder */}
                <div className="h-64 md:h-full min-h-[300px] bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-primary-600/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative z-10 text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                        <span className="text-3xl">📝</span>
                      </div>
                      <span className="text-white/40 text-sm">Featured Article</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent">{t('featured')}</Badge>
                    <Badge>{getCategoryLabel(featuredPost.category)}</Badge>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 mb-6 line-clamp-3">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featuredPost.readTime} {t('minRead')}
                      </span>
                    </div>

                    <span className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-3 transition-all">
                      {t('readMore')}
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        </AnimatedSection>
      )}

      {/* Category Filter */}
      <AnimatedSection className="mb-10" delay={0.2}>
        <div className="flex flex-wrap gap-2 justify-center">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisiblePosts(POSTS_PER_PAGE);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/[0.05] text-gray-400 hover:bg-white/[0.1] hover:text-white'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      {displayedPosts.length > 0 ? (
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/${locale}/blog/${post.slug}`}>
                <GlassCard className="h-full flex flex-col group cursor-pointer hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Image placeholder */}
                  <div className="h-48 rounded-xl bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-600/10 mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.1),transparent_50%)]" />
                    {post.image ? (
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    ) : (
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                          <span className="text-xl">📄</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <Badge className="self-start mb-3">{getCategoryLabel(post.category)}</Badge>

                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-gray-500 text-sm pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime} {t('minRead')}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <AnimatedSection className="text-center py-16">
          <p className="text-gray-400 text-lg">{t('noPostsFound')}</p>
        </AnimatedSection>
      )}

      {/* Load More Button */}
      {hasMorePosts && (
        <AnimatedSection className="text-center mt-12">
          <Button variant="outline" onClick={loadMore} className="px-8">
            {t('loadMore')}
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </AnimatedSection>
      )}
    </>
  );
}
