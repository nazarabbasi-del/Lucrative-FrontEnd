import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Resolve esbuild normally (works after a standard `npm install`). Falls back
// to a known local path only inside the sandbox this project was built in.
let esbuildPkg;
try {
  esbuildPkg = (await import('esbuild')).default ?? (await import('esbuild'));
} catch {
  esbuildPkg = (await import('/home/claude/.npm-global/lib/node_modules/tsx/node_modules/esbuild/lib/main.js')).default;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes('--watch');

const outdir = path.join(__dirname, 'dist');
// Create dist/assets (not just dist) up front. esbuild normally makes this
// itself once it writes bundle output, but on a completely fresh checkout
// `--watch` mode's first copyStatic() call can race ahead of that and try to
// copy styles.css into an assets/ folder that doesn't exist yet.
fs.mkdirSync(path.join(outdir, 'assets'), { recursive: true });

// Each top-level page gets its own HTML file + its own JS entry point (no
// client-side router — plain static multi-page site, same pattern as the
// original single-page build). Add a { html, entry, out } item here for
// every new page; copyStatic() below picks it up automatically.
const pages = [
  { html: 'index.html', entry: 'src/main.jsx', out: 'bundle' },
  { html: 'governance.html', entry: 'src/main-governance.jsx', out: 'governance' },
  { html: 'stratum.html', entry: 'src/main-stratum.jsx', out: 'stratum' },
  { html: 'loft.html', entry: 'src/main-loft.jsx', out: 'loft' },
  { html: 'loft-marketing.html', entry: 'src/main-loft-marketing.jsx', out: 'loft-marketing' },
  { html: 'quotebase.html', entry: 'src/main-quotebase.jsx', out: 'quotebase' },
  { html: 'pricing.html', entry: 'src/main-pricing.jsx', out: 'pricing' },
];

const buildOptions = {
  entryPoints: pages.map((p) => ({ in: path.join(__dirname, p.entry), out: p.out })),
  bundle: true,
  outdir: path.join(outdir, 'assets'),
  publicPath: 'assets/',
  minify: !watch,
  sourcemap: true,
  jsx: 'automatic',
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
  },
  assetNames: 'img/[name]-[hash]',
  logLevel: 'info',
  target: ['chrome100', 'safari15', 'firefox100'],
};

// copy static files
function copyStatic() {
  for (const p of pages) {
    fs.copyFileSync(path.join(__dirname, p.html), path.join(outdir, p.html));
  }
  fs.copyFileSync(path.join(__dirname, 'src/styles.css'), path.join(outdir, 'assets/styles.css'));
}

if (watch) {
  const ctx = await esbuildPkg.context(buildOptions);
  await ctx.watch();
  copyStatic();
  // esbuild's watcher only tracks files it bundles (src/**/*.jsx, etc). It
  // does NOT know about styles.css or index.html since those are just
  // copied, not bundled — so without this, editing CSS/HTML and saving
  // would rebuild nothing and the site would look unchanged. Watch them
  // directly and re-copy on every save.
  fs.watch(path.join(__dirname, 'src/styles.css'), () => {
    copyStatic();
    console.log('styles.css changed -> copied to dist/');
  });
  for (const p of pages) {
    fs.watch(path.join(__dirname, p.html), () => {
      copyStatic();
      console.log(`${p.html} changed -> copied to dist/`);
    });
  }
  console.log('Watching for changes...');
} else {
  await esbuildPkg.build(buildOptions);
  copyStatic();
  console.log('Build complete.');
}