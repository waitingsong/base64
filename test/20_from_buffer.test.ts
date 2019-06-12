/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')

import { ErrMsg } from '../src'
import { fromUint8Array } from '../src/lib/from_buffer'

import { input8, inputUint8Array } from './config'


const filename = basename(__filename)
const mods = rewire('../src/lib/from_buffer')

describe(filename, () => {
  describe('Should fromUint8Array() works', () => {
    it('with valid input', () => {
      input8.forEach(row => {
        const u8arr = Uint8Array.from(row[0])
        const actual = fromUint8Array(u8arr)
        const expected = row[1]
        assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
      })
    })
  })

  describe('Should fromUint8Array() works', () => {
    const fnName = 'encodeChunk'
    const fn = <(input: Uint8Array, start: number, end: number) => string> mods.__get__(fnName)

    it('with invalid start/end value', () => {
      [ [1, 0], [0, -1], [1, 1], [0, 0] ].forEach(([start, end]) => {
        try {
          fn(inputUint8Array[0], start, end)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrMsg.startMustGrossToEnd),
            ex.message,
          )
        }
      })
    })
  })
})
