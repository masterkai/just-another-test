import { PromiseAll } from "./question";

const createPromise = (value, timeout = 10, error = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (error ? reject(value) : resolve(value)), timeout)
  );

describe("PromiseAll", () => {
  test("test case 1", async () => {
    expect(
      await PromiseAll([
        createPromise("h", 20),
        createPromise("e", 33),
        createPromise("l", 60),
        createPromise("l", 10),
        createPromise("o", 40)
      ])
    ).toEqual(["h", "e", "l", "l", "o"]);
  });
});
