import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "@lmiller1990/cypress-ct-qwik",
      bundler: "vite",
    },
  },
});
