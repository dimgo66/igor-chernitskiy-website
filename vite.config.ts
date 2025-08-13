import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Custom plugin to inject "built by scout" tag
function injectBuiltByScoutPlugin() {
  return {
    name: 'inject-built-by-scout',
    transformIndexHtml(html: string) {
      // Get base path from environment
      const base = process.env.VERCEL ? '' : process.env.NODE_ENV === 'production' ? '/igor-chernitskiy-website' : '';
      const scriptTag = `<script defer src="${base}/scout-tag.js"></script>`;
      
      // Inject the script before the closing body tag
      return html.replace('</body>', scriptTag + '\n  </body>');
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectBuiltByScoutPlugin()],
  base: process.env.VERCEL ? '/' : process.env.NODE_ENV === 'production' ? '/igor-chernitskiy-website/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
