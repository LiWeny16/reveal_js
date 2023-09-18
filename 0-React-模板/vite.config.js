import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build/P3"
  },
  base: "./",
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      "@Plugin": resolve(__dirname, "./plugin"),
      "@Assets" : resolve(__dirname, "./assets"),
      "@Main":resolve(__dirname,"src/Components/Main"),
      "@Main/*":resolve(__dirname,"src/Components/Main/*")
    }
  }
})
