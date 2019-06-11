/// <reference types="mocha" />

import * as assert from 'power-assert'

import { b64ByteLength } from '../src'
import { toUint8Array } from '../src/lib/to_buffer'

import { input8 } from './config'
import { equal } from './helper'


const filename = '20_to_buffer.test.ts'

describe(filename, () => {
  it('Should toUint8Array() works', () => {
    input8.forEach(row => {
      const input = row[1]
      const actual = toUint8Array(input)
      const expected = Uint8Array.from(row[0])

      assert(equal(actual, expected), 'Ensure that ' + input + ' deserialise to ' + expected)
      const byteLength = b64ByteLength(input)
      assert(byteLength === expected.length, 'Ensure that ' + input + ' has byte lentgh of ' + expected.length)
    })
  })

})
