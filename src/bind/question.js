/**
 * 實作 Function.prototype.bind()
 */
Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
    return fn.apply(context, [...args1, ...arg2])
  }
};

export const bind = function (func, context) {
  // TODO

  for (const [key, value] of Object.entries(arguments)) {
    if (typeof value === "string") {
      context = value
      // return function (args) {
      //   return func.apply(this, [context,args])
      // }
      return func.mybind(this, context)
    }
    if (typeof value === "object" && value !== null) {
      context = value
      // return function () {
      //   return func.call(context)
      // }
      return func.mybind(context)
    }
  }
};



// const func = function (a, b) {
//   return a + b;
// };
//
// const func2 = function () {
//   return this.foo;
// };
//
// const boundFunc = bind(func, null, "foo");
// boundFunc('bar')//?
// const boundFunc2 = bind(func2, { foo: "bar" })
// boundFunc2()//?
