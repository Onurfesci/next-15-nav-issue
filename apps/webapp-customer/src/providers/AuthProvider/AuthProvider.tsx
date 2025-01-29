import { usePathname, useRouter } from 'next/navigation';
import { useQueryState } from 'next-usequerystate';
import { WebStorageStateStore } from 'oidc-client-ts';
import { useCallback } from 'react';
import {
  AuthProviderProps,
  AuthProvider as OidcAuthProvider,
  useAuth,
} from 'react-oidc-context';

import { getConfig } from '@/config';
import { Route } from '@/enums';

import AuthController from './AuthController';

const redirectUri =
  typeof window !== 'undefined' ? window.location.href.split('?')[0] : '';

const userStore =
  typeof window !== 'undefined'
    ? new WebStorageStateStore({ store: window.localStorage })
    : undefined;

const oidcConfig: AuthProviderProps = {
  authority: getConfig('authUrl'),
  client_id: 'webapp-customer',
  redirect_uri: redirectUri,
  post_logout_redirect_uri: redirectUri,
  userStore,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

const useAuthRedirect = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [autoLogin] = useQueryState('autoLogin');

  const isPublicRoute = pathname.includes(Route.Register);

  const handleAuthenticatedPublicRoute = useCallback(() => {
    if (pathname.includes(Route.Register)) router.push('/');
  }, [pathname]);

  return {
    isAutoLogin: autoLogin === 'true',
    isPublicRoute,
    handleAuthenticatedPublicRoute,
  };
};

const AuthProtection = ({ children }: WithChildren) => {
  const auth = useAuth();

  const { isAutoLogin, isPublicRoute, handleAuthenticatedPublicRoute } =
    useAuthRedirect();

  return (
    <AuthController
      {...auth}
      isAutoLogin={isAutoLogin}
      isPublicRoute={isPublicRoute}
      onAuthenticatedPublicRoute={handleAuthenticatedPublicRoute}
    >
      {children}
    </AuthController>
  );
};

const AuthProvider = ({ children }: WithChildren) => (
  <OidcAuthProvider {...oidcConfig}>
    <AuthProtection>{children}</AuthProtection>
  </OidcAuthProvider>
);

const MockAuthProtection = ({ children }: WithChildren) => {
  const { isAutoLogin, isPublicRoute, handleAuthenticatedPublicRoute } =
    useAuthRedirect();

  return (
    <AuthController
      isAutoLogin={isAutoLogin}
      isPublicRoute={isPublicRoute}
      onAuthenticatedPublicRoute={handleAuthenticatedPublicRoute}
      isLoading={false}
      isAuthenticated={false}
      user={{
        access_token: 'token',
        session_state: 'session',
        token_type: 'Bearer',
        profile: {
          sub: 'sub',
          iss: 'iss',
          aud: 'aud',
          exp: 123,
          iat: 123,
        },
        state: 'state',
        expires_in: 123,
        expired: false,
        scopes: ['openid', 'profile'],
        toStorageString: () => 'string',
      }}
      signinRedirect={async () => {}}
    >
      {children}
    </AuthController>
  );
};

const TestAuthProvider = ({ children }: WithChildren) => {
  return (
    <OidcAuthProvider {...oidcConfig}>
      <MockAuthProtection>{children}</MockAuthProtection>
    </OidcAuthProvider>
  );
};

const ExportedAuthProvider = process.env.NEXT_PUBLIC_IS_TEST_ENV
  ? TestAuthProvider
  : AuthProvider;

export default ExportedAuthProvider;
