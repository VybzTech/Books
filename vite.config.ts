import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from ''
// import viteReact from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteReact(),
    //  tailwindcss()
  ],
});
