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

import { ErrorMsg } from '../src/index'
import {
  isArrayBuffer,
  isUint8Array,
  parseDecodeInputBase64,
  parseEncodeInputString,
  parseTextDecoder,
  parseTextEncoder,
  testB64,
  testB64URL,
  validateEncoder,
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
            ex.message && ex.message.includes(ErrorMsg.notString),
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
            ex.message && ex.message.includes(ErrorMsg.notValidB64String),
            ex.message,
          )
        }
      })
    })
  })


  describe('validateEncoder() works', () => {
    it('with valid input', () => {
      [1, 'a', {}, false, true, (void 0)].forEach(value => {
        assert(typeof validateEncoder(value) === 'undefined')
      })
    })

    it('with invalid input', () => {
      try {
        // @ts-ignore
        validateEncoder(null)
        assert(false, 'Should throw error, but NOT')
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.textEncoderUndefined),
          ex.message,
        )
      }
    })
  })


  describe('parseTextEncoder() works', () => {
    it('with valid input', () => {
      const ret = parseTextEncoder(NodeTextEncoder)
      assert(ret === NodeTextEncoder)
    })

    it('with invalid input', () => {
      try {
        // @ts-ignore
        const ret = parseTextEncoder(null)
        // node.js v11+ exports global TextEncoder
        if (typeof TextEncoder === 'function') {
          assert(true)
        }
        else {
          assert(false, 'Should throw error, but NOT')
        }
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.textEncoderUndefined),
          ex.message,
        )
      }
    })
  })

  describe('parseTextDecoder() works', () => {
    it('with valid input', () => {
      const ret = parseTextDecoder(NodeTextDecoder)
      assert(ret === NodeTextDecoder)
    })

    it('with invalid input', () => {
      try {
        // @ts-ignore
        const ret = parseTextDecoder(null)
        // node.js v11+ exports global TextDecoder
        if (typeof TextDecoder === 'function') {
          assert(true)
        }
        else {
          assert(false, 'Should throw error, but NOT')
        }
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.textDecoderUndefined),
          ex.message,
        )
      }
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


})
