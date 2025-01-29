import { Config } from '@aspire/shared';

// Function overloads
function getConfig(): Config;
function getConfig<K extends keyof Config>(key: K): Config[K];

function getConfig<K extends keyof Config>(
  key?: K
): Config | Config[K] | undefined {
  if (typeof window !== 'undefined') {
    return key ? window.__CONFIG__[key] : window.__CONFIG__;
  }
  return undefined;
}

export default getConfig;
