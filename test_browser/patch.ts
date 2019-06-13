// @ts-nocheck

// @ts-ignore
if (!Int8Array.__proto__.from) {
  // tslint:disable-next-line: only-arrow-functions
  (function() {
    // @ts-ignore
    Int8Array.__proto__.from = function(obj: any, func: any, thisObj: any) {

      // @ts-ignore
      const typedArrayClass = Int8Array.__proto__
      if (typeof this !== 'function') {
        throw new TypeError('# is not a constructor')
      }
      if (this.__proto__ !== typedArrayClass) {
        throw new TypeError('this is not a typed array.')
      }

      // tslint:disable-next-line: only-arrow-functions
      func = func || function(elem: any) {
        return elem
      }

      if (typeof func !== 'function') {
        throw new TypeError('specified argument is not a function')
      }

      obj = Object(obj)
      if (!obj.length) {
        return new this(0)
      }
      let copy_data = []
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < obj.length; i++) {
        copy_data.push(obj[i])
      }

      copy_data = copy_data.map(func, thisObj)

      const typed_array = new this(copy_data.length)
      for (let i = 0; i < typed_array.length; i++) {
        typed_array[i] = copy_data[i]
      }
      return typed_array
    }
  })()
}

// @ts-ignore
// if (!Uint8Array.prototype.slice) {
//   Object.defineProperty(Uint8Array.prototype, 'slice', {
//     value(begin: number, end: number) {
//       return new Uint8Array(Array.prototype.slice.call(this, begin, end))
//     },
//   })
// }

export const _dummy = 1
