import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      remotes: {
        'remote-app': { 
          external: `Promise.resolve('http://localhost:4173/assets/remoteEntry.js')`,
          externalType: "promise"
        },
        'remote-app-css': { 
          external: `Promise.resolve('http://localhost:4173/assets/style-140493a4.css')`,
          externalType: "promise"
        },
      },
    }),
  ],
});
