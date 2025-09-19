import fs from "fs";

const filePath = "./src/mapstyle.json";

function hasPipe(obj) {
	if (typeof obj === "string") {
		return obj.includes("|");
	}
	if (Array.isArray(obj)) {
		return obj.some((item) => hasPipe(item));
	}
	if (obj && typeof obj === "object") {
		return Object.values(obj).some((value) => hasPipe(value));
	}
	return false;
}

fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
		return;
	}

	const style = JSON.parse(data);

	if (style.layers) {
		style.layers = style.layers.filter((layer) => hasPipe(layer));
	}

	const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, -5); // e.g., 2023-09-18T12-00-00
	const newFilePath = `./src/mapstyle_${timestamp}.json`;

	fs.writeFile(newFilePath, JSON.stringify(style, null, 2), "utf8", (err) => {
		if (err) {
			console.error("Error writing file:", err);
			return;
		}
		console.log(`Layers without "|" removed. New file created: ${newFilePath}`);
	});
});
