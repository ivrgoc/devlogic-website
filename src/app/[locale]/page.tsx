import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export const runtime = 'edge';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProductsSection,
  WhyUsSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/sections';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://www.devlogic.hr',
      siteName: 'DevLogic',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: 'https://www.devlogic.hr',
      languages: {
        en: 'https://www.devlogic.hr/en',
        hr: 'https://www.devlogic.hr/hr',
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
