import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello, CI/CD!");
});

export default app;
