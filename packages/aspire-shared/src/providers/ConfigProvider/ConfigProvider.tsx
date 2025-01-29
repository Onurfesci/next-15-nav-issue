'use client';

import { createContext, useContext } from 'react';

export interface Config {
  [key: string]: any;
}

type ConfigProviderContextValue = Config | null;

const ConfigContext = createContext<ConfigProviderContextValue>(null);

const ConfigProvider = ({
  config,
  children,
}: React.PropsWithChildren<{ config: ConfigProviderContextValue }>) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;

export const useConfig = () => useContext(ConfigContext);
