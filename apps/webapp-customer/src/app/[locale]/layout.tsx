import {
  ConfigProvider,
  CustomNextIntlClientProvider,
  getConfig,
  getEnv,
} from '@aspire/shared';
import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@/splashScreen/splashScreenStyles.css';

import { defaultConfig } from '@/config';

import Providers from './Providers';
import SplashScreenLoader from './SplashScreenLoader';

type RootLayoutProps = React.PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return ['en-GB'].map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

const APP_NAME = 'Fake App';
const APP_DEFAULT_TITLE = 'Fake App';
const APP_TITLE_TEMPLATE = '%s | Fake App';
const APP_DESCRIPTION =
  'This is a fake description for a fake app used for testing purposes.';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startupImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#142211',
};
// #142211 for light mode
// #2E362D for dark mode

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;

  const messages = await getMessages(locale);

  const config = process.env.NEXT_PUBLIC_IS_TEST_ENV
    ? {
        awsChatEnabled: false,
        apiUrl: 'https:fake-api.com',
        authUrl: 'https:fake-api.com',
        featureFlags: {
          debitCards: true,
          directDebits: true,
        },
      }
    : await getConfig({
        appName: 'my-app',
        defaultConfig,
      });

  return (
    <html lang={locale}>
      <head>
        <Script
          strategy="beforeInteractive"
          id="config"
        >{`window.__CONFIG__=${JSON.stringify(config)};`}</Script>
        {getEnv() !== 'prod' && (
          <meta name="robots" content="noindex,nofollow" />
        )}
        <meta name="theme-color" />
      </head>
      <body>
        <SplashScreenLoader />
        <CustomNextIntlClientProvider locale={locale} messages={messages}>
          <ConfigProvider config={config}>
            <Providers>{children}</Providers>
          </ConfigProvider>
        </CustomNextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
