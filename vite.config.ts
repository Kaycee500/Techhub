import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(async ({ mode }) => {
  // Only include Replit plugins during local Replit development
  const isReplitDev = typeof process.env.REPL_ID !== "undefined" && mode !== "production";
  const plugins = [react()];

  if (isReplitDev) {
    // Dynamically import Replit-only plugins
    const { default: runtimeErrorOverlay } = await import(
      "@replit/vite-plugin-runtime-error-modal"
    );
    const { cartographer } = await import(
      "@replit/vite-plugin-cartographer"
    );
    plugins.push(runtimeErrorOverlay(), cartographer());
  }

  return {
    plugins,
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
  };
});
