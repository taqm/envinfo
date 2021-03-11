const { build } = require('esbuild');
const fs = require('fs-extra');

fs.copy('static', 'build');
build({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  outdir: 'build',
  minify: true,
  sourcemap: false,
  bundle: true,
  entryPoints: ['./src/options.tsx'],
});
