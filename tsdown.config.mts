import { defineConfig } from "tsdown";

export default defineConfig({
	format: "esm",
	fixedExtension: false,
	unbundle: true,
	platform: "node",
});
