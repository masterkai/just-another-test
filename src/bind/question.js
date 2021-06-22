/**
 * 實作 Function.prototype.bind()
 */


export const bind = function (func, context) {
  // TODO
  for (const [key, value] of Object.entries(arguments)) {
    if (typeof value === "string") {
      context = value
      return func.bind(this, context)
    }
    if (typeof value === "object" && value !== null) {
      context = value
      return func.bind(context)
    }
  }

};
const func = function (a, b) {
  return a + b;
};

const func2 = function () {
  return this.foo;
};
//
const boundFunc = bind(func, null, "foo")
boundFunc('bar')//?
const boundFunc2 = bind(func2, {foo: "bar"})//?
boundFunc2()//?
