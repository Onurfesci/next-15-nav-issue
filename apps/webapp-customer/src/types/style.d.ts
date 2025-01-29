import { Breakpoint } from '@aspire/ui';

declare global {
  type BreakpointSizes = Partial<{ [K in Breakpoint]: number }>;
}
