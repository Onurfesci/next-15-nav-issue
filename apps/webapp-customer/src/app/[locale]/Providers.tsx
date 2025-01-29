'use client';

import { SnackbarProvider, ThemeRegistry } from '@aspire/shared';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { AuthProvider } from '@/providers';
import { store } from '@/redux/store';

const Providers = ({ children }: WithChildren) => (
  <Suspense>
    <ThemeRegistry>
      <SnackbarProvider>
        <Provider store={store}>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
      </SnackbarProvider>
    </ThemeRegistry>
  </Suspense>
);

export default Providers;
