import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';

export const runtime = 'edge';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle root path explicitly for Cloudflare compatibility
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(hr|en)/:path*'],
};
