import { defaultConfig } from '@/config';

type CustomerConfig = typeof defaultConfig;

declare module '@aspire/shared' {
  export interface Config extends CustomerConfig {}
}
