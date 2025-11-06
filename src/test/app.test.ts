import { describe, expect, it } from "vitest";
import app from "../app.ts";

describe("GET /", () => {
	it("should return Hello, GitHub Actions!", async () => {
		const res = await app.request("/");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello, GitHub Actions!");
	});
});

describe("GET /:name", () => {
	it("should return Hello, <name> for dynamic route", async () => {
		const name = "Rivath";
		const res = await app.request(`/${name}`);
		expect(res.status).toBe(200);
		expect(await res.text()).toBe(`Hello, ${name}!`);
	});
});
