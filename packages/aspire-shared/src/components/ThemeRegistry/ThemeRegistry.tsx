'use client';

import { AspireCssVarsProvider, CssBaseline } from '@aspire/ui';
import { ComponentProps } from 'react';

import NextAppDirEmotionCacheProvider from './EmotionCache';
import GlobalStyles from './GlobalStyles';

type ThemeRegistryProps = ComponentProps<typeof AspireCssVarsProvider>;

const ThemeRegistry = ({ children, ...rest }: ThemeRegistryProps) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'joy' }}>
      <AspireCssVarsProvider defaultMode="light" {...rest}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </AspireCssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
