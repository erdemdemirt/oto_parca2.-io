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
      // router veya server girdilerini elle zorlamıyoruz;
      // TanStack Start src/router.tsx ve src/server.ts'i otomatik bulur.
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
});
