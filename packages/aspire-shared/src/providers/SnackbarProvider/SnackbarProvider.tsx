'use client';

import { Snackbar, SnackbarProps } from '@aspire/ui';
import { createContext, useContext, useState } from 'react';

type SnackbarOptions = {
  open: boolean;
  message?: string;
  color?: SnackbarProps['color'];
  variant?: SnackbarProps['variant'];
  dataTestId?: string;
};

type SnackbarProviderContextValue = {
  showSnackbar: (options: Omit<SnackbarOptions, 'open'>) => void;
};

const SnackbarContext = createContext<SnackbarProviderContextValue>({
  showSnackbar: () => {},
});

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarOptions>({
    open: false,
  });

  const showSnackbar: SnackbarProviderContextValue['showSnackbar'] = ({
    message,
    color,
    variant,
    dataTestId = 'snackbar',
  }) => {
    setSnackbar({ open: true, message, color, variant, dataTestId });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        data-testid={snackbar.dataTestId}
        open={snackbar.open}
        color={snackbar.color}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        {snackbar.message}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

export const useSnackbar = () => useContext(SnackbarContext);
