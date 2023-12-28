import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import swc from "unplugin-swc";

export default defineConfig({
  test: {
    globals: true,
    root: "./",
  },
  plugins: [swc.vite(), tsconfigPaths()],
});
