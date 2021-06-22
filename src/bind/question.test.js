import { bind } from "./question";

const func = function (a, b) {
  return a + b;
};

const func2 = function () {
  return this.foo;
};

describe("Bind", () => {
  test("test case - 1", () => {
    const boundFunc = bind(func, null, "foo");
    expect(boundFunc("bar")).toBe("foobar");
    expect(boundFunc("baz")).toBe("foobaz");
  });

  test("test case - 2", () => {
    const boundFunc = bind(func2, { foo: "bar" });
    expect(boundFunc()).toBe("bar");
  });
});
