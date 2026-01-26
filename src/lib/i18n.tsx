'use client';

import { createContext, useContext, ReactNode } from 'react';
import en from '@/messages/en.json';
import hr from '@/messages/hr.json';

type Messages = typeof en;
type Locale = 'en' | 'hr';

const messages: Record<Locale, Messages> = { en, hr };

interface I18nContextType {
  locale: Locale;
  messages: Messages;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  locale
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const localeMessages = messages[locale];

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = localeMessages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, messages: localeMessages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslations must be used within I18nProvider');
  }

  return (key: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey);
  };
}

export function useLocale(): Locale {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLocale must be used within I18nProvider');
  }
  return context.locale;
}
