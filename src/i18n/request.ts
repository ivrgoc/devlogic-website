import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import en from '@/messages/en.json';
import hr from '@/messages/hr.json';

const messages = {
  en,
  hr,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'hr')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
