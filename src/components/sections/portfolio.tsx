'use client';

import { useTranslations } from '@/lib/i18n';
import { ExternalLink } from 'lucide-react';
import { Badge, Button, GlassCard } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

const projectColors = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-green-500/20 to-emerald-500/20',
  'from-orange-500/20 to-yellow-500/20',
];

export function PortfolioSection() {
  const t = useTranslations('portfolio');

  const projects = [0, 1, 2, 3].map((index) => ({
    title: t(`projects.${index}.title`),
    category: t(`projects.${index}.category`),
    description: t(`projects.${index}.description`),
    gradient: projectColors[index],
  }));

  return (
    <section id="portfolio" className="py-24 bg-dark-800">
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

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <GlassCard className="group cursor-pointer">
                <div
                  className={`h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}
                >
                  <span className="text-white/50 text-sm">Project Preview</span>
                </div>
                <Badge className="mb-2">{project.category}</Badge>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <Button variant="ghost" size="sm" className="group-hover:text-primary-400">
                  {t('viewCase')}
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-gray-400 mb-4">{t('cta')}</p>
          <Button href="#contact">Get in Touch</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
