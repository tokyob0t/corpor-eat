import { readFile, writeFile } from "fs/promises";

export async function readJSON(path: string) {
	const content = await readFile(path, "utf-8");
	return JSON.parse(content);
}

export async function writeJSON(path: string, data: any) {
	await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
}
