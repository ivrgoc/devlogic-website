import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import type { AbstractIntlMessages } from 'next-intl';
import en from '@/messages/en.json';
import hr from '@/messages/hr.json';

const messages: Record<string, AbstractIntlMessages> = {
  en: en as unknown as AbstractIntlMessages,
  hr: hr as unknown as AbstractIntlMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'hr')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale],
  };
});
