import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { AboutSection } from '@/components/sections';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: `${t('badge')} | DevLogic`,
    description: t('description1'),
  };
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
