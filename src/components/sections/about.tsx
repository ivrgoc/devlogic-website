'use client';

import { useTranslations } from '@/lib/i18n';
import { Target, Eye, Heart, Users, Award } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

export function AboutSection() {
  const t = useTranslations('about');

  const values = [
    { icon: Target, title: t('mission'), description: t('missionDesc') },
    { icon: Eye, title: t('vision'), description: t('visionDesc') },
    { icon: Heart, title: t('values'), description: t('valuesDesc') },
    { icon: Users, title: t('approach'), description: t('approachDesc') },
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

            {/* Award Badge - temporarily hidden
            <div className="mt-8 inline-flex items-center px-4 py-3 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-xl">
              <Award className="text-primary-400 mr-3" size={24} />
              <div>
                <div className="text-white font-semibold">{t('award')}</div>
                <div className="text-gray-400 text-sm">{t('awardDesc')}</div>
              </div>
            </div>
            */}
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 gap-4">
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
