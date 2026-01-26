export const routing = {
  locales: ['en', 'hr'] as const,
  defaultLocale: 'en' as const,
};

// Re-export Next.js navigation for compatibility
export { default as Link } from 'next/link';
export { usePathname, useRouter } from 'next/navigation';
