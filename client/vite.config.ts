import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/perfomance/firewall": {
        target: "http://localhost:5000/perfomance/firewall",
        changeOrigin: true,
      },
    },
  },
});
