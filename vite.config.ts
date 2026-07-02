import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// NOTE: `base` is intentionally left unset. CI forces the correct GitHub Pages
// base path at build time (`--base=/<repo>/`); locally the app serves from `/`.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
