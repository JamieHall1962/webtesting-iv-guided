const request = require("supertest");
const server = require("./server");

describe("<server />", () => {
  it("should set testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {

// these next two its are exactly the same 1st uses async/await 2nd uses promises


    it("should return 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should return JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

    it('should return { api: "up" }', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ api: 'up' });
    })


  });
});
