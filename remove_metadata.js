import { visit } from "ast-types";
import fs from "fs";
import path from "path";
import recast from "recast";

// Read mapstyle.json and get layer order
const mapstyleJsonPath = path.join(process.cwd(), "src", "mapstyle.json");
const mapstyleJson = JSON.parse(fs.readFileSync(mapstyleJsonPath, "utf8"));
const jsonLayerOrder = mapstyleJson.layers.map((layer) => layer.id);

// Read mapstyleContext.tsx
const mapstyleContextPath = path.join(
	process.cwd(),
	"src",
	"mapstyleContext.tsx",
);
const mapstyleContextContent = fs.readFileSync(mapstyleContextPath, "utf8");

// Parse the AST
const ast = recast.parse(mapstyleContextContent, {
	parser: recast.parsers.typescript,
});

// Traverse the AST to find the layers array in mapsStyle
let layersArray = null;
visit(ast, {
	visitObjectExpression(path) {
		// Look for mapsStyle object
		if (
			path.node.properties.some(
				(prop) => prop.key.name === "version" && prop.value.value === 8,
			)
		) {
			// Found mapsStyle
			const layersProp = path.node.properties.find(
				(prop) => prop.key.name === "layers",
			);
			if (layersProp && layersProp.value.type === "ArrayExpression") {
				layersArray = layersProp.value;
				// Get current layers
				const currentLayers = layersArray.elements.map((el) => {
					const idProp = el.properties.find((p) => p.key.name === "id");
					return { id: idProp.value.value, node: el };
				});
				// Reorder: first, layers in jsonLayerOrder, then extras
				const reordered = [];
				const used = new Set();
				jsonLayerOrder.forEach((id) => {
					const layer = currentLayers.find((l) => l.id === id);
					if (layer) {
						reordered.push(layer.node);
						used.add(id);
					}
				});
				// Add remaining layers not in jsonLayerOrder
				currentLayers.forEach((layer) => {
					if (!used.has(layer.id)) {
						reordered.push(layer.node);
					}
				});
				// Replace the array elements
				layersArray.elements = reordered;
			}
		}
		this.traverse(path);
	},
});

// Generate the new code
const newContent = recast.print(ast).code;

// Write back to file
fs.writeFileSync(mapstyleContextPath, newContent, "utf8");

console.log("Layer order updated in mapstyleContext.tsx");
