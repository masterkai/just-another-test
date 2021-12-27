/**
 * 實作 Promise.all 函數
 */

export const PromiseAll = (array) => {
  // TODO
  return Promise.all(array)
};

class MyPromise {
  state = 'pending'; // status pending, fulfilled, rejected
  value = undefined // 成功後的值
  reason = undefined; // 失敗後的值

  resolveCallbacks = [] // pending 狀態下，存儲成功的回調
  rejectCallbacks = [] // pending 狀態下，存儲失敗的回調

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }

    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }

  }

  then(fn1, fn2) {
    //當pending狀態下，fn1, fn2會被儲存在callback中
    fn1 = typeof fn1 !== 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 !== 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })

        this.rejectCallbacks.push(() => {
          try {
            const newValue = fn2(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
      })
    }

    if (this.state === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
    }
    if (this.state === 'rejected') {
      return new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          resolve(newReason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }

  catch(fn) {
    return this.then(null, fn)
  }


}
