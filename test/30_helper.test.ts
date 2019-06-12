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
  validateEncoder,
} from '../src/lib/helper'

import { input44, input9, inputArrayBuffer, inputTypedArrayExcludingUint8Array, inputUint8Array } from './config'


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
      const arr = input44.concat(
        inputTypedArrayExcludingUint8Array,
        inputUint8Array,
      )
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
      const arr = input44.concat(
        inputTypedArrayExcludingUint8Array,
        inputArrayBuffer,
      )
      arr.forEach(value => {
        const ret = isUint8Array(value)
        assert(ret === false)
      })
    })
  })


})
