import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Serve from your src folder in dev
  root: resolve(__dirname, "joshhorn/core/static/core/src"),

  resolve: {
    alias: {
      "~": resolve(__dirname, "node_modules")
    }
  },

  build: {
    // Output into Django static dist/
    outDir: resolve(__dirname, "joshhorn/core/static/core/dist"),
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    manifest: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "joshhorn/core/static/core/src/js/main.js"),
        styles: resolve(__dirname, "joshhorn/core/static/core/src/css/main.css")
      },

      output: {
        // Stable names for your two ENTRY files
        entryFileNames: (chunk) => {
          if (chunk.name === "main") return "js/core.js";
          if (chunk.name === "styles") return "js/styles-entry.js"; // tiny JS stub, OK
          return "js/[name]-[hash].js";
        },

        // SAFE chunk output (never a single file)
        chunkFileNames: "js/chunks/[name]-[hash].js",

        // Force the built CSS to your exact path/name
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/core.css";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  }
});
