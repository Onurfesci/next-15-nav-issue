import { NextConfig } from 'next';
import { cspMapping } from './withContentSecurityPolicy';

declare function withAspireNextConfig(config?: NextConfig): NextConfig;
declare function withSanityNextConfig(config?: NextConfig): NextConfig;
declare function withContentSecurityPolicy(
  cspType: keyof typeof cspMapping,
  config?: NextConfig
): NextConfig;

export default withAspireNextConfig;
export { withSanityNextConfig };
export { withContentSecurityPolicy };
