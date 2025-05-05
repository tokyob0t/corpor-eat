import {
	loginHandler,
	registerHandler,
} from "../controllers/authController.ts";

export function authRouter(req: Request): Promise<Response> {
	if (req.method === "POST") return loginHandler(req);

	if (req.method === "PUT") return registerHandler(req);

	return Promise.resolve(new Response("Method Not Allowed", { status: 405 }));
}
