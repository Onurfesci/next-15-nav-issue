import { Config } from '@/config';

declare global {
  type WithChildren = { children?: React.ReactNode };

  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_STAGE: 'development' | 'production' | 'test' | 'uat';
      NEXT_PUBLIC_MARKETING_URL: string;
      NEXT_PUBLIC_LEGAL_URL: string;
      NEXT_PUBLIC_IS_TEST_ENV: string;
      NEXT_PUBLIC_PERSONAL_TERMS_AND_CONDITIONS_URL: string;
      NEXT_PUBLIC_BUSINESS_TERMS_AND_CONDITIONS_URL: string;
      NEXT_PUBLIC_PRIVACY_POLICY_URL: string;
      NEXT_PUBLIC_COOKIE_POLICY_URL: string;
      NEXT_PUBLIC_FEES_URL: string;
      NEXT_PUBLIC_CONTACT_US_URL: string;
      NEXT_PUBLIC_CONTACT_US_EMAIL: string;
    }
  }

  interface Window {
    __CONFIG__: Config;
  }
}
