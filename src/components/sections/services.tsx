'use client';

import { useTranslations } from '@/lib/i18n';
import { Code, TestTube, Cloud, Lightbulb } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

const serviceIcons = [Code, TestTube, Cloud, Lightbulb];

export function ServicesSection() {
  const t = useTranslations('services');

  const services = [0, 1, 2, 3].map((index) => ({
    icon: serviceIcons[index],
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
    features: [
      t(`items.${index}.features.0`),
      t(`items.${index}.features.1`),
      t(`items.${index}.features.2`),
      t(`items.${index}.features.3`),
    ],
  }));

  return (
    <section id="services" className="py-24 bg-dark-900">
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

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card hover className="h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
