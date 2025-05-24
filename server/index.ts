import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Helper to get __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// simple request/response logger for /api routes
app.use((req, res, next) => {
  const start = Date.now();
  const pathReq = req.path;
  let capturedJson: Record<string, any> | undefined;

  // monkey-patch res.json
  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJson = body;
    return originalJson.apply(this, [body, ...args]);
  };

  res.on("finish", () => {
    if (pathReq.startsWith("/api")) {
      const duration = Date.now() - start;
      let line = `${req.method} ${pathReq} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) {
        line += ` :: ${JSON.stringify(capturedJson)}`;
      }
      if (line.length > 80) line = line.slice(0, 79) + "…";
      log(line);
    }
  });

  next();
});

(async () => {
  // register your /api routes
  await registerRoutes(app);

  // error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    // in dev, let Vite handle HMR & middleware
    await setupVite(app);
  } else {
    // in prod, serve the built React app
    const distPath = path.resolve(__dirname, "../dist/public");
    if (!fs.existsSync(distPath)) {
      throw new Error(`Could not find the build directory: ${distPath}`);
    }
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }
})();

export default app;
