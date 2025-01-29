import withBundleAnalyzerInit from '@next/bundle-analyzer';
import withSerwistInit from '@serwist/next';

const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env.ANALYZE === 'true',
});

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  // disable:
  //   !!process.env.NEXT_PUBLIC_IS_TEST_ENV || process.env.NODE_ENV === 'test',
  disable: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withSerwist(
  withBundleAnalyzer({
    transpilePackages: ['@aspire/ui', '@aspire/shared'],
    experimental: {
      staleTimes: {
        dynamic: 30,
      },
      optimizePackageImports: [
        '@mui/joy',
        '@aspire/ui',
        '@aspire/shared',
        'framer-motion',
      ],
    },
    output: 'standalone',
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    webpack(webpackConfig) {
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      });
      return webpackConfig;
    },
  })
);

export default nextConfig;
