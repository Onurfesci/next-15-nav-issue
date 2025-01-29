const withAspireNextConfig = (config) => {
  return {
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
    ...config,
  };
};

export default withAspireNextConfig;
