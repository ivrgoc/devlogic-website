import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Navigation, Footer } from '@/components/layout';
import { I18nProvider } from '@/lib/i18n';
import '../globals.css';

export const runtime = 'edge';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'hr')) {
    notFound();
  }

  return (
    <html lang={locale} className={`dark ${inter.variable}`}>
      <body className="font-sans">
        <I18nProvider locale={locale as 'en' | 'hr'}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
