const svgr = require('esbuild-plugin-svgr');
const tsup = require('tsup');

export default tsup.defineConfig([
  {
    entry: ['src/index.ts'],
    tsconfig: './tsconfig.json',
    clean: true,
    treeshake: true,
    dts: true,
    esbuildPlugins: [svgr()],
    format: ['esm'],
  },
]);
