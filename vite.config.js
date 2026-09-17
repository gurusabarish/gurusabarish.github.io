import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { unlink } from 'node:fs/promises';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

const root = import.meta.dirname;

/**
 * Inlines the built CSS bundle(s) directly into each HTML entry as a
 * <style> tag and removes the now-unused external CSS file from the
 * output. The whole stylesheet is only a few KB, so inlining it removes
 * a render-blocking network request entirely instead of the browser
 * having to fetch it before first paint.
 */
function inlineCss() {
  const inlinedFileNames = new Set();

  return {
    name: 'inline-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;

        for (const [fileName, asset] of Object.entries(ctx.bundle)) {
          if (asset.type !== 'asset' || !fileName.endsWith('.css')) continue;

          const baseName = fileName.split('/').pop();
          const linkTagRe = new RegExp(`<link[^>]+href="[^"]*${baseName}"[^>]*>`, 'g');

          if (linkTagRe.test(html)) {
            inlinedFileNames.add(fileName);
            html = html.replace(linkTagRe, `<style>${asset.source}</style>`);
          }
        }

        return html;
      },
    },
    // The internal Vite HTML-writing plugin runs its own generateBundle
    // hook (which is what invokes transformIndexHtml) after this plugin's
    // generateBundle hook, so the CSS files can't be deleted from the
    // bundle at that stage yet. Once every bundle has been written to
    // disk (writeBundle), it's safe to remove the now-unreferenced files.
    async writeBundle(options, bundle) {
      const outDir = options.dir ?? resolve(root, 'dist');
      for (const fileName of inlinedFileNames) {
        if (bundle[fileName]) {
          await unlink(resolve(outDir, fileName));
        }
      }
    },
  };
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [inlineCss(), ViteMinifyPlugin()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        404: resolve(root, '404.html'),
      },
    },
  },
});
