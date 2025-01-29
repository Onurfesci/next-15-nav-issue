import { useEffect, useState } from 'react';
import { AuthContextProps } from 'react-oidc-context';

type AuthControllerProps = Partial<AuthContextProps> &
  React.PropsWithChildren<{
    isAutoLogin?: boolean;
    isPublicRoute?: boolean;
    onAuthenticatedPublicRoute?: () => void;
  }>;

const AuthController = ({
  error,
  isLoading,
  isAuthenticated,
  signinRedirect,
  isAutoLogin,
  isPublicRoute,
  onAuthenticatedPublicRoute,
  children,
}: AuthControllerProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoading || error) return;

    if (isAuthenticated && isPublicRoute && !isAutoLogin) {
      onAuthenticatedPublicRoute();
      return;
    }

    if (!isAuthenticated && !isPublicRoute) {
      signinRedirect();
      return;
    }

    setIsReady(true);
  }, [isAuthenticated, isLoading, isPublicRoute]);

  useEffect(() => {
    if (error) {
      signinRedirect();
    }
  }, [error]);

  if (process.env.NEXT_PUBLIC_IS_TEST_ENV) return children;

  if (isReady && (isAuthenticated || isPublicRoute)) {
    return children;
  }
};

export default AuthController;
