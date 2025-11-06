import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello, GitHub Actions!");
});

export default app;
