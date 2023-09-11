import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
			output: {
				assetFileNames: 'assets/remote-asset-[name].css',
			}
		}
  },
  plugins: [
    vue(),
    federation({
      name: "cart-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/components/Cart.vue",
      },
    }),
  ],
});
