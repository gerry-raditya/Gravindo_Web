import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    server: {
      host: "localhost",
      port: 5173,
      strictPort: true,

      proxy: {
        '/api': {
          target: env.VITE_API_ADMIN || 'http://127.0.0.1:8000', // 👈 dari env
          changeOrigin: true,
          secure: false,
        },
        '/v1': {
          target: env.VITE_API_URL || 'http://localhost:3022',
          changeOrigin: true,
          secure: false,
          // ❌ JANGAN rewrite
          // karena backend memang /v1
        },
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
      },
    },
  };
});
