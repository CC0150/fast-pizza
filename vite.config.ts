import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import EslintPlugin from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), EslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
