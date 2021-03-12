const { build } = require('esbuild');
const chokidar = require('chokidar');
const fs = require('fs-extra');

const liveServer = require('live-server');

(async () => {
  await build({
    color: true,
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    minify: false,
    sourcemap: true,
    outdir: 'build',
    incremental: true,
    entryPoints: ['./src/options.tsx'],
    bundle: true,
    watch: true,
    treeShaking: 'ignore-annotations',
  });

  fs.copySync('static', 'build');
  chokidar.watch('static').on('all', () => {
    fs.copy('static', 'build');
  });

  liveServer.start({
    root: './build',
    port: 8000,
  });
})();
