// Bundles src/main.js with esbuild into dist/ (index.html + main.js + fonts)
import { build } from 'esbuild';
import fs from 'fs';
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist/assets', { recursive: true });
await build({ entryPoints: ['src/main.js'], bundle: true, minify: !process.env.DEV, sourcemap: !!process.env.DEV, format: 'esm', outfile: 'dist/main.js', target: ['es2020', 'safari15'], legalComments: 'none' });
for (const f of fs.readdirSync('assets')) fs.copyFileSync('assets/' + f, 'dist/assets/' + f);
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('src="main.js"', 'src="main.js?v=' + Date.now().toString(36) + '"');
fs.writeFileSync('dist/index.html', html);
for (const f of ['manifest.webmanifest', 'icon.png']) if (fs.existsSync(f)) fs.copyFileSync(f, 'dist/' + f);
fs.writeFileSync('dist/.nojekyll', '');
console.log('built dist/', (fs.statSync('dist/main.js').size / 1024).toFixed(0) + ' KB js');
