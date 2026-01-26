'use client';

import { useTranslations } from '@/lib/i18n';
import { FileText, Code2, Rocket, ArrowRight, Check } from 'lucide-react';
import { Badge, Button, GlassCard } from '@/components/ui';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared';

const productIcons = [FileText, Code2, Rocket];
const productStatus = ['available', 'coming-soon', 'coming-soon'];

export function ProductsSection() {
  const t = useTranslations('products');

  const products = [0, 1, 2].map((index) => ({
    icon: productIcons[index],
    name: t(`items.${index}.name`),
    tagline: t(`items.${index}.tagline`),
    description: t(`items.${index}.description`),
    features: [
      t(`items.${index}.features.0`),
      t(`items.${index}.features.1`),
      t(`items.${index}.features.2`),
      t(`items.${index}.features.3`),
    ],
    status: productStatus[index],
  }));

  return (
    <section id="products" className="py-24 bg-dark-800">
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

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <GlassCard className="h-full flex flex-col">
                {product.status === 'coming-soon' && (
                  <Badge variant="accent" className="self-start mb-4">
                    {t('comingSoon')}
                  </Badge>
                )}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <product.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-primary-400 text-sm mb-3">{product.tagline}</p>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check size={16} className="text-primary-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={product.status === 'available' ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {product.status === 'available' ? t('getStarted') : t('notifyMe')}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
