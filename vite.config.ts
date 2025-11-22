import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    // host: "0.0.0.0",
    host: "localhost",
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    strictPort: true,
    hmr: {
      port: 24678,
    },
    allowedHosts: [
      '*',
      'gravindo-web.akatechvision.my.id'  // 👈 Tambahkan domain custom kamu di sini
    ]
  },
  build: {
    outDir: "dist/spa",
  },
  // plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
