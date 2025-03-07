import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-GB'],
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en-GB',
  localePrefix: 'as-needed',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
