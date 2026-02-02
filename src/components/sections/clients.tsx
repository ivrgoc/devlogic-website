'use client';

import { useTranslations } from '@/lib/i18n';
import { Rocket, Building2, Globe } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

const clientIcons = [Rocket, Building2, Globe];

export function ClientsSection() {
  const t = useTranslations('clients');

  const clients = [0, 1, 2].map((index) => ({
    icon: clientIcons[index],
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
  }));

  return (
    <section id="clients" className="py-24 bg-dark-900">
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
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <StaggerItem key={index}>
              <Card hover className="h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                  <client.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{client.title}</h3>
                <p className="text-gray-400 text-sm">{client.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
