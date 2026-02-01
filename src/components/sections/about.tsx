'use client';

import { useTranslations } from '@/lib/i18n';
import { Shield, MessageCircle, CreditCard } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

export function AboutSection() {
  const t = useTranslations('about');

  const values = [
    { icon: Shield, title: t('qualityFocus'), description: t('qualityFocusDesc') },
    { icon: MessageCircle, title: t('directComm'), description: t('directCommDesc') },
    { icon: CreditCard, title: t('transparentPricing'), description: t('transparentPricingDesc') },
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="text-gray-400 text-lg mb-6">{t('description1')}</p>
            <p className="text-gray-400 text-lg">{t('description2')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <value.icon className="text-primary-400 mb-3" size={28} />
                  <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
