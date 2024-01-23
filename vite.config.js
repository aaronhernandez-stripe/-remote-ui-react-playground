import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const packagesBase = path.join(__dirname, "..", "..", "packages");

function getPathForPackage(packageName) {
  return path.join(packagesBase, packageName, "src");
}

export default defineConfig({
  root: "app",
  plugins: [react({ fastRefresh: false })],
});
