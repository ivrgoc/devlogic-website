import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const locales = ['en', 'hr'];
const defaultLocale = 'en';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Check if pathname starts with a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale if no locale in path
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match root
    '/',
    // Match locale paths
    '/(en|hr)/:path*',
    // Match paths that need locale prefix (exclude static files)
    '/((?!_next|api|favicon|robots|sitemap|images).*)',
  ],
};
