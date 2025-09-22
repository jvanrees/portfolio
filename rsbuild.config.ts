import { defineConfig } from "@rsbuild/core";
import { pluginCssMinimizer } from "@rsbuild/plugin-css-minimizer";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

// Custom plugin to copy index.html to 404.html after build
class CopyIndexTo404Plugin {
	apply(compiler: any) {
		compiler.hooks.done.tap("CopyIndexTo404Plugin", () => {
			const fs = require("fs");
			const path = require("path");
			const distPath = path.resolve(__dirname, "dist");
			const indexPath = path.join(distPath, "index.html");
			const four04Path = path.join(distPath, "404.html");

			if (fs.existsSync(indexPath)) {
				fs.copyFileSync(indexPath, four04Path);
				console.log(
					"Copied index.html to 404.html for pages deployment. 404 handled by router.",
				);
			}
		});
	}
}

export default defineConfig({
	plugins: [pluginReact(), pluginCssMinimizer()],
	html: {
		title: "Jeff Van Rees",
		favicon: "./favicon.ico",
	},
	output: {
		assetPrefix: "/",
	},
	tools: {
		rspack: {
			plugins: [
				TanStackRouterRspack({ target: "react", autoCodeSplitting: true }),
				new CopyIndexTo404Plugin(),
			],
		},
	},
});
