import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      sourcemap: mode !== "production", // Disable source maps in production
    },
  };
});
