import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 5180,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 5180,
    strictPort: true,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html"),
        particleBoards: resolve(import.meta.dirname, "particle-boards.html"),
        mdf: resolve(import.meta.dirname, "mdf.html"),
        sdhdmr: resolve(import.meta.dirname, "sdhdmr.html"),
        sdBoilo: resolve(import.meta.dirname, "sd-boilo.html"),
        products: resolve(import.meta.dirname, "products.html"),
        shades: resolve(import.meta.dirname, "shades.html"),
        dealer: resolve(import.meta.dirname, "dealer.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
      },
    },
  },
});
