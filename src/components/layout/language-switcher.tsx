'use client';

import { useLocale } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'hr') => {
    // Replace current locale in pathname with new locale
    const newPathname = pathname.replace(/^\/(en|hr)/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
          locale === 'en'
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
            : 'text-gray-400 hover:text-white'
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('hr')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
          locale === 'hr'
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
            : 'text-gray-400 hover:text-white'
        )}
      >
        HR
      </button>
    </div>
  );
}
