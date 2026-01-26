'use client';

import { useTranslations } from '@/lib/i18n';
import { Quote } from 'lucide-react';
import { Badge, GlassCard } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [0, 1, 2].map((index) => ({
    quote: t(`items.${index}.quote`),
    author: t(`items.${index}.author`),
    role: t(`items.${index}.role`),
  }));

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            {t('badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">{t('titleLine1')}</span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('description')}</p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <GlassCard className="h-full flex flex-col">
                <Quote className="text-primary-400 mb-4" size={32} />
                <p className="text-gray-300 italic flex-grow mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
