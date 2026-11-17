import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      router: {
        // Router dosyasının tam yolunu belirtmek hatayı çözer
        entry: "./src/router.tsx",
      },
      server: { 
        entry: "./src/server.ts" 
      },
    }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
});
