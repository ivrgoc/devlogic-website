'use client';

import { useTranslations } from 'next-intl';
import { Trophy, Users, Clock, MessageCircle, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Badge, Button, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

const reasonIcons = [Trophy, Users, Clock, MessageCircle, Shield, TrendingUp];

export function WhyUsSection() {
  const t = useTranslations('whyUs');

  const reasons = [0, 1, 2, 3, 4, 5].map((index) => ({
    icon: reasonIcons[index],
    title: t(`reasons.${index}.title`),
    description: t(`reasons.${index}.description`),
  }));

  return (
    <section id="why-us" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <Badge variant="primary" className="mb-4">
              {t('badge')}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">{t('titleLine1')}</span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                {t('titleLine2')}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">{t('description')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact">
                {t('cta1')}
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="secondary" href="#portfolio">
                {t('cta2')}
              </Button>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <reason.icon className="text-primary-400 mb-3" size={24} />
                  <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                  <p className="text-gray-400 text-sm">{reason.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
