import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 3000,
  },
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
        "@layouts": resolve(__dirname, "./src/layouts"),
        "@components": resolve(__dirname, "./src/components"),
      },
    },
  },
});
