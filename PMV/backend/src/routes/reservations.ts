import {
	getReservations,
	createReservation,
} from "../controllers/reservationsController";

export function reservationsRouter(req: Request): Promise<Response> {
	if (req.method === "GET") return getReservations(req);
	if (req.method === "POST") return createReservation(req);

	return Promise.resolve(new Response("Method Not Allowed", { status: 405 }));
}
