import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  plugins: [
    vue(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      remotes: {
        "cart-app": {
          external: `Promise.resolve('https://classy-klepon-6ca347.netlify.app/assets/remoteEntry.js')`,
          externalType: "promise",
        },
        "list-product-app": {
          external: `Promise.resolve('https://musical-moonbeam-da3cc5.netlify.app/assets/remoteEntry.js')`,
          externalType: "promise",
        },
      },
    }),
  ],
});
