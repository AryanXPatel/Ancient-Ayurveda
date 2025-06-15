import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Ancient-Ayurveda/", // This is important for GitHub Pages!
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
