/// <reference types="mocha" />

import * as assert from 'power-assert'

import { b64byteLength, b64decode, b64encode } from '../src'
import { fromUint8Array } from '../src/lib/from_buffer'
import { toUint8Array } from '../src/lib/to_buffer'

import { input1, input2, isEdge, isIE } from './config'
import { equal } from './helper'


const filename = '20_big.test.ts'

describe(filename, () => {
  describe('Should fromUint8Array() works with big input', () => {
    it('test1', () => {
      const count = isIE || isEdge ? 64 * 1024 * 1024 : 128 * 1024 * 1024
      const big = new Uint8Array(count)

      for (let i = 0, length = big.length; i < length; ++i) {
        big[i] = i % 256
      }
      const b64 = fromUint8Array(big)
      const u8arr = toUint8Array(b64)
      assert(equal(u8arr, big))
      assert(b64byteLength(b64) === u8arr.length)
    })

    it('test2', () => {
      const count = isIE || isEdge ? 100_000 : 300_000
      const str = input1.concat(input2).join('').repeat(count)
      const len = (str.length / 1024 / 1024).toFixed(2)
      const ret1 = b64encode(str)
      const ret2 = b64decode(ret1)

      console.info(`test2: string length ${len} MB`)
      assert(ret2 === str)
    })
  })
})
