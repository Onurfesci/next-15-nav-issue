// svgr.d.ts
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export default FC<SVGProps<SVGSVGElement>>;
}
