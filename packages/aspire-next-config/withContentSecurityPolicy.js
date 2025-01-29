export const marketingContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    *.aspirepayments.co.uk
    *.cloudfront.net
    *.googletagmanager.com
    *.google-analytics.com
    *.microsoft.com
    *.clarity.ms
    *.linkedin.com
    *.licdn.com
    *.doubleclick.net
    *.googleadservices.com
    *.google.com;
  connect-src 'self'
    *.aspirepayments.co.uk
    *.google-analytics.com
    *.amazonaws.com
    wss://*.amazonaws.com
    *.cloudfront.net
    *.googletagmanager.com
    *.clarity.ms
    *.linkedin.com
    *.doubleclick.net
    *.bing.com
    *.google.com
    https://google.com
    *.sanity.io
    wss://*.sanity.io;
  worker-src 'self' blob:;
  frame-src 'self'
    *.aspirepayments.co.uk
    *.googletagmanager.com
    *.linkedin.com
    *.doubleclick.net;
  img-src * data:;
  style-src 'self' 'unsafe-inline'
    *.aspirepayments.co.uk
    *.googleapis.com;
  font-src 'self'
    *.aspirepayments.co.uk
    *.gstatic.com;
`;

export const authenticatedContentSecurityPolicy = `
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    *.aspirepayments.co.uk
    *.cloudfront.net
    *.googletagmanager.com
    *.google-analytics.com
    *.microsoft.com
    *.clarity.ms
    *.linkedin.com
    *.licdn.com
    *.doubleclick.net
    *.googleadservices.com
    *.google.com;
  connect-src 'self'
    *.aspirepayments.co.uk
    *.google-analytics.com
    *.amazonaws.com
    wss://*.amazonaws.com
    *.cloudfront.net
    *.googletagmanager.com
    *.clarity.ms
    *.linkedin.com
    *.doubleclick.net
    *.bing.com
    *.google.com
    https://google.com;
  worker-src 'self' blob:;
  frame-src 'self'
    ${process.env.NODE_ENV === 'development' ? 'http://localhost:4200' : ''}
    *.aspirepayments.co.uk
    *.googletagmanager.com
    *.linkedin.com
    *.doubleclick.net;
  img-src * data:;
  style-src 'self' 'unsafe-inline'
    *.aspirepayments.co.uk
    *.googleapis.com;
  font-src 'self'
    *.aspirepayments.co.uk
    *.gstatic.com;
`;

export const cspMapping = {
  marketing: marketingContentSecurityPolicy,
  authenticated: authenticatedContentSecurityPolicy,
};

const withContentSecurityPolicy = (cspType, config) => {
  return {
    async headers() {
      const headerList = [];
      if (cspType && cspMapping[cspType])
        headerList.push(
          // Content-Security-Policy header
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: cspMapping[cspType].replace(/\n/g, ''),
              },
            ],
          }
        );
      return headerList;
    },
    ...config,
  };
};

export default withContentSecurityPolicy;
