/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')
import { TextDecoder, TextEncoder } from 'util'

import { b64byteLength, b64encode } from '../src'
import { fromUint8Array } from '../src/lib/from_buffer'
import { toUint8Array } from '../src/lib/to_buffer'

import { input1, input2, input3 } from './config'
import { equal } from './helper'


const filename = basename(__filename)


describe(filename, () => {
  describe('Should fromUint8Array() works with big input', () => {
    it('test1', () => {
      const big = new Uint8Array(128 * 1024 * 1024)

      for (let i = 0, length = big.length; i < length; ++i) {
        big[i] = i % 256
      }
      const b64 = fromUint8Array(big)
      const u8arr = toUint8Array(b64)

      assert(equal(u8arr, big))
      assert(b64byteLength(b64) === u8arr.length)
    })

    it('test2', () => {
      const str = input1.concat(input2, input3).join('').repeat(500_000)
      const len = (str.length / 1024 / 1024).toFixed(2)
      const ret1 = b64encode(str, TextEncoder)
      const ret2 = Buffer.from(str.toString()).toString('base64')

      console.info(`test2: string length ${len} MB`)
      assert(ret1 === ret2, `input: "${str.toString()}"`)
    })
  })
})
