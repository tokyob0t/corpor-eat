import { readJSON, writeJSON } from "../utils/fileUtils.ts";

const FILE_PATH = "./src/data/reservations.json";

export async function getReservations(_req: Request): Promise<Response> {
	const reservations = await readJSON(FILE_PATH);
	return new Response(JSON.stringify(reservations), {
		headers: { "Content-Type": "application/json" },
	});
}

export async function createReservation(req: Request): Promise<Response> {
	const body = await req.json();
	const reservations = await readJSON(FILE_PATH);
	reservations.push(body);
	await writeJSON(FILE_PATH, reservations);
	return new Response(JSON.stringify({ success: true }), {
		headers: { "Content-Type": "application/json" },
	});
}
