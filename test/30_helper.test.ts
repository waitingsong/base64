/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')
import {
  TextDecoder as NodeTextDecoder,
  TextEncoder as NodeTextEncoder,
} from 'util'

import { b64decode, ErrMsg } from '../src/index'
import {
  b64fromURLSafe,
  b64toURLSafe,
  isArrayBuffer,
  isUint8Array,
  parseDecodeInputBase64,
  parseEncodeInputString,
  parseTextDecoder,
  parseTextEncoder,
  testB64,
  testB64URL,
  validateB64,
  validateB64URL,
  validB64Chars,
  validB64URLChars,
} from '../src/lib/helper'

import {
  input44,
  input9,
  inputArrayBuffer,
  inputBase64CharsInvalid,
  inputBase64Invalid,
  inputBase64URLCharsInvalid,
  inputBase64URLInvalid,
  inputInvalidEncoderAndDecoder,
  inputTypedArrayExcludingUint8Array,
  inputUint8Array,
  inputURLSafe,
  inputURLSafe2,
} from './config'


const filename = basename(__filename)
const mods = rewire('../src/lib/helper')

describe(filename, () => {

  describe('parseDecodeInputBase64() works', () => {
    it('with invalid input', () => {
      [1, {}, null, true].forEach(input => {
        try {
          // @ts-ignore
          parseDecodeInputBase64(input)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.notString),
            ex.message,
          )
        }
      })

      input9.forEach(input => {
        try {
          // @ts-ignore
          parseDecodeInputBase64(input)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.notValidB64String),
            ex.message,
          )
        }
      })
    })
  })


  describe('parseTextEncoder() works', () => {
    it('with valid input', () => {
      const dummy = () => {}
      // @ts-ignore
      assert(parseTextEncoder(dummy) === dummy)
      assert(parseTextEncoder(NodeTextEncoder) === NodeTextEncoder)
    })

    it('without input', () => {
      // @ts-ignore
      if (typeof TextEncoder === 'undefined' && typeof global.TextEncoder === 'undefined') {
        // nodejs prior v11
        // @ts-ignore
        global.TextEncoder = NodeTextEncoder
        const ret = parseTextEncoder()
        assert(ret === NodeTextEncoder)
        // @ts-ignore
        delete global.TextEncoder
      }
      else {  // node.js v11+
        const ret = parseTextEncoder()
        assert(ret === NodeTextEncoder)

        // @ts-ignore
        const orig = global.TextEncoder
        try {
          // @ts-ignore
          global.TextEncoder = null
          parseTextEncoder()
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          // @ts-ignore
          global.TextEncoder = orig
          assert(
            ex.message && ex.message.includes(ErrMsg.textEncoderUndefined),
            ex.message,
          )
        }
      }
    })

    it('with invalid input', () => {
      inputInvalidEncoderAndDecoder.forEach(value => {
        try {
          // @ts-ignore
          parseTextEncoder(value)
          // node.js v11+ exports global TextEncoder
          if (typeof TextEncoder === 'function') {
            assert(true)
          }
          else {  // prior of v11
            assert(false, 'Should throw error, but NOT. ' + value.toString())
          }
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.textEncoderUndefined),
            ex.message,
          )
        }
      })
    })
  })


  describe('parseTextDecoder() works', () => {
    it('with valid input', () => {
      const dummy = () => {}
      // @ts-ignore
      assert(parseTextDecoder(dummy) === dummy)
      assert(parseTextDecoder(NodeTextDecoder) === NodeTextDecoder)
    })

    it('without input', () => {
      // @ts-ignore
      if (typeof TextDecoder === 'undefined' && typeof global.TextDecoder === 'undefined') {
        // nodejs prior v11
        // @ts-ignore
        global.TextDecoder = NodeTextDecoder
        const ret = parseTextDecoder()
        assert(ret === NodeTextDecoder)
        // @ts-ignore
        delete global.TextDecoder
      }
      else {  // node.js v11+
        const ret = parseTextDecoder()
        assert(ret === NodeTextDecoder)

        // @ts-ignore
        const orig = global.TextDecoder
        try {
          // @ts-ignore
          global.TextDecoder = null
          parseTextDecoder()
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          // @ts-ignore
          global.TextDecoder = orig
          assert(
            ex.message && ex.message.includes(ErrMsg.textDecoderUndefined),
            ex.message,
          )
        }
      }
    })

    it('with invalid input', () => {
      inputInvalidEncoderAndDecoder.forEach(value => {
        try {
          // @ts-ignore
          parseTextDecoder(value)
          if (typeof TextDecoder === 'function') {  // v11+
            assert(true)
          }
          else {
            assert(false, 'Should throw error, but NOT')
          }
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.textDecoderUndefined),
            ex.message,
          )
        }
      })
    })
  })


  describe('isArrayBuffer() works', () => {
    it('with valid input', () => {
      inputArrayBuffer.forEach(value => {
        const ret = isArrayBuffer(value)
        assert(ret === true)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...input44,
        ...inputTypedArrayExcludingUint8Array,
        ...inputUint8Array,
      ]
      arr.forEach(value => {
        const ret = isArrayBuffer(value)
        assert(ret === false)
      })
    })
  })


  describe('isUint8Array() works', () => {
    it('with valid input', () => {
      inputUint8Array.forEach(value => {
        const ret = isUint8Array(value)
        assert(ret === true)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...input44,
        ...inputTypedArrayExcludingUint8Array,
        ...inputArrayBuffer,
      ]
      arr.forEach(value => {
        const ret = isUint8Array(value)
        assert(ret === false)
      })
    })
  })


  describe('validateB64() works', () => {
    it('with valid input', () => {
      ['QQ=='].forEach(b64 => {
        validateB64(b64)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...inputBase64CharsInvalid,
        ...inputBase64Invalid,
      ]
      arr.forEach(b64 => {
        try {
          validateB64(<any> b64)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


  describe('testBase64() works', () => {
    it('with valid input', () => {
      ['QQ=='].forEach(b64 => {
        const ret = testB64(b64)
        assert(ret === true)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...inputBase64CharsInvalid,
        ...inputBase64Invalid,
      ]
      arr.forEach(b64 => {
        const ret = testB64(<any> b64)
        assert(ret !== true, b64.toString())
      })

    })
  })


  describe('validBase64Chars() works', () => {
    it('with valid input', () => {
      ['QQ=='].forEach(b64 => {
        const ret = validB64Chars(b64)
        assert(ret === true, b64.toString())
      })
    })

    it('with invalid input', () => {
      const arr = inputBase64CharsInvalid
      arr.forEach((b64, idx) => {
        const ret = validB64Chars(<any> b64)
        assert(ret === false, `${ b64.toString()} : idx`)
      })
    })
  })


  describe('validateB64URL() works', () => {
    it('with valid input', () => {
      ['QQ'].forEach(b64 => {
        validateB64URL(b64)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...inputBase64URLCharsInvalid,
        ...inputBase64CharsInvalid,
        ...inputBase64URLInvalid,
      ]
      arr.forEach(b64 => {
        try {
          validateB64URL(<any> b64)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


  describe('testBase64URL() works', () => {
    it('with valid input', () => {
      ['QQ'].forEach(b64 => {
        const ret = testB64URL(b64)
        assert(ret === true)
      })
    })

    it('with invalid input', () => {
      const arr = [
        ...inputBase64URLCharsInvalid,
        ...inputBase64CharsInvalid,
        ...inputBase64URLInvalid,
      ]
      arr.forEach((b64: any) => {
        const ret = testB64URL(b64)
        assert(ret !== true, b64.toString())
      })
    })
  })


  describe('validBase64URLChars() works', () => {
    it('with valid input', () => {
      ['Q'].forEach(b64 => {
        const ret = validB64URLChars(b64)
        assert(ret === true)
      })
    })

    it('with invalid input', () => {
      const arr = inputBase64URLCharsInvalid
      arr.forEach(b64 => {
        const ret = validB64URLChars(b64)
        assert(ret === false, b64)
      })
    })
  })


  describe('b64toURLSafe() works', () => {
    it('with valid input', () => {
      inputURLSafe.forEach(([str, b64, b64url]) => {
        const ret = b64toURLSafe(b64)
        const b64node = Buffer.from(str).toString('base64')
        assert(ret === b64url, `"${ret}" !== "${b64url}"`)
        assert(b64 === b64node, `${b64} !== ${b64node}`)
      })
    })

    it('with invalid input', () => {
      inputURLSafe2.forEach(b64 => {
        try {
          b64toURLSafe(b64)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


  describe('b64fromURLSafe() works', () => {
    it('with valid input', () => {
      inputURLSafe.forEach(([str, b64, b64url]) => {
        const bb = b64fromURLSafe(b64url)
        const b64node = Buffer.from(str).toString('base64')
        const str2 = b64decode(bb)
        assert(bb === b64, `"0: ${bb}" !== "${b64}"`)
        assert(b64 === b64node, `1: ${b64} !== ${b64node}`)
        assert(str2 === str, `2: ${str2} !== ${str}`)
      })
    })

    it('with invalid input', () => {
      inputURLSafe2.forEach(b64 => {
        try {
          b64fromURLSafe(b64)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


})
