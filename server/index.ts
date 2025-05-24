// server/index.ts
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// __dirname helper for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logger for /api/*
app.use((req, res, next) => {
  const start = Date.now();
  const url = req.path;
  let jsonBody: any;
  const origJson = res.json;
  res.json = function (body, ...args) {
    jsonBody = body;
    return origJson.call(this, body, ...args);
  };
  res.on("finish", () => {
    if (url.startsWith("/api")) {
      let line = `${req.method} ${url} ${res.statusCode} in ${Date.now() - start}ms`;
      if (jsonBody) line += ` :: ${JSON.stringify(jsonBody)}`;
      if (line.length > 80) line = line.slice(0, 79) + "…";
      log(line);
    }
  });
  next();
});

(async () => {
  // 1) Mount your API routes
  await registerRoutes(app);

  // 2) Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    res.status(status).json({ message: err.message || "Internal Server Error" });
    throw err;
  });

  // 3) Dev vs. Prod
  if (app.get("env") === "development") {
    // Vite HMR in dev
    await setupVite(app);
  } else {
    // Serve the built React app in prod
    const distPath = path.resolve(__dirname, "../dist/public");
    if (!fs.existsSync(distPath)) {
      throw new Error(`Missing build dir: ${distPath}`);
    }
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }
})();

export default app;
