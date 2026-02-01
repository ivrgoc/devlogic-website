'use client';

import { useTranslations } from '@/lib/i18n';
import { Calendar, Users, Building2, MessageCircle } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

export function AboutSection() {
  const t = useTranslations('about');

  const cards = [
    { icon: Calendar, title: t('card1Title'), description: t('card1Desc') },
    { icon: Users, title: t('card2Title'), description: t('card2Desc') },
    { icon: Building2, title: t('card3Title'), description: t('card3Desc') },
    { icon: MessageCircle, title: t('card4Title'), description: t('card4Desc') },
  ];

  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            {t('badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">{t('titleLine1')}</span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <AnimatedSection direction="left" className="space-y-6">
            <p className="text-gray-400 text-lg">{t('description1')}</p>
            <p className="text-gray-400 text-lg">{t('description2')}</p>
            <p className="text-gray-400 text-lg">{t('description3')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <card.icon className="text-primary-400 mb-3" size={28} />
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
