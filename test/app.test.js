const request = require("supertest");
const app = require("../src/app");

describe("Todo API", () => {
  test("GET /health should return OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });

  test("GET /todos should return todos", async () => {
    const response = await request(app).get("/todos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
