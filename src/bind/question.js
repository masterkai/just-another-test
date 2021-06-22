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
