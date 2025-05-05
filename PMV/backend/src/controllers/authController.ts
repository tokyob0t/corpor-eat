import users from "../data/users.json";
import type { User } from "../types/index.d.ts";
import { writeFile } from "fs/promises";
import type { stringify } from "querystring";
import type { json } from "stream/consumers";

export const loginHandler = async (req: Request): Promise<Response> => {
	const { email, password } = await req.json();

	const user = <User | undefined>(
		users.find((u: User) => u.email === email && u.password === password)
	);

	if (!user)
		return new Response(JSON.stringify({ message: "Invalid credentials" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});

	const token = `token-${user.email}`;

	return new Response(
		JSON.stringify({ token, user: { email: user.email, role: user.role } }),
		{
			status: 200,
			headers: { "Content-Type": "application/json" },
		},
	);
};

export const registerHandler = async (req: Request): Promise<Response> => {
	try {
		const { email, password } = await req.json();

		if (!email || !password)
			return new Response(
				JSON.stringify({ message: "Faltan campos requeridos" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);

		const exists = users.some((u: User) => u.email === email);

		if (exists)
			return new Response(JSON.stringify({ message: "El usuario ya existe" }), {
				status: 409,
				headers: { "Content-Type": "application/json" },
			});

		const newUser: User = {
			email,
			password,
            "user"
		};

		users.push(newUser);

		await writeFile(
			"src/data/users.json",
			JSON.stringify(users, null, 2),
			"utf-8",
		);

		const token = `token-${email}`;

		return new Response(
			JSON.stringify({
				token,
				user: { email: newUser.email, role: newUser.role },
			}),
			{
				status: 201,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (err) {
		console.error("Error en registerHandler:", err);
		return new Response(
			JSON.stringify({ message: "Error interno del servidor" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
