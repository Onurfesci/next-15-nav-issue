'use client';

import { IntlErrorCode, NextIntlClientProvider } from 'next-intl';
import { ComponentProps } from 'react';

type NextIntlClientProviderProps = ComponentProps<
  typeof NextIntlClientProvider
>;

const getMessageFallback: NextIntlClientProviderProps['getMessageFallback'] = ({
  namespace,
  key,
  error,
}) => {
  const path = [namespace, key].filter((part) => part != null).join('.');
  if (error.code === IntlErrorCode.MISSING_MESSAGE) return '';
  return path;
};

const handleError: NextIntlClientProviderProps['onError'] = (error) => {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) return;
  if (error.code === IntlErrorCode.ENVIRONMENT_FALLBACK) return;
  else console.error(error);
};

const CustomNextIntlClientProvider: typeof NextIntlClientProvider = (props) => (
  <NextIntlClientProvider
    getMessageFallback={getMessageFallback}
    onError={handleError}
    defaultTranslationValues={{
      br: () => <br />,
    }}
    {...props}
  />
);

export default CustomNextIntlClientProvider;
