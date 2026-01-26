import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export const runtime = 'edge';
import { ContactSection } from '@/components/sections';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: `${t('badge')} | DevLogic`,
    description: t('description'),
  };
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
