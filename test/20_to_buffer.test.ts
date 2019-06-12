/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')

import { b64byteLength, ErrMsg } from '../src'
import { getLens, toUint8Array } from '../src/lib/to_buffer'

import { input8 } from './config'
import { equal } from './helper'


const filename = basename(__filename)
const mods = rewire('../src/lib/from_buffer')

describe(filename, () => {
  it('Should toUint8Array() works', () => {
    input8.forEach(row => {
      const input = row[1]
      const actual = toUint8Array(input)
      const expected = Uint8Array.from(row[0])

      assert(equal(actual, expected), 'Ensure that ' + input + ' deserialise to ' + expected)
      const byteLength = b64byteLength(input)
      assert(byteLength === expected.length, 'Ensure that ' + input + ' has byte lentgh of ' + expected.length)
    })
  })

  describe('Should getLens() works', () => {
    it('throw error with invalid length of input', () => {
      ['', 'a', 'ab', 'abc', 'abcde'].forEach(value => {
        try {
          getLens(value)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.base64Invalidlength),
            ex.message,
          )
        }
      })
    })
  })
})
