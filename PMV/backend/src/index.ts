import { serve } from "bun";
import { authRouter } from "./routes/auth";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const server = serve({
	port: 3000,
	async fetch(request: Request) {
		const { pathname } = new URL(request.url);

		if (request.method === "OPTIONS")
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});

		if (pathname === "/api/login" && request.method === "POST")
			return authRouter(request);

		if (pathname === "/api/register" && request.method === "PUT")
			return authRouter(request);

		return new Response("Metodo no soportado", {
			status: 405,
			headers: corsHeaders,
		});
	},
});

console.log(`Listening on http://localhost:${server.port}`);
