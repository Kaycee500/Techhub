import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Import Replit plugins
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";

// Determine if we're in Replit dev environment
const isReplitDev = typeof process.env.REPL_ID !== "undefined" && process.env.NODE_ENV !== "production";

export default defineConfig({
  plugins: [
    react(),
    // Only include Replit plugins in Replit dev, remove them in production (e.g., Vercel)
    ...(isReplitDev ? [runtimeErrorOverlay(), cartographer()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
