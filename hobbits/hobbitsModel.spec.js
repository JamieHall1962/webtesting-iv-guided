const request = require("supertest");
const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

describe("Hobbits Model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("hobbits").truncate();
    });
    it("should insert the provided hobbit", async () => {
      const hobbit = await Hobbits.insert({ name: "Sam" });
      expect(hobbit.name).toBe("Sam");
    });
    it("should insert the provided hobbits", async () => {
        await Hobbits.insert({ name: "Sam" });
        await Hobbits.insert({ name: "Gaffer" });
        const hobbits = await db('hobbits');

        expect(hobbits).toHaveLength(2);
      });
  });
});
