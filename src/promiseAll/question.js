/**
 * 實作 Promise.all 函數
 */

export const PromiseAll = (array) => {
  // TODO
  return Promise.all(array)
};

class Promises{
  constructor(fn){
    this.state = 0; //pending
    this.value = undefined;
    this.todos = [];
    fn(value=>this.resolve(value), reason=>this.reject(reason));
    /*
     * fn (成功的resolver, 失敗的resolver);
     * 無論成功失敗都會讓狀態改變 我們接下來繼續定義
     */
  }

  resolve(value){
    if(this.state!==0) return;
    this.state = 1;
    this.value = value;
    this.run()
  }
  reject(reason){
    if(this.state!==0) return;
    this.state = 2;
    this.value = reason;
    this.run()
  }

  then(onFulfilled, onRejected) {
    let todo = new Promises(() => {});
    todo.onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : null;
    todo.onRejected =
      typeof onRejected === 'function' ? onRejected : null;
    this.todos.push(todo);
    this.run();
    return todo;
  }

  run() {
    let callbackName, resolver;
    if (this.state === 0) return;
    if (this.state === 1) {
      callbackName = 'onFulfilled';
      resolver = 'resolve';
    }
    if (this.state === 2) {
      callbackName = 'onRejected';
      resolver = 'reject';
    }
    setTimeout(() => {
      this.todos.forEach(todo => {
        try {
          let cb = consumer[callbackName];
          if (cb)
            todo.resolve(cb(this.value));
          else
            todo[resolver](this.value);
        }catch (e){
          consumer.reject(e);
        }
      });
    });
  }
}
