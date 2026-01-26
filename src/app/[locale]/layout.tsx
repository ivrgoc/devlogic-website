import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Providers } from '../providers';
import { Navigation, Footer } from '@/components/layout';
import '../globals.css';
import type { AbstractIntlMessages } from 'next-intl';
import en from '@/messages/en.json';
import hr from '@/messages/hr.json';

export const runtime = 'edge';
export const dynamic = 'force-static';

const messages: Record<string, AbstractIntlMessages> = {
  en: en as unknown as AbstractIntlMessages,
  hr: hr as unknown as AbstractIntlMessages,
};

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

  const localeMessages = messages[locale];

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={localeMessages}>
          <Providers>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
